<template>
  <div>
    <CounterNumber
      v-for="number in counter"
      v-bind:key="number.id"
      v-bind:number="number.value"
    />
  </div>
</template>

<script>
import CounterNumber from '~/components/CounterNumber.vue'

export default {
  components: {
    CounterNumber
  },
  props: ['access_count','counter_length'],
  data: function () {
    return {
    }
  },
  computed: {
    counter: function () {
      return (this.access_count.toString().padStart(this.counter_length, 0).split('').map(function(element, index, array) {
        return { place: index, value: element };
      }));
    }
  }
}

</script>

<style>
</style>
