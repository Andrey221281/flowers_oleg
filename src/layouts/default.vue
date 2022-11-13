<script setup lang="ts">
import { Icon } from "@iconify/vue";
import Social from "~/components/social.vue";
</script>

<template>
  <div class="bg-black">
    <div style="max-width: 1920px; margin: 0 auto">
      <div class="flex main flex-col bg-black text-white min-h-screen w-full">
        <div class="flex-1 mb-auto block sm:flex justify-center">
          <div class="bg-red-400 p-4 flex flex-col justify-between">
            <div class="mx-auto">
              <div class="m text-center text-xl">СМОЛЦВЕТ</div>
              <div class="w-full px-4 mt-1">
                <div class="border-b border-2 border-white" />
              </div>
              <span class="text-xs text-center">Flowers & Plants</span>
            </div>
            <div class="bottom hidden sm:block">
              <div class="text-xs text-center">
                <div>smolcvet@mail.ru</div>
                <div>ТКиКХ Козино</div>
                <div>&copy; {{ new Date().getFullYear() }}</div>
              </div>
            </div>
          </div>
          <div class="w-full">
            <div class="border-b border-stone-800 text-right px-6 py-3">
              <div class="text-xl m flex items-center justify-between">
                <div>
                  <span class="text-xs align-middle">Режим работы:</span>
                  <span class="text-base ml-2 align-middle">24/7</span>
                </div>
                <div class="flex items-center">
                  <div>
                    <span class="text-base text-stone-400 m">+7 (4812) </span>
                    <span class="m">63-04-49</span>
                  </div>
                  <a href="https://ok.ru/profile/569456283244" target="_blank">
                    <Icon
                      class="text-2xl ml-3 cursor-pointer"
                      icon="fa6-brands:square-odnoklassniki"
                    />
                  </a>
                  <a href="https://vk.com/smolcvetrf" target="_blank">
                    <Icon
                      class="text-2xl ml-2 cursor-pointer"
                      icon="fa6-brands:vk"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div class="p-10 mt-0 xl:mt-20">
              <slot />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.main {
  background: url("../assets/main.jpg") no-repeat;
  background-size: cover;
}
</style>
