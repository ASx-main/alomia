<template>
  <div class="general-services margin-services">
    <CardService
      v-for="card of cardsServices"
      :key="card.title"
      class="general-services"
      :title="card.title"
      :text="card.text"
      :img="card.img"
    />
  </div>
</template>

<script>
import CardService from '@/components/CardService.vue'
import { cardsServices } from '@/data/cardsServices'

export default {
  components: {
    CardService
  },
  data () {
    return {
      cardsServices
    }
  }
}
</script>

<style lang="scss" scoped>
.general-services {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.margin-services {
  margin: 50px 0;
  row-gap: 40px;
}
</style>
