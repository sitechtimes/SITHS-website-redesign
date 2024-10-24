<template>
  <div class="flex flex-col items-center justify-center bg-gold lg:h-[35rem] lg:py-12">
    <div class="flex w-full flex-col justify-center lg:flex-row">
      <!-- picture -->
      <div class="flex items-center justify-center lg:w-1/2">
        <div class="relative h-[35rem] w-full">
          <img
            class="h-full w-full object-cover"
            src="../assets/imgs/staten-island-technical-high-school.jpg"
            alt="Staten Island Technical High School"
          />
        </div>
      </div>

      <!-- carousel -->
      <div class="relative flex flex-col items-center justify-center py-8 lg:w-1/2">
        <div class="carousel flex w-full items-center justify-between">
          <!-- slide 1 -->
          <div
            id="slide1"
            class="carousel-item relative flex w-full min-h-full flex-grow items-center justify-center pb-4"
          >
            <a href="#slide2" class="btn btn-circle text-xl lg:mx-6">❮</a>
            <div class="flex mx-2 h-2/3 w-2/3 flex-col space-y-4 text-center">
              <h1 class="text-4xl font-semibold text-gray">Vision</h1>
              <p class="text-xl text-gray">
                Staten Island Technical High School places a high priority on academics and
                developing exemplary character, scholarship, service, leadership, and citizenship,
                while cultivating innovation through the development of 21st Century Global Skills.
                Our school community is committed to equity and excellence by ensuring every student
                has access, opportunities, supports, and interventions to achieve their greatest
                potential and succeed in a multicultural global society.
              </p>
            </div>
            <a href="#slide2" class="btn btn-circle text-xl lg:mx-6">❯</a>
          </div>

          <!-- slide 2 -->
          <div
            id="slide2"
            class="carousel-item relative flex w-full min-h-full flex-grow items-center justify-center pb-4"
          >
            <a href="#slide1" class="btn btn-circle text-xl lg:mx-6">❮</a>
            <div class="flex mx-2 h-2/3 w-2/3 flex-col space-y-4 text-center">
              <h1 class="text-4xl font-semibold text-gray">Mission</h1>
              <p class="text-xl text-gray">
                The SITHS community fosters the development of well-rounded, passionate life-long
                learners through rigorous, engaging academics and participation in student
                activities, athletics, social-emotional and work-based learning, cultural
                responsiveness, and community service. SITHS cultivates strong collaboration,
                communication, creativity, and critical thinking skills. We strive to instill in our
                students a sense of wonder, curiosity, and a growth mindset to meaningfully
                contribute to and shape a society that values equity, excellence, and empathy. (D31
                Mission/Vision)
              </p>
            </div>
            <a href="#slide1" class="btn btn-circle text-xl lg:mx-6">❯</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
