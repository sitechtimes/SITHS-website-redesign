<template>
    <div class="relative w-full flex flex-row justify-between p-6 opacity-85 mt-20">
        <!-- background image -->
        <div class="absolute inset-0 bg-city-skyline opacity-5 z-0"></div>
        <!-- upper left hand corner -->
        <div class="flex flex-col">
            <!-- school name -->
            <div class="flex flex-row items-center">
                <img src="../assets/icons/siths-logo.png" alt="">
                <h1 class="text-xl p-4">Staten Island <br /> Technical High School </h1>
            </div>
            <!-- school information below icon -->
            <div class="flex flex-col space-y-2 mt-2">
                <p class="">485 Clawson Street Staten Island, NY 10306</p>
                <div class="flex">
                    <div class="flex">
                        <p class="font-semibold">Phone:</p>
                        <p class="ml-2">(718) 667-3222</p>
                    </div>
                    <div class="flex ml-4">
                        <p class="font-semibold">Fax:</p>
                        <p class="ml-2">(718) 987-5872</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- about us navigation links -->
        <div class="flex flex-col">
            <h2 class="text-lg font-bold">ABOUT US</h2>
            <p class="text-lg">Mission</p>
            <p class="text-lg">School Calendar</p>
            <p class="text-lg">Faculty</p>
            <p class="text-lg">History</p>
            <p class="text-lg">School Profile</p>
            <p class="text-lg">Principal Message</p>
        </div>
        <!-- academics navigation links -->
        <div class="flex flex-col">
            <h2 class="text-lg font-bold">ACADEMICS</h2>
            <p class="text-lg">Course Catalog</p>
            <p class="text-lg">AP Courses</p>
            <p class="text-lg">Bell Schedule</p>
            <p class="text-lg">CTE</p>
            <p class="text-lg">Summer Homework</p>
            <p class="text-lg">Grading Policy</p>
        </div>
        <!-- resources navigation links -->
        <div class="flex flex-col">
            <h2 class="text-lg font-bold">RESOURCES</h2>
            <p class="text-lg">PTA</p>
            <p class="text-lg">Naviance</p>
            <p class="text-lg">PSAL Forms</p>
            <p class="text-lg">Absence Report</p>
            <p class="text-lg">Contact us</p>
            <p class="text-lg">Donations</p>
        </div>
        <!-- right side -->
        <div class="flex flex-col w-1/5">
            <!-- placeholder -->
            <p class="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt orci ac urna
                fermentum, nec facilisis magna iaculis. Proin vel lacinia turpis. Sed vehicula, odio et accumsan</p>
            <!-- social media icons -->
            <div class="flex flex-col space-y-2 z-20">
                <h2 class="text-xl font-bold">FOLLOW US</h2>
                <div class="flex flex-row items-center space-x-2">
                    <a href="https://www.facebook.com/SITechHS?ref=embed_page" target="_blank" rel="noopener noreferrer">
                        <img class="bg-white rounded-full h-10 w-10 p-2" src="../assets/icons/facebook.png"
                            alt="Facebook">
                    </a>
                    <a href="https://www.instagram.com/_sammytheseagull/" target="_blank" rel="noopener noreferrer">
                        <img class="bg-white rounded-full h-10 w-10 p-2" src="../assets/icons/instagram.png"
                            alt="Instagram">
                    </a>
                    <a href="https://x.com/SITech_HS?ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Escreen-name%3ASITech_HS%7Ctwcon%5Es1" target="_blank" rel="noopener noreferrer">
                        <img class="bg-white rounded-full h-10 w-10 p-2" src="../assets/icons/x-twitter.png"
                            alt="Twitter">
                    </a>
                    <a href="https://www.linkedin.com/school/staten-island-tech-high-school/" target="_blank" rel="noopener noreferrer">
                        <img class="bg-white rounded-full h-10 w-10 p-2" src="../assets/icons/linkedin.png"
                            alt="LinkedIn">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped></style>