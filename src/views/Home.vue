<template>
  <div
    id="home"
    class="relative max-w-7xl mx-auto manrope-regular"
  >
    <div
      aria-hidden="true"
      class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40"
    >
      <div class="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400" />
      <div class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300" />
    </div>
    <div class="px-6">
      <div class="relative ml-auto">
        <div class="lg:w-full mx-auto mt-16">
          <h1 class="text-gray-900 font-bold text-4xl md:text-4xl xl:text-4xl">
            <span class="text-primary">Pop-Ups or Paywalls:</span> Is This the Best We Can Do?
          </h1>
          <div class="mt-6 flex">
            <div class="bg-gray-100 p-4 rounded-xl">
              <h2 class="text-gray-900 text-xl">
                Another wasted journey terminated at a Paywall
              </h2>
              <img
                class="mt-2"

                src="/images/dfd169e3b8cba91955f3dd359b7d1d0e.png"
              >
            </div>
            <div class="bg-gray-100 p-4 rounded-xl ml-4">
              <h2 class="text-gray-900 text-xl">
                Information overload through pop-ups and ads
              </h2>
              <img
                class="mt-2"
                src="/images/aa17d9c6ac38f2e93d6acaf35b1e7111.png"
              >
            </div>
          </div>
          <div class="mt-16 flex flex-wrap gap-y-4 gap-x-6">
            <a
              href="/article"
              class="relative flex h-11 w-64 items-center justify-center px-6 rounded-lg bg-black text-white"
            >
              <span class="relative text-base font-semibold text-white">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
  },
})
</script>

<style>
.manrope-regular {
  font-family: "Manrope", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>