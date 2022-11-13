<script setup lang="ts">
import Layout from "~/layouts/default.vue";
</script>

<template>
  <Layout>
    <div>
      <h1 class="text-white main-title text-5xl lg:text-8xl">Доставка роз</h1>
      <h2 class="text-white m-t text-base lg:text-lg mt-3 mb-5">
        Служба доставки при тепличном комбинате предлагает свежие розы <br />
        по оптовым ценам с круглосуточной доставкой.
      </h2>
      <h3 class="bg-red-400 py-2 px-4 inline mt-2">60-70 см.</h3>
      <h3 class="bg-red-400 py-2 px-2 inline border-l-2 border-white">
        110 руб.
      </h3>
      <div class="w-full mt-20">
        <div class="flex flex-wrap mb-4">
          <div class="w-full p-3">
            <h1 class="text-4xl mb-5">Как мы работаем?</h1>
            <ul>
              <li class="">- Определитесь с датой и временем 24/7.</li>
              <li class="mt-2">- Свяжитесь с нами +7 (4812) 63-04-49.</li>
              <li class="mt-2">
                - В строго-назначенное время наш курьер доставит вам букет.
              </li>
            </ul>
          </div>
          <div class="w-full mt-10 flex flex-wrap lg:flex-nowrap justify-end">
            <div v-for="n in 4" class="ml-3 border-4">
              <img
                class="w-full object-cover"
                :src="`/img/img-${n}.jpg`"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<style>
.main-title,
.m {
  font-family: "Russo One", sans-serif;
}
</style>
