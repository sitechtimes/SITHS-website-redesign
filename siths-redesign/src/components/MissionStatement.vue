<template>
    <div class="flex flex-col items-center px-4 py-12 bg-gold">

        <div class="flex flex-row">
        <div class="avatar w-1/3 flex flex-row justify-center items-center">
            <div class="ring-primary ring-offset-base-100 w-[15rem] h-[15rem] rounded-full ring ring-offset-2 outline outline-gray">
                <img src="/src/assets/imgs/erlenwein.png" />
            </div>
        </div>
        <div class="carousel w-2/3 relative">
            <div id="slide1" class="carousel-item relative w-full">
                <div class="flex flex-col w-2/3 mx-auto space-y-4">
                    <h1 class="text-2xl font-semibold text-gray">Vision</h1>
                    <p class="text-base text-gray">
                        Staten Island Technical High School places a high priority on academics and developing exemplary
                        character, scholarship, service, leadership, and citizenship, while cultivating innovation
                        through the development of 21st Century Global Skills. Our school community is committed to
                        equity and excellence by ensuring every student has access, opportunities, supports, and
                        interventions to achieve their greatest potential and succeed in a multicultural global society.
                    </p>
                </div>
                <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" class="btn btn-circle">❮</a>
                    <a href="#slide2" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full">
                <div class="flex flex-col w-2/3 mx-auto space-y-4">
                    <h1 class="text-2xl font-semibold">Mission</h1>
                    <p class="text-base">
                        Staten Island Technical High School places a high priority on academics and developing exemplary
                        character, scholarship, service, leadership, and citizenship, while cultivating innovation
                        through the development of 21st Century Global Skills. Our school community is committed to
                        equity and excellence by ensuring every student has access, opportunities, supports, and
                        interventions to achieve their greatest potential and succeed in a multicultural global society.
                    </p>
                </div>
                <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" class="btn btn-circle">❮</a>
                    <a href="#slide2" class="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    </div></div>
    <div class="w-full h-[1px] bg-white my-6"></div>
</template>

<script setup>
</script>

<style scoped></style>