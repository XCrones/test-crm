<script setup lang="ts">
import Preloader from "./ui/Preloader.vue";
import { computed, ref } from "vue";
import { useCrmApi } from "../store/essence";

const crmApi = useCrmApi();

const selectCategory = ref(crmApi.essenceNotSelect);
const isValidForm = computed(() => selectCategory.value !== crmApi.essenceNotSelect);

const onSubmit = () => {
  if (isValidForm.value && !crmApi.isPending) {
    crmApi.joinEssence(selectCategory.value);
  }
};
</script>

<template>
  <header class="header">
    <form class="form" @submit.prevent="() => onSubmit()">
      <select :disabled="crmApi.isPending" v-model="selectCategory" class="form__select">
        <option v-for="item in crmApi.essences" :key="item" :value="item">{{ item }}</option>
      </select>
      <button
        :disabled="crmApi.isPending"
        :style="{ cursor: !crmApi.isPending && isValidForm ? 'pointer' : 'not-allowed' }"
        type="submit"
        :class="{
          'form-valid': isValidForm,
          form__submit: true,
        }"
      >
        <span v-if="!crmApi.isPending">создать</span>
        <Preloader v-else />
      </button>
    </form>
    <h1 class="header__error">{{ crmApi.responseErr }}</h1>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  flex-direction: column;

  &__error {
    color: red;
    font-size: 14px;
    padding: 5px;
  }
}

.form {
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 25px;

  &__select,
  &__submit {
    height: 30px;
    border-radius: 5px;
    border: 0;
    outline: 0;
  }

  &__select {
    width: 120px;
    font-size: 15px;
    color: #124e74;
    background-color: #eee;
  }

  &__submit {
    padding: 5px 15px;
    width: 100px;
    text-transform: capitalize;
    transition: all 200ms ease-in;
  }
}

.form-valid {
  color: #fff;
  background: rgb(136, 200, 222);
  background: linear-gradient(94deg, rgba(136, 200, 222, 1) 0%, rgba(59, 146, 176, 1) 100%);
  animation: shake 200ms cubic-bezier(0.23, 1, 0.32, 1);
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10%,
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30%,
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50%,
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70%,
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90%,
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}
</style>
