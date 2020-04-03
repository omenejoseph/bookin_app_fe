<template>
    <div class="container">
        <BackButton/>
        <div class="row">
            <SideBar/>
            <div class="col-md-10">
                <h1>Users List</h1>
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>title</th>
                            <th>name</th>
                            <th>username</th>
                            <th>email</th>
                            <th>phone</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(user, index) in users" :key="user.id">
                            <td>{{index + 1}}</td>
                            <td>{{user.title}}</td>
                            <td>{{user.first_name + " " + user.last_name}}</td>
                            <td>{{user.username}}</td>
                            <td>{{user.email}}</td>
                            <td>{{user.phone}}</td>
                            <td>
                                <div>
                                    <b-dropdown id="dropdown-1" text="" class="m-md-2">
                                        <b-dropdown-item @click.prevent="showEditModal(user.id)">Edit</b-dropdown-item>
                                        <b-dropdown-item><nuxt-link class="nuxt-link" :to="'/users/' + user.id">View</nuxt-link></b-dropdown-item>
                                        <b-dropdown-item>Delete</b-dropdown-item>
                                    </b-dropdown>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item"><a class="page-link" href="#" @click.prevent="previousPage()">Previous</a></li>
                            <li v-for="page in numberOfPages" class="page-item"><a class="page-link" href="#" @click.prevent="goToPage(page)">{{page}}</a></li>
                            <li class="page-item"><a class="page-link" href="#" @click.prevent="nextPage()">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        <div>
            <b-modal id="edit-modal" title="Edit User">
                <UserForm :user="user" @success="closeModal"/>
            </b-modal>
        </div>
    </div>

</template>

<script>
    import BackButton from "../../layouts/includes/BackButton";
    import {mapState} from 'vuex';
    import UserForm from "../../components/UserForm";
    import SideBar from "../../layouts/includes/SideBar";
    export default {
        name: "index",
        components: {SideBar, UserForm, BackButton},
        async fetch({ store, params }){
            await store.dispatch('user/getUsers');
        },
        computed: {
            ...mapState('user', {
                users: state => state.users,
                user: state => state.user,
                meta: state => state.meta,
            }),
            numberOfPages(){
                return Math.floor(this.meta.total / this.meta.per_page) + 1;
            }
        },
        methods: {
            async showEditModal(id){
                await this.$store.dispatch('user/getUser', id);
                this.$bvModal.show('edit-modal')
            },
            closeModal(){
                this.$bvModal.hide('edit-modal')
            },
            async previousPage(){
                await this.$store.dispatch('user/getUsers', this.meta.prev_page_url);
            },
            async nextPage(){
                await this.$store.dispatch('user/getUsers', this.meta.next_page_url);
            },
            async goToPage(page){
                await this.$store.dispatch('user/getUsers', '/users?page=' + page);
            }
        }

    }
</script>

<style scoped>

</style>