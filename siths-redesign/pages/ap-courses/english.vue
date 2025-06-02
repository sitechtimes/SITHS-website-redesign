<template>
  <h1>AP COURSES</h1>
  <div class="align m-auto flex w-[80vw] flex-row">
    <ApNavbar></ApNavbar>
    <apCard :openPage="websiteData.opportunities.filter((el) => el.opptype == 'english')" />
    /><ApCard />
  </div>
  <!-- <InfoDropdown :posts="websiteData.posts" /> -->
</template>

<script setup></script>
