<template>
    <form action="" class="form">
        <span class="text-danger" v-if="errors.generalMessage">{{errors.generalMessage}}</span>
        <div class="form-group">
            <label for="">First Name</label>
            <div v-if="errors.first_name" class="text-danger">{{errors.first_name}}</div>
            <input v-model="formData.first_name" type="text" :class="{'form-control': true, 'is-invalid': errors.first_name}" placeholder="First Name">
        </div>
        <div class="form-group">
            <label for="">Last Name</label>
            <div v-if="errors.last_name" class="text-danger">{{errors.last_name}}</div>
            <input v-model="formData.last_name" type="text" :class="{'form-control': true, 'is-invalid': errors.last_name}" placeholder="Last Name">
        </div>
        <div v-if="!updateForm">
            <div class="form-group">
                <label for="">Username</label>
                <div v-if="errors.username" class="text-danger">{{errors.username}}</div>
                <input v-model="formData.username" type="text" :class="{'form-control': true, 'is-invalid': errors.username}" placeholder="Username">
            </div>
            <div class="form-group">
                <label for="">Email</label>
                <div v-if="errors.email" class="text-danger">{{errors.email}}</div>
                <input v-model="formData.email" type="email" :class="{'form-control': true, 'is-invalid': errors.email}" placeholder="Email">
            </div>
            <div class="form-group">
                <label for="">Password</label>
                <div v-if="errors.password" class="text-danger">{{errors.password}}</div>
                <input v-model="formData.password" type="password" :class="{'form-control': true, 'is-invalid': errors.password}" placeholder="Password">
            </div>
            <div class="form-group">
                <label for="">Confirm Password</label>
                <div v-if="errors.password_confirmation" class="text-danger">{{errors.password_confirmation}}</div>
                <input v-model="formData.password_confirmation" type="password" :class="{'form-control': true, 'is-invalid': errors.password}" placeholder="Retype Password">
            </div>
        </div>
        <div class="form-group">
            <label for="">Gender</label>
            <div v-if="errors.gender" class="text-danger">{{errors.gender}}</div>
            <select :class="{'form-control': true, 'is-invalid': errors.gender}" v-model="formData.gender">
                <option value="male"
                        :selected="formData.gender == 'male'">Male</option>
                <option value="female"
                        :selected="formData.gender == 'female'">Female</option>
            </select>
        </div>
        <div class="form-group">
            <label for="">Title</label>
            <div v-if="errors.title" class="text-danger">{{errors.title}}</div>
            <select :class="{'form-control': true, 'is-invalid': errors.title}" v-model="formData.title">
                <option value="mr"
                        :selected="formData.title == 'mr'">Mr</option>
                <option value="mrs"
                        :selected="formData.title == 'mrs'">Mrs</option>
                <option value="miss"
                        :selected="formData.title == 'miss'">Miss</option>
            </select>
        </div>
        <div class="form-group">
            <label for="">Phone</label>
            <div v-if="errors.phone" class="text-danger">{{errors.phone}}</div>
            <input v-model="formData.phone" type="tel" :class="{'form-control': true, 'is-invalid': errors.phone}" placeholder="Phone Number">
        </div>
        <div @click.prevent="updateForm ? update(user.id) : register()" class="btn btn-outline-primary btn-block">{{updateForm ? 'Update' : 'Create'}}</div>
    </form>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name: "UserForm",
        data: function () {
            return {
                formData:{},
                updateForm: false
            }
        },
        props: ['user'],
        created() {
            let user = {... this.user};
            this.formData = user;
            this.isEdit();
        },
        computed: {
            ...mapState('user', {
                errors: state => state.errors,
            })
        },
        methods: {
            register(){
                return this.handleSubmit(this.formData, 'createUser');
            },
            update(id){
                this.formData.id = id;
                delete this.formData.email;
                delete this.formData.password;
                delete this.formData.password_confirmation;
                delete this.formData.username;
                return this.handleSubmit(this.formData, 'updateUser');
            },
            isEdit(){
                console.log(this.user);
                let user = this.user;
                this.updateForm = Object.keys(user ? user : {}).length != 0;
            },
            handleSubmit(formData, action){
                formData.role = 'user';
                return this.$store.dispatch('user/'+action, formData)
                    .then(() => {
                        this.$store.dispatch('user/getUsers');
                        this.$emit('success');
                    })
                    .catch(err => {
                        let errors = {};
                        if (typeof err.response == "object"){
                            switch (err.response.status) {
                                case 422:
                                    errors = err.response.data.errors;
                                    errors.generalMessage = "You have some errors in your form";
                                    break;
                                case 404:
                                    errors = err.response.data.errors;
                                    errors.generalMessage = "User not found";
                                    break;
                                default:
                                    errors = err.response.data.errors;
                                    errors.generalMessage = "Something went wrong, Please try again";
                                    break;
                            }
                        }  else {
                            console.log(err.response);
                            console.log(err);
                        }
                        let newErrorsObj = {};

                        for (var key in errors) {
                            newErrorsObj[key] = errors[key][0];
                        }
                        this.$store.dispatch('user/setErrorData', newErrorsObj)
                    });
            }

        }
    }
</script>

<style scoped>

</style>