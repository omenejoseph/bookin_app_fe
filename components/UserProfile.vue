<template>
    <div class="container">
        <BackButton/>
        <div class="content">
            <div class="card pt-3">
                <div class="card-header">User Profile <span class="float-right">@{{user.username}}</span></div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-3">
                            <img src="https://www.clipartmax.com/png/small/144-1442578_flat-person-icon-download-dummy-man.png" alt="profile-pix" style="width: 100%; height: 100%">
                            <h6>{{user.first_name + ' ' + user.last_name}}</h6><br>
                        </div>
                        <div class="col-md-9">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque est perferendis totam. Animi commodi consequatur eaque eveniet, facere impedit numquam perferendis perspiciatis quisquam voluptates! Aliquam autem cum esse nemo pariatur.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores cumque harum, illo ipsa iste laborum nobis nulla numquam odio officiis perferendis perspiciatis possimus quia reiciendis rem tenetur velit voluptatem.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BackButton from "../layouts/includes/BackButton";
    export default {
        name: "UserProfile",
        components: {BackButton},
        props: ['user']
    }
</script>

<style scoped>

</style>