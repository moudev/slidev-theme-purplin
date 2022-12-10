<script setup>
const props = defineProps({
  position: {
    type: String,
    required: true,
    default: 'left'
  },
})

</script>

<template>
  <div class="slidev-layout quote">
    <div class="my-auto" :class="`text-${position}`">
      <slot />
    </div>
  </div>
</template>