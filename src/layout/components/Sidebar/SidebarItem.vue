<template>
  <template v-if="!item.hidden&&item.children">
    <template v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow">

      <app-link :to="resolvePath(onlyOneChild.path)">
        <el-menu-item :index="resolvePath(onlyOneChild.path)" class="vna-menu-item">
          <template #title>
            <span>{{ onlyOneChild.meta.title }}</span>
          </template>
          <item v-if="onlyOneChild.meta" :icon="onlyOneChild.meta.icon||item.meta.icon" />
        </el-menu-item>
      </app-link>
    </template>
    <template v-else>
      <el-submenu :index="resolvePath(item.path)" class="vna-submenu" popper-class="vna-submenu-popper" popper-append-to-body>
        <template #title>
          <item v-if="item.meta" :icon="item.meta.icon" :title="item.meta.title" />
        </template>

        <template v-for="(child, index) in item.children.filter(o => !o.hidden)" :key="index">
          <sidebar-item
            v-if="child.children&&child.children.length>0"
            :is-nest="true"
            :item="child"
            :base-path="resolvePath(child.path)"
          />
          <app-link v-else :to="resolvePath(child.path)">
            <el-menu-item :index="resolvePath(child.path)" class="vna-menu-item">
              <item v-if="child.meta" :icon="child.meta.icon" :title="child.meta.title" />
            </el-menu-item>
          </app-link>
        </template>
      </el-submenu>
    </template>
  </template>
</template>

<script>
import { ref } from 'vue';
import { resolve } from '@/helper/path';
import { isExternal } from '@/helper';
import Item from './Item.vue';
import AppLink from './Link.vue';

export default {
  name: 'SidebarItem',
  components: { Item, AppLink },
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },

  setup (props) {
    const onlyOneChild = ref(null);

    const hasOneShowingChild = (children, parent) => {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false;
        } else {
          // Temp set(will be used if only has one showing child)
          onlyOneChild.value = item;
          return true;
        }
      });

      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true;
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        onlyOneChild.value = { ...parent, path: '', noShowingChildren: true };
        return true;
      }

      return false;
    };

    const resolvePath = (routePath) => {
      if (isExternal(routePath)) {
        return routePath;
      }
      return resolve(props.basePath, routePath);
    };

    return {
      onlyOneChild,
      hasOneShowingChild,
      resolvePath,
    };
  },
};
</script>
