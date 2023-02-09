<template>
  <main class="container text-white">
    <!-- <div class="pt-4 mb-8 relative">
      <input
        type="text"
        v-model="searchQuery"
        v-on:keydown.enter="getSearchResult"
        placeholder="検索"
        class="py-2 px-1 w-full bg-transparent border-b focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004e71]"
      />
    </div> -->
    <div class="pt-4 mb-8 flex">
      <div
        class="py-2 px-1 flex-1 border-b focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004e71]"
      >
        <label class="label">都道府県</label>
        <select
          v-model="curPref"
          @change="changePref"
          class="white bg-weather-primary w-52 text-center"
        >
          <option disabled value="initial">未選択</option>
          <option v-for="pref in prefs">{{ pref.name }}</option>
        </select>
      </div>
      <div
        class="py-2 px-1 border-b flex-1 focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004e71]"
      >
        <label>地域</label>
        <select
          v-model="curCity"
          class="white bg-weather-primary w-52 text-center"
        >
          <option disabled value="initial">未選択</option>
          <option v-for="city in citys" :value="city.id">
            {{ city.name }}
          </option>
        </select>
      </div>

      <div
        class="py-2 px-12 flex-0 text-center border-b focus:shadow-[0px_1px_0_0_#004e71]"
      >
        <button
          class="bg-weather-primary hover:bg-weather-secondary text-white rounded outline-white"
          @click="getWeather"
          :disabled="canSendBtn"
        >
          決定
        </button>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import infoTbl from "../data/infoTbl";

const prefs = ref(infoTbl.prefs);
const citys = ref(null);
const curPref = ref("initial");
const curCity = ref("initial");
const loading = ref(false);

const router = useRouter();

const changePref = () => {
  console.log(prefs.value);
  const pref = prefs.value.filter((pref) => pref.name === curPref.value);
  console.log("curPref", curPref);
  console.log("pref", pref);
  console.log("pref[0]", pref[0]);
  console.log("pref[0].citys", pref[0].citys);
  console.log("pref.value", pref.value);
  if (pref.length != 0) {
    citys.value = pref[0].citys;
    curCity.value = "initial";
  }
};

const canSendBtn = computed(() =>
  curPref.value && curCity.value && !loading.value ? false : true
);

const getWeather = async () => {
  console.log("curCity.value", curCity.value);
  router.push({ name: "cityView", query: { code: curCity.value } });
};
</script>
