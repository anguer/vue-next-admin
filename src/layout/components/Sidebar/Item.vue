<template>
  <i v-if="icon" :class="icon" />
  <span v-if="title" v-html="title" />
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
  },
};
</script>
