<template>
    <div>
        <li class="sidebar-link" @click.prevent="showDropDown">
            <span><font-awesome-icon :icon="['fas', 'share-square']"/></span>
            {{title}} <span><font-awesome-icon :icon="['fas', icon]"/></span>
            <div ref="dropDownItems" :class="generateUniqueId" :style="{display: display}">
                <ul>
                    <li v-for="child in children">
                        <nuxt-link :to="child.link">
                            {{child.name}}
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </li>
        <hr>
    </div>

</template>

<script>
    import $ from 'jquery';
    export default {
        name: "SideBarDropDown",
        props: ['children', 'title'],
        data(){
          return {
              display: 'none',
              icon: 'chevron-right',
              subMenuId: null
          }
        },
        methods: {
            showDropDown(){
                const sidebarMenu = $('.'+ this.subMenuId);
                switch (this.display) {
                    case 'none':
                        sidebarMenu.css('display', 'block');
                        this.display = 'block';
                        this.icon = 'chevron-down';
                        break;
                    case 'block':
                        sidebarMenu.css('display', 'none');
                        this.display = 'none';
                        this.icon = 'chevron-right';
                        break
                }
            },
            generateUniqueId(){
                this.subMenuId = Math.random().toString(36).substring(2, 15);
                return  this.subMenuId;
            }
        }
    }
</script>

<style scoped>
    .sidebar-link a{
        text-decoration: none;
        color: inherit;
    }
</style>