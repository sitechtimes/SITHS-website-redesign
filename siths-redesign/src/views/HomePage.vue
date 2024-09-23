<template>
  <div class="w-full lg:h-screen flex lg:flex-row flex-col p-10 lg:p-0 justify-center items-center relative">
    <!-- background gears -->
    <div class="absolute inset-0 z-0 h-full w-full">
      <img id="left-gear" class="absolute left-0 bottom-0" src="../assets/imgs/left-gear.svg" alt="">
      <img id="right-gear" class="absolute right-0 bottom-0" src="../assets/imgs/right-gear.svg" alt="" />
    </div>

    <!-- left side -->
    <div class="w-full lg:w-auto flex flex-col justify-center items-start z-10">
      <!-- header texts -->
      <div id="header-texts" class="text-left opacity-0">
        <h1 class="lg:text-6xl text-4xl mb-2">Welcome to</h1>
        <h1 class="lg:text-8xl text-6xl text-gold font-semibold mb-4 leading-tight">Staten Island</h1>
        <h1 class="lg:text-8xl text-6xl mb-4">Technical</h1>
        <h1 class="lg:text-8xl text-6xl mb-4 leading-tight">High School</h1>
        <div class="flex flex-row items-center">
          <img src="../assets/icons/location-pin.svg" alt="Location pin icon" />
          <p class="p-4 lg:text-lg text-md">485 Clawson St, Staten Island, NY 10306</p>
        </div>
        <!-- stats container -->
        <div id="stats-container" class="flex flex-row justify-between items-start my-6 lg:pr-10">
          <div class="flex flex-col items-left mr-8">
            <h2 class="lg:text-2xl text-lg font-semibold">Founded <br>In</h2>
            <p class="lg:text-3xl text-xl font-semibold font-playfair">1988</p>
          </div>
          <div class="flex flex-col items-left mr-8">
            <h2 class="lg:text-2xl text-lg font-semibold">PSAL <br /> Teams</h2>
            <p class="lg:text-3xl text-xl font-semibold font-playfair">32</p>
          </div>
          <div class="flex flex-col items-left">
            <h2 class="lg:text-2xl text-lg font-semibold">Clubs <br /> and Activities</h2>
            <p class="lg:text-3xl text-xl font-semibold font-playfair">92</p>
          </div>
        </div>
      </div>
    </div>

    <!-- right side -->
    <div class="w-screen h-fit lg:w-1/3 lg:h-full px-10 lg:p-10 flex flex-col justify-center z-10">
      <!-- filler -->
      <p id="right-side" class="text-lg leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt orci ac urna fermentum, nec facilisis
        magna iaculis. Proin vel lacinia turpis. Sed vehicula, odio et accumsan consectetur, orci urna fringilla mi, sit
        amet malesuada erat lacus nec mi. Vivamus aliquam libero sit amet lacus vehicula, ac viverra dolor fringilla.
        Fusce aliquam massa nec turpis condimentum venenatis.
      </p>
    </div>
  </div>

  <MissionStatement />
  <UpcomingEvents />
</template>


<script setup>
import MissionStatement from '@/components/MissionStatement.vue';
import UpcomingEvents from '@/components/UpcomingEvents.vue';
import { onMounted } from "vue";
import { gsap } from "gsap";


onMounted(() => {
  gsap.to("#header-texts", {
    duration: 2,
    opacity: 1,
  });

  gsap.from("#left-gear", {
    duration: 1.5,
    x: -100,
    opacity: 0,
  });

  gsap.from("#right-gear", {
    duration: 1.5,
    x: 100,
    opacity: 0,
  });

  gsap.from("#stats-container > div", {
    duration: 1,
    opacity: 0,
    x: 50,
    stagger: 0.4
  });

  gsap.to("#right-side", {
    duration: 2,
    opacity: 1,
  });

});
</script>
