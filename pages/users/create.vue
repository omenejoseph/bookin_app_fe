<template>
    <div class="container">
        <BackButton/>
        <div class="content">
            <div class="col-md-8 offset-2" style="margin-bottom: 0 !important; padding-bottom: 0 !important;">
                <div class="card-header">Create User</div>
                <div class="card" style="margin-bottom: 0; padding-bottom: 0">
                    <div class="card-body" style="margin-bottom: 0 !important; padding-bottom: 20px !important;">
                        <UserForm @success="successful"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BackButton from "../../layouts/includes/BackButton";
    import UserForm from "../../components/UserForm";
    export default {
        name: "create",
        components: {UserForm, BackButton},
        methods: {
            successful(){
                this.$router.push('/users');
            }
        }
    }
</script>

<style scoped>
    .content{
        margin-bottom: 220px;
    }
</style>