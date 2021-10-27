<script>
export default {
  props: {
    title: {
      type: String,
    },
  }
}
</script>

<template>
  <div v-if="title || social" class="bg-barBottom flex absolute w-full bottom-0 left-0 py-0.5 px-4 text-sm ">
    <div class="w-1/2 text-left">
      {{ title }}
    </div>
    <div class="w-1/2 flex justify-end">
      <slot />
    </div>
  </div>
</template>