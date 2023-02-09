<template>
  <div>
    <div class="flex flex-col items-center text-white py-12">
      <p class="mb-8">予報時:{{ curWeather?.publicTimeFormatted }}</p>
      <h1 class="text-4xl mb-2">
        {{ curWeather?.title }}
      </h1>
      <img class="w-[150px] h-auto" :src="curWeather?.forecasts[0].image.url" />

      <p class="mb-8">
        {{ curWeather?.forecasts[0].tempreture?.max.celsius }}
      </p>
      <p class="mb-8">
        {{ curWeather?.forecasts[0].telop }}
      </p>
      <p class="mb-8 w-1/2">
        {{ curWeather?.description.text }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const route = useRoute();

console.log("route.query.code", route.query.code);

const curWeather = ref(null);
const searchError = ref(null);

const getWeather = async () => {
  try {
    const res = await axios.get(
      `https://weather.tsukumijima.net/api/forecast/city/${route.query.code}`
    );
    curWeather.value = res.data;
    console.log("curWeather.value", curWeather.value);
  } catch (error) {
    console.log("error", error);
    searchError.value = error;
  }
};
getWeather();
</script>
