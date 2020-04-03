<template>
  <div class="container">
  </div>
</template>

<script>
  export default {
    components: {

    },
    head: {
      title: 'Home page 🚀',
      meta: [
        { hid: 'description', name: 'description', content: 'Home page description' }
      ],
      noscript: [
        { innerHTML: 'Body No Scripts', body: true }
      ],
      script: [
        { src: '/head.js' },
        // Supported since 1.0
        { src: '/body.js', body: true },
        { src: '/defer.js', defer: '' },
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js'
        },
        {
          src: 'https://unpkg.com/vue-chartjs/dist/vue-chartjs.min.js'
        },
      ]
    }
  }
</script>

<style>


</style>
