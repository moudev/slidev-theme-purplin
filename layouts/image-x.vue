
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    image: {
      type: String,
      required: true,
    },
    imageOrder: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const imageOrder = props.imageOrder === 1 ? 'order-1' : 'order-2'
    const textAlignment = props.imageOrder === 1
      ? 'text-right order-2 justify-end'
      : 'text-left order-1 justify-start'

    return {
      imageOrder,
      textAlignment,
    }
  },
})
</script>

<template>
  <div class="slidev-layout h-full grid image-x">
    <div class="my-auto flex">
      <div class="w-1/2 flex justify-center items-center p-8 max-h-md object-cover" :class="imageOrder">
        <img :src="image" class="rounded-2xl border-image h-full object-cover" />
      </div>
      <div class="w-1/2 flex items-center" :class="textAlignment">
        <slot />
      </div>
    </div>
  </div>
</template>