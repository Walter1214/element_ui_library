<style lang="stylus">
.input
  position relative
  width 100%

  &__text
    width 100%
    border-radius 4px
    padding 0 16px
    border 1px solid var(--secondary)
    font-size rem(14px)

    &:focus, &:active
      outline none
      border-color var(--primary)

    &:hover
      border-color var(--primary)

  &[data-is-disabled=true]
    .input__text
      border none
      pointer-events none
      background-color rgba(0, 0, 0, .05)
      color #bfbfbf

    .input__icon
      display none

  &__prefix
    position absolute
    display flex
    justify-content center
    align-items center
    height 100%
    left 0
    top 0

  &__suffix
    position absolute
    display flex
    justify-content center
    align-items center
    height 100%
    right 0
    top 0

  &[data-is-error=true]
    .input__text
      border-color var(--error-color)
</style>
<template lang="pug">
.input(:data-is-disabled="isDisabled" :data-is-error="isError")
  input.input__text(
              :value="value"
              @input="$emit('input', $event.target.value)"
              @blur="$emit('blur')"
              v-bind="$attrs"
              v-on="$listeners"
              )
  .input__prefix
    slot(name="prefix")
  .input__suffix
    slot(name="suffix")
</template>

<script lang="ts">
import Vue from 'vue'

// interface Props {

// }

export default Vue.extend({
  name: 'BasicInput',
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number, Array, Object],
      default: ''
    },
    isError: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  }
})
</script>
