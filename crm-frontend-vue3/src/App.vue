<script setup lang="ts">
import Section from "./components/Section.vue";
import Header from "./components/Header.vue";
</script>

<template>
  <div class="wrapper">
    <Header class="header content-center" />
    <Section class="content-center" :items="[]" />
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  font-family: "Space Grotesk", sans-serif;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  background-image: linear-gradient(to bottom, #11233e, #3d2e50, #673857, #8a4754, #a25e4c);
}

.content-center {
  margin: 0 auto;
}

.header {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
