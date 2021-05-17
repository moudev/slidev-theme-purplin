<script>
export default {
  props: {
    title: {
      type: String,
    },
    social: {
      type: Array
    }
  }
}
</script>

<template>
  <div v-if="title || social" class="bg-barBottom flex absolute w-full bottom-0 left-0 py-0.5 px-4 text-sm ">
    <div class="w-1/2 text-left">
      {{ title }}
    </div>
    <div class="w-1/2 flex justify-end">
      <div v-for="type in social" :key="type.type" class="flex justify-center items-center ml-4">
        <span><LogoIcon :type="type.type" /></span>
        <span class="ml-0.5">{{type.username}}</span>
      </div>
    </div>
  </div>
</template>