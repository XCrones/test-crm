<script setup lang="ts">
defineProps({
  width: { type: Number },
  height: { type: Number },
  rounded: { type: Number },
});
</script>

<template>
  <div
    :style="{
      width: !!width ? `${width}px` : '100%',
      height: !!height ? `${height}px` : '100%',
      borderRadius: !!rounded ? `${rounded}px` : '0',
    }"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      :width="!!width ? `${width}px` : '100%'"
      :height="!!height ? `${height}px` : '100%'"
      viewBox="0 0 100 100"
    >
      <circle cx="50" cy="50" fill="none" stroke="#fff" stroke-width="10" r="30" stroke-dasharray="90 90">
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1000ms"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        ></animateTransform>
      </circle>
    </svg>
  </div>
</template>

<style scoped lang="scss"></style>
