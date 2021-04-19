<template>
  <div v-bind="linkProps(to)" @click="handleClick">
    <slot/>
  </div>
</template>

<script>
import { isExternal } from '@/helper';

export default {
  props: {
    to: {
      type: String,
      required: true
    }
  },
  methods: {
    isExternalLink (routePath) {
      return isExternal(routePath);
    },
    linkProps (url) {
      if (this.isExternalLink(url)) {
        return {
          is: 'a',
          href: url,
          target: '_blank',
          rel: 'noopener'
        };
      }
      return {
        is: 'a',
        to: url
      };
    },
    handleClick (e) {
      if (!this.isExternalLink(this.to)) {
        e.preventDefault();
        if (this.$route.path === this.to) {
          this.$router.push(this.to);
          // this.$router.push({
          //   path: '/redirect',
          //   query: {
          //     path: this.to
          //   }
          // });
        } else {
          this.$router.push(this.to);
        }
      }
    }
  }
};
</script>
