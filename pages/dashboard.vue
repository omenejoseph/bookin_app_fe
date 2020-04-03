<template>
    <div class="container">
        <h3 class="marquee-text">Welcome to your dashboard {{$auth.user.first_name}}</h3>
        <div class="pt-5">
            <div class="row">

                <SideBar/>
                <div class="col-md-10">
                    <div class="container">
                            <div class="row">
                                <div class="mr-auto">
                                    <div class="" style="padding-left: 25px;">
                                        <h4 class="pt-3" style="margin-left: -33px">Total Bookings</h4>
                                        <div style="height: 70px; width: 70px; border-radius: 100%; background-color: #1B4B72;"></div>
                                        <h3 style="margin-top: -50px; padding-left: 25px;" class="text-light">3</h3>
                                        <nuxt-link class="nuxt-link" to="/bookings/create">
                                            <h6 style="margin-left: -30px;" class="pt-3">Create Booking <span><font-awesome-icon :icon="['fas', 'folder-plus']"/></span></h6>
                                        </nuxt-link>
                                    </div>
                                </div>
                                <div class="ml-auto">
                                    <h4 class="pt-3" style="margin-left: -31px">Total Users</h4>
                                    <div style="height: 70px; width: 70px; border-radius: 100%; background-color: #1B4B72"></div>
                                    <h3 style="margin-top: -50px; padding-left: 25px;" class="text-light">3</h3>
                                    <nuxt-link class="nuxt-link" to="/users/create">
                                        <h6 class="pt-3">Add user <span><font-awesome-icon :icon="['fas', 'user-plus']"/></span></h6>
                                    </nuxt-link>
                                </div>
                            </div>
                        <div class="row pt-3 pb-5">
                            <div class="col-md-6">
                                <BarChart/>
                            </div>
                            <div class="col-md-6">
                                <LineChart/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import BarChart from "../layouts/includes/BarChart";
    import LineChart from "../layouts/includes/LineChart";
    import SideBar from "../layouts/includes/SideBar";
    export default {
        name: "dashboard",
        components: {SideBar, LineChart, BarChart},
        middleware: 'auth',
    }
</script>

<style scoped>
    .marquee-text {
        position: absolute;
        width: 100%;
        height: 100%;
        margin: 0;
        line-height: 50px;
        text-align: center;
        /* Starting position */
        -moz-transform:translateX(100%);
        -webkit-transform:translateX(100%);
        transform:translateX(100%);
        /* Apply animation to this element */
        -moz-animation: scroll-left 10s linear infinite;
        -webkit-animation: scroll-left 10s linear infinite;
        animation: scroll-left 10s linear infinite;
    }
    /* Move it (define the animation) */
    @-moz-keyframes scroll-left {
        0%   { -moz-transform: translateX(100%); }
        100% { -moz-transform: translateX(-100%); }
    }
    @-webkit-keyframes scroll-left {
        0%   { -webkit-transform: translateX(100%); }
        100% { -webkit-transform: translateX(-100%); }
    }
    @keyframes scroll-left {
        0%   {
            -moz-transform: translateX(100%); /* Browser bug fix */
            -webkit-transform: translateX(100%); /* Browser bug fix */
            transform: translateX(100%);
        }
        100% {
            -moz-transform: translateX(-100%); /* Browser bug fix */
            -webkit-transform: translateX(-100%); /* Browser bug fix */
            transform: translateX(-100%);
        }
    }
    .sidebar{
        background-color: #1b4b72;
        height: 500px;
        border-radius: 10px;
        color: #95999c;
    }
    .sidebar img{
        margin: 10px 0 0 30px;
    }
    .sidebar hr{
        background-color: #98dfb6;
    }
    .sidebar-link{
        list-style: none;
        text-decoration: none;
        color: inherit;
    }
</style>