<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    type: {
      type: String,
      require: true,
      default: 'default',
    },
  },
  computed: {
    convertedTypeToLowercase() {
      return this.type.toLowerCase()
    },
  },
})
</script>

<template>
  <carbon:logo-youtube v-if="convertedTypeToLowercase === 'yt'" />
  <carbon:logo-twitter v-else-if="convertedTypeToLowercase === 'tw'" />
  <carbon:logo-instagram v-else-if="convertedTypeToLowercase === 'ig'" />
  <carbon:logo-facebook v-else-if="convertedTypeToLowercase === 'fb'" />
  <carbon:logo-github v-else-if="convertedTypeToLowercase === 'gh'" />
  <carbon:logo-linkedin v-else-if="convertedTypeToLowercase === 'lk'" />
  <carbon:link v-else-if="convertedTypeToLowercase === 'wb'" />
  <carbon:user-filled v-else />
</template>
