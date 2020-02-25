<template>
  <q-page padding>
    <Salary outlined :value=value :currency=currency :period=period />
  </q-page>
</template>

<style lang="sass" scoped>
.directive-target
  width: 50px
  height: 50px
</style>

<script>
export default {
  data () {
    return {
      value: 1000,
      currency: 'USD',
      period: 'm'
    }
  }
}
</script>