<template>
  <div v-if="websiteData.summerHomework.length > 0">
    <h1 class="text-2xl md:text-3xl lg:text-4xl text-center mb-4" v-html="websiteData.summerHomework[0]?.title"></h1>
    <div class="flex flex-col md:flex-row justify-center items-start px-4">
      <SubpageMenu :pages="subpageLinks" :active="'Home'" class="absolute left-8 top-40" />
      <div class="flex items-center justify-center flex-col w-full md:w-5/6">
        <div class="w-full md:w-3/4 lg:w-1/2">
          <PortableText :value="websiteData.summerHomework[0]?.homePage || []"/>
          <!-- <p v-html="convertToText(websiteData.summerHomework[0]?.homePage || [])"></p> -->
        </div>
      </div>
    </div>
  </div>
  <div v-else class="flex justify-center items-center h-screen">
    <p>Loading...</p>
  </div>
</template>

<script setup>
import { PortableText } from '@portabletext/vue';

const websiteData = useWebsiteDataStore()

const subpageLinks = computed(() => [
  {
    name: 'Home',
  },
  {
    name: "Ninth Grade",
    path: websiteData.summerHomework[0]?.ninth || '',
  },
  {
    name: "Tenth Grade", 
    path: websiteData.summerHomework[0]?.tenth || '',
  },
  {
    name: "Eleventh Grade",
    path: websiteData.summerHomework[0]?.eleventh || '',
  },
  {
    name: "Twelfth Grade",
    path: websiteData.summerHomework[0]?.twelfth || '',
  }
])

// const convertToText = (data) => {
//   let output = [];

//   data.forEach((block) => {
//     let blockText = "";

//     if (block._type === "block") {
//       block.children?.forEach((child) => {
//         let text = child.text || "";
//         const marks = child.marks || [];

//         // Bold (strong)
//         if (marks.includes("strong")) {
//           text = `<span class="font-bold">${text}</span>`;
//         }

//         // Italics (em)
//         if (marks.includes("em")) {
//           text = `<span class="italic">${text}</span>`;
//         }

//         if (marks.includes("bullet")) {
//           text = `<span class="list-disc">${text}</span>`;
//         }

//         // Hyperlink
//         marks.forEach((mark) => {
//           const linkDef = block.markDefs?.find((def) => def._key === mark);
//           if (linkDef && linkDef.href) {
//             const url = linkDef.href;
//             text = `<a href="${url}" target="_blank" class="underline text-blue-400">${text}</a>`;
//           }
//         });

//         // Append the processed text for this child
//         blockText += text;
//       });
//     }

//     // Add the block text to output array
//     output.push(blockText.trim());
//   });

//   return output.join("<br/>");
// };
</script>