<template>
    <div>
        <UserProfile :user="user"/>
    </div>
</template>

<script>
    import BackButton from "../../../layouts/includes/BackButton";
    import {mapState} from 'vuex';
    import UserProfile from "../../../components/UserProfile";

    export default {
        components: {UserProfile, BackButton},
        middleware: 'auth',
        created() {
            this.$store.dispatch('user/getUser', this.$route.params.id);
        },
        computed: {
            ...mapState('user', {
                user: state => state.user
            })
        }
    }
</script>

<style scoped>

</style>