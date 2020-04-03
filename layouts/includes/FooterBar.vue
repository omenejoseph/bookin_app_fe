<template>
    <div class="bg-dark" style="width: 100%">
        <div class="container">
            <div class="row">
                <div class="ml-auto">
                    <p>Copyright {{getCurrentYear()}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FooterBar",
        methods: {
            getCurrentYear(){
                return new Date().getFullYear();
            }
        }
    }
</script>

<style scoped>
    p{
        color: #98dfb6;
    }
</style>