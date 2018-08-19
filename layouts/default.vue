<template>
  <div>
    <AppHeader />
    <AppBody />
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import AppBody from '~/components/AppBody.vue'

export default {
  components: {
    AppHeader,
    AppBody
  }
}
</script>
