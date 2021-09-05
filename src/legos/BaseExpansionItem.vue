<template>
  <div class="border border-grey my-6 rounded-lg">
    <q-expansion-item
      expand-separator
      :default-opened="isOpenByDefault"
      expand-icon="img:/img/icons/down-arrow.svg"
      header-class="bg-app-bluish-grey rounded-tl-lg rounded-tr-lg"
    >
      <template v-slot:header>
        <div
          class="flex items-center text-app-primary font-semibold flex-1 xl:px-2 xl:py-4"
        >
          <img :src="icon" />
          <div class="ml-3">{{ headerTitle }}</div>
        </div>
      </template>
      <slot></slot>
    </q-expansion-item>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseExpansionItem",
  props: {
    headerTitle: String,
    icon: String,
    isOpenByDefault: Boolean,
  },
});
</script>
