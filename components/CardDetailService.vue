<template>
  <div>
    <img :src="getImg" alt="">
    <span>
      {{ title }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'DetailServices',
  props: {
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },

  computed: {
    getImg () {
      return require(`@/assets/img/${this.img}`)
    }
  }
}
</script>
