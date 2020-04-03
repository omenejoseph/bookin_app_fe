<template>
    <div class="container">
        <div class="col-md-6 offset-3 pt-2">
            <div class="card">
                <div class="card-header">Login</div>
                <div class="card-body">
                    <p v-if="error.generalMessage" class="text-danger">{{error.generalMessage}}</p>
                    <form @submit.prevent="userLogin">
                        <div class="form-group">
                            <label>Username</label>
                            <input :class="{'form-control': true, 'is-invalid': error.username}" type="text" v-model="login.username" />
                            <p v-if="error.username" class="text-danger">{{error.username[0]}}</p>
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input :class="{'form-control': true, 'is-invalid': error.username}" type="password" v-model="login.password" />
                            <p v-if="error.password" class="text-danger">{{error.password[0]}}</p>
                        </div>
                        <div class="form-group">
                            <button class="btn btn-outline-dark btn-block" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                login: {
                    username: '',
                    password: ''
                },
                error: {
                    username: null,
                    password: null,
                    generalMessage: null
                }
            }
        },
        methods: {
            async userLogin() {
                try {
                    await this.$auth.loginWith('local', { data: this.login });
                } catch (err) {
                    if (typeof err.response == "object"){
                        switch (err.response.status) {
                            case 422:
                                const errors = err.response.data.errors;
                                this.error.username = errors.username;
                                this.error.password = errors.password;
                                this.error.generalMessage = "You have some errors in your form";
                                break;
                            case 404:
                                this.error.generalMessage = "Username or Password is not correct";
                                break;
                            default:
                                this.error.generalMessage = "Something went wrong, Please try again";
                                break;
                        }
                    }  else {
                        console.log(err.response);
                        console.log(err);
                    }

                }
            }
        },
        head: {
            title: 'Login page 🚀',
            meta: [
                { hid: 'description', name: 'description', content: 'Home page description' }
            ],
            noscript: [
                { innerHTML: 'Body No Scripts', body: true }
            ],
            script: [
                { src: '/head.js' },
                // Supported since 1.0
                { src: '/body.js', body: true },
                { src: '/defer.js', defer: '' }
            ]
        }
    }
</script>