<template>
    <div>
        <UserProfile :user="$auth.user"/>
    </div>
</template>

<script>
    import UserProfile from "../components/UserProfile";
    export default {
        name: "profile",
        components: {UserProfile},
        middleware: 'auth'
    }
</script>

<style scoped>

</style>