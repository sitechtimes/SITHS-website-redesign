<template>  <div
    class="relative flex w-full flex-col items-center justify-center p-10 lg:h-screen lg:flex-row lg:p-0"
  >
    <!-- background gears -->
    <div class="absolute inset-0 pointer-events-none h-full w-full">
      <img
        id="left-gear"
        class="absolute bottom-0 left-0"
        src="../assets/imgs/left-gear.svg"
        alt=""
      />
      <img
        id="right-gear"
        class="absolute bottom-0 right-0"
        src="../assets/imgs/right-gear.svg"
        alt=""
      />
    </div>

    <!-- left side -->
    <div class="z-10 flex w-full flex-col items-start justify-center lg:w-auto">
      <!-- header texts -->
      <div id="header-texts" class="text-left opacity-0">
        <h1 class="mb-2 text-4xl lg:text-6xl">Welcome to</h1>
        <!-- can be tighter if you want (remove leading-tight, make mb-4 -> lg:mb-4) -->
        <h1 class="mb-4 text-6xl font-semibold leading-tight text-gold lg:text-8xl">
          Staten Island
        </h1>
        <h1 class="mb-4 text-6xl lg:text-8xl">Technical</h1>
        <h1 class="mb-4 text-6xl leading-tight lg:text-8xl">High School</h1>
        <div class="flex flex-row items-center">
          <img src="../assets/icons/location-pin.svg" alt="Location pin icon" />
          <p class="text-md p-4 lg:text-lg">485 Clawson St, Staten Island, NY 10306</p>
        </div>
        <!-- stats container -->
        <div id="stats-container" class="my-6 flex flex-row items-start justify-between lg:pr-10">
          <div class="items-left mr-8 flex flex-col">
            <h2 class="text-lg font-semibold lg:text-2xl">Founded <br />In</h2>
            <p class="font-playfair text-xl font-semibold lg:text-3xl">1988</p>
          </div>
          <div class="items-left mr-8 flex flex-col">
            <h2 class="text-lg font-semibold lg:text-2xl">
              PSAL <br />
              Teams
            </h2>
            <p class="font-playfair text-xl font-semibold lg:text-3xl">32</p>
          </div>
          <div class="items-left flex flex-col">
            <h2 class="text-lg font-semibold lg:text-2xl">
              Clubs <br />
              and Activities
            </h2>
            <p class="font-playfair text-xl font-semibold lg:text-3xl">92</p>
          </div>
        </div>
      </div>
    </div>

    <!-- right side -->
    <div class="z-10 flex h-fit w-screen flex-col justify-center px-10 lg:h-full lg:w-1/3 lg:p-10">
      <!-- filler -->
      <p id="right-side" class="text-lg leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt orci ac urna
        fermentum, nec facilisis magna iaculis. Proin vel lacinia turpis. Sed vehicula, odio et
        accumsan consectetur, orci urna fringilla mi, sit amet malesuada erat lacus nec mi. Vivamus
        aliquam libero sit amet lacus vehicula, ac viverra dolor fringilla. Fusce aliquam massa nec
        turpis condimentum venenatis.
      </p>
    </div>
  </div>

  <MissionStatement />
  <UpcomingEvents />
</template>

<script setup>
import MissionStatement from '@/components/MissionStatement.vue'
import UpcomingEvents from '@/components/UpcomingEvents.vue'
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  gsap.to('#header-texts', {
    duration: 2,
    opacity: 1
  })

  gsap.from('#left-gear', {
    duration: 1.5,
    x: -100,
    opacity: 0
  })

  gsap.from('#right-gear', {
    duration: 1.5,
    x: 100,
    opacity: 0
  })

  gsap.from('#stats-container > div', {
    duration: 1,
    opacity: 0,
    x: 50,
    stagger: 0.4
  })

  gsap.to('#right-side', {
    duration: 2,
    opacity: 1
  })
})
</script>
