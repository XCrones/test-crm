import { AxiosError } from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "../axios";
import { IEssence } from "../models/essence";

interface ResponsePost {
  id: number;
}

export const useCrmApi = defineStore("crmApi", () => {
  const isPending = ref(false);
  const essenceNotSelect = ref("не выбрано");
  const essences = [essenceNotSelect.value, "сделка", "контакт", "компания"];
  const completeEssences = ref<IEssence[]>([]);
  const responseErr = ref("");

  const parseEssence = (value: string) => {
    switch (value) {
      case "сделка":
        return "leads";
      case "контакт":
        return "contacts";
      case "компания":
        return "companies";
      default:
        return value;
    }
  };

  const joinEssence = async (essense: string) => {
    try {
      responseErr.value = "";
      isPending.value = true;

      const essence = parseEssence(essense);

      const { data } = await axios.post<ResponsePost | AxiosError>(
        `essences/${essence}`,
        { essence: essence },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const getData = data as ResponsePost;

      if (!!getData) {
        completeEssences.value.push({
          id: getData.id,
          name: essense,
        });
      }
    } catch (error) {
      const err = error as AxiosError;
      responseErr.value = String(err.message);
    } finally {
      isPending.value = false;
    }
  };

  return {
    isPending,
    completeEssences,
    joinEssence,
    essences,
    essenceNotSelect,
    responseErr,
  };
});
