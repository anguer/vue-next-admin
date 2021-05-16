<template>
  <div v-bind="linkProps(to)" @click="handleClick">
    <slot/>
  </div>
</template>

<script>
import { isExternal } from '@/helper';
import { useRouter, useRoute } from 'vue-router';

export default {
  props: {
    to: {
      type: String,
      required: true
    }
  },
  setup (props) {
    const router = useRouter();
    const route = useRoute();

    const linkProps = (url) => {
      if (isExternal(url)) {
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
    };

    const handleClick = (e) => {
      if (!isExternal(props.to)) {
        e.preventDefault();
        if (route.path === props.to) {
          router.push(props.to);
          // router.push({
          //   path: '/redirect',
          //   query: {
          //     path: props.to
          //   }
          // });
        } else {
          router.push(props.to);
        }
      }
    };

    return {
      linkProps,
      handleClick
    };
  }
};
</script>
