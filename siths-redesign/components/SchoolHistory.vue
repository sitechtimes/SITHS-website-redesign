<template>
    <div class="bg-gold brightness-60 my-8 flex flex-col md:flex-row">
        <div class="bg-siths-building md:w-1/3 flex items-center justify-center md:items-start md:justify-start bg-opacity-60 py-4">
            <h2
                class="flex justify-start text-5xl text-black/80 flex-col px-4 m-4 md:m-6 md:ml-8 md:border-l-[3px] border-black md:leading-snug">
                SCHOOL<br />HISTORY</h2>
        </div>
        <div class="flex flex-col bg-gold md:w-2/3 m-8 md:m-16">
            <p class="text-lg text-gray">
                Staten Island Technical High School is a New York City public high school established in 1988. Its
                student body is comprised of lifelong learners, innovation facilitators, contributors to the betterment
                of society and intellectually inquisitive young men and women. The impact of these leaders and problem
                solvers reach beyond the scope of academics. They possess the skills required to positively impact the
                present and future challenges of the real world. Staten Island Technical High School’s student body is
                reflective of the diversity of the City of New York.
            </p>
            <NuxtLink to="/history" class="flex justify-end text-dark-gold underline font-extrabold p-4">
                <button >CONTINUE READING</button>
            </NuxtLink>
        </div>
    </div>
</template>