<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <nuxt-link class="navbar-brand" to="/">Bookings</nuxt-link>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown v-if="$auth.user" right>
                        <!-- Using 'button-content' slot -->
                        <template v-slot:button-content>
                            <font-awesome-icon :icon="['fas', 'user']"/>
                        </template>
                        <nuxt-link class="dropdown-item" to="/dashboard">Dashboard</nuxt-link>
                        <nuxt-link class="dropdown-item" to="/profile">Profile</nuxt-link>
                        <b-dropdown-item @click.prevent="signOut" href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
        methods: {
            async signOut(){
                await this.$auth.logout();
            }
        }
    }
</script>

<style scoped>

</style>