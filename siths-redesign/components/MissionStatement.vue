<template>
  <div class="flex flex-col items-center justify-center bg-gold lg:h-[28rem] lg:py-12">
    <div class="flex w-full flex-col justify-center lg:flex-row">
      <!-- picture -->
      <div class="flex items-center justify-center lg:w-2/5 xl:w-1/2">
        <div class="relative w-full md:h-[28rem]">
          <img
            class="h-[15rem] rounded-lg object-cover md:h-full md:w-full"
            src="../assets/imgs/staten-island-technical-high-school.jpg"
            alt="Staten Island Technical High School"
          />
        </div>
      </div>

      <!-- carousel -->
      <div class="xl:1/3 relative flex flex-col items-center justify-center py-2 md:py-8 lg:w-3/5">
        <div class="carousel flex w-full items-center justify-between">
          <!-- slide 1 -->
          <div
            id="slide1"
            class="carousel-item relative flex min-h-full w-full flex-grow items-center justify-center pb-4"
          >
            <div class="mx-2 flex h-2/3 w-2/3 flex-col space-y-4 text-center">
              <h1 class="text-4xl font-semibold text-gray">VISION</h1>
              <p class="text-xl text-gray">
                Staten Island Technical High School places a high priority on academics and
                developing exemplary character, scholarship, service, leadership, and citizenship,
                while cultivating innovation through the development of 21st Century Global Skills.
                Our school community is committed to equity and excellence by ensuring every student
                has access, opportunities, supports, and interventions to achieve their greatest
                potential and succeed in a multicultural global society.
              </p>
            </div>
            <div
              class="absolute left-5 right-5 top-1/2 mx-7 flex -translate-y-1/2 transform justify-between"
            >
              <a href="#slide2" class="btn btn-circle text-xl lg:mx-6" @click="preventScroll">❮</a>
              <a href="#slide2" class="btn btn-circle text-xl lg:mx-6" @click="preventScroll">❯</a>
            </div>
          </div>

          <!-- slide 2 -->
          <div
            id="slide2"
            class="carousel-item relative flex min-h-full w-full flex-grow items-center justify-center pb-4"
          >
            <div class="mx-2 flex h-2/3 w-2/3 flex-col space-y-4 text-center">
              <h1 class="text-4xl font-semibold text-gray">MISSION</h1>
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
            <div
              class="absolute left-5 right-5 top-1/2 mx-7 flex -translate-y-1/2 transform justify-between"
            >
              <a href="#slide1" class="btn btn-circle text-xl lg:mx-6" @click="preventScroll">❮</a>
              <a href="#slide1" class="btn btn-circle text-xl lg:mx-6" @click="preventScroll">❯</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const preventScroll = (event) => {
  event.preventDefault()
  const button = event.currentTarget
  const href = button.getAttribute('href')
  const carouselElement = button.parentElement.parentElement.parentElement
  const target = carouselElement.querySelector(href)
  if (target) {
    const left = target.offsetLeft
    carouselElement.scrollTo({ left: left, behavior: 'smooth' })
  }
}
</script>
