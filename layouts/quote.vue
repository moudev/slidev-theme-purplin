<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    position: {
      type: String,
      required: true,
      default: 'left',
    },
  },
  setup(props) {
    const textAlignment = props.position

    return {
      textAlignment,
    }
  },
})
</script>

<template>
  <div class="slidev-layout quote">
    <div class="my-auto" :class="`text-${textAlignment}`">
      <slot />
    </div>
  </div>
</template>