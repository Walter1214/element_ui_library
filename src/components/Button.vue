<style lang="stylus">
.button
  display inline-block
  min-width 130px
  width auto
  border-radius 3px
  border-width 1px
  border-style solid
  font-weight normal
  line-height normal

  &[data-size='default']
    min-width 100px
    padding 6px 16px
    font-size rem(18px)

  &[data-type='default']
    background-color var(--primary)
    border-color var(--primary)
    color #ffffff

    &:hover
      background-color #b11a27
      border-color #b11a27
      color #ffffff
      opacity 0.8

    &:focus
      color #ffffff
      border-color #b11a27
      background-color #b11a27

  &[data-is-disabled='true']
    opacity 0.2
</style>
<template lang="pug">
el-button.button(
  :data-type="type"
  :data-size="size"
  :disabled="isDisabled"
  :data-is-error="isError"
  :loading="isloading"
  @click.stop.prevent="$emit('click')"
)
  slot
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'default'
    },
    isloading: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    isError: {
      type: Boolean,
      default: false
    }
  }
}
</script>
