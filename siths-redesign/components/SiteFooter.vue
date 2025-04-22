<template>
  <footer class="relative mt-20 grid w-full grid-cols-2 justify-between gap-6 p-6 opacity-85 lg:flex lg:flex-row">
    <!-- background image -->
    <div class="absolute inset-0 pointer-events-none opacity-5 bg-city-skyline bg-repeat-x bottom-0 bg-bottom"></div>
    <!-- upper left hand corner -->
    <div class="col-span-2 gap-2 p-2 pb-4 flex flex-col border-b-2 border-gold lg:border-none">
      <!-- school name -->
      <div class="flex flex-row items-center">
        <img src="../assets/icons/siths-logo.png" alt="" aria-hidden="true"
          class="flex-shrink-0 w-16 h-auto md:w-20 lg:w-24" />
        <h1 class="p-4 text-left text-xl md:text-2xl min-w-0">
          Staten Island <br />
          Technical High School
        </h1>
      </div>
      <!-- school information below icon -->
      <div class="mt-2 flex flex-col space-y-2">
        <p>485 Clawson Street Staten Island, NY 10306</p>
        <div class="flex flex-row flex-wrap gap-2">
          <div class="flex">
            <p class="font-semibold">Phone:</p>
            <p class="ml-2">(718) 667-3222</p>
          </div>
          <div class="flex">
            <p class="font-semibold">Fax:</p>
            <p class="ml-2">(718) 987-5872</p>
          </div>
        </div>
      </div>
    </div>
    <!-- about us navigation links -->
    <div class="flex flex-col gap-1">
      <h2 class="text-xl font-bold">ABOUT US</h2>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/calendar">School Calendar</NuxtLink>
      <NuxtLink to="/staff">Faculty</NuxtLink>
      <NuxtLink to="/history">History</NuxtLink>
      <NuxtLink to="/erlenwein">Principal Message</NuxtLink>
    </div>
    <!-- academics navigation links -->
    <div class="flex flex-col gap-1">
      <h2 class="text-xl font-bold">ACADEMICS</h2>
      <p class="text-md">Course Catalog</p>
      <NuxtLink to="/">AP Courses</NuxtLink>
      <NuxtLink to="/schedules">Bell Schedule</NuxtLink>
      <NuxtLink to="/cte">CTE</NuxtLink>
      <NuxtLink to="/summer-homework">Summer Homework</NuxtLink>
      <p class="text-md">Grading Policy</p>
    </div>
    <!-- resources navigation links -->
    <div class="flex flex-col gap-1">
      <h2 class="text-xl font-bold">RESOURCES</h2>
      <p class="text-md">PTA</p>
      <p class="text-md">Naviance</p>
      <p class="text-md">PSAL Forms</p>
      <p class="text-md">Absence Report</p>
      <p class="text-md">Contact us</p>
      <p class="text-md">Donations</p>
    </div>
    <!-- right side -->
    <div class="flex flex-col lg:w-fit">
      <!-- social media icons -->
      <div class="flex flex-col gap-2">
        <h2 class="text-2xl font-bold">Follow Us</h2>
        <div class="flex flex-row flex-wrap items-center gap-2">
          <a href="https://www.facebook.com/SITechHS?ref=embed_page" target="_blank" rel="noopener noreferrer">
            <img class="h-10 w-10 rounded-full bg-white p-2 object-none" src="../assets/icons/facebook.png"
              alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/_sammytheseagull/" target="_blank" rel="noopener noreferrer">
            <img class="h-10 w-10 rounded-full bg-white p-2 object-none" src="../assets/icons/instagram.png"
              alt="Instagram" />
          </a>
          <a href="https://x.com/SITech_HS?ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Escreen-name%3ASITech_HS%7Ctwcon%5Es1"
            target="_blank" rel="noopener noreferrer">
            <img class="h-10 w-10 rounded-full bg-white p-2 object-none" src="../assets/icons/x-twitter-black.png"
              alt="Twitter" />
          </a>
          <a href="https://www.linkedin.com/school/staten-island-tech-high-school/" target="_blank"
            rel="noopener noreferrer">
            <img class="h-10 w-10 rounded-full bg-white p-2 object-none" src="../assets/icons/linkedin.png"
              alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
