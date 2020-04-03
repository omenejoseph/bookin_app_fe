<template>
    <div class="col-md-2 sidebar">
        <img class="rounded" src="https://www.clipartmax.com/png/small/144-1442578_flat-person-icon-download-dummy-man.png" alt="sodiid" style="width: 100px; height: 100px">
        <h4 class="text-center">@{{$auth.user.username}}</h4>
        <hr>
        <ul>
            <SideBarDropDown
                    title="Bookings"
                    :children="[
                {'name': 'Create', 'link': '/bookings/create'},
                {'name': 'List', 'link': '/bookings'},
                ]"
            />
            <SideBarDropDown
                    title="Users"
                    :children="[
                {'name': 'Create', 'link': '/users/create'},
                {'name': 'List', 'link': '/users'},
                ]"
            />
        </ul>
    </div>
</template>
<script>
    import SideBarDropDown from "./SideBarDropDown";
    export default {
        name: "SideBar",
        components: {SideBarDropDown},
        data(){
            return {

            }
        },
        methods: {
            showDropDown(){
                document.getElementsByClassName('sidebar-submenu').style.display = 'block';
            }
        }
    }
</script>

<style scoped>
    .sidebar{
        background-color: #1b4b72;
        height: 700px;
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