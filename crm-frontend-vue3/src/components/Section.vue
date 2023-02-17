<script setup lang="ts">
import { useCrmApi } from "../store/essence";

const crmApi = useCrmApi();
</script>

<template>
  <section class="section">
    <div class="section__item">
      <table class="customTable">
        <thead>
          <tr>
            <th>№</th>
            <th>id</th>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="crmApi.completeEssences.length > 0" v-for="(item, idx) in crmApi.completeEssences" :key="item.id">
            <td class="">{{ idx + 1 }}</td>
            <td class="">{{ item.id }}</td>
            <td class="">{{ item.name }}</td>
          </tr>
          <tr v-else>
            <td class="">empty</td>
            <td class="">empty</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section {
  max-height: 500px;
  overflow: hidden;
  overflow-y: auto;
  width: 100%;
  &__item {
    display: flex;
    padding: 0 20px;
  }
}
.customTable {
  margin: 0 auto;
  flex: 0 1 50%;
  background-color: #ffffff;
  border-collapse: collapse;
  border-width: 2px;
  border-color: #35496e;
  border-style: solid;
  color: #000000;
  min-width: 300px;

  & > thead {
    background-color: #35496e;
  }

  & th,
  & td {
    border-width: 2px;
    border-color: #35496e;
    border-style: solid;
    padding: 5px;
    text-align: center;
  }
}
</style>
