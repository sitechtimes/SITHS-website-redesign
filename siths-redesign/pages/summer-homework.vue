<template>
  <div v-if="websiteData.summerHomework.length > 0">
    <h1 class="text-2xl md:text-3xl lg:text-4xl text-center mb-4" v-html="websiteData.summerHomework[0]?.title"></h1>
    <div class="flex flex-col md:flex-row justify-center items-start px-4">
      <div class="flex items-center justify-center flex-col w-full md:w-5/6">
        <div class="w-full md:w-3/4 lg:w-1/2">
          <p v-html="convertToText(websiteData.summerHomework[0]?.homePage || [])"></p>
          <!-- links for each grade's homework -->
          <div class="my-8 space-y-4 w-1/2">
            <a v-for="(link, grade) in gradeLinks" :key="grade" :href="link" target="_blank" class="block">
              <div class="flex justify-between items-center text-xl font-semibold border-b-2 border-gold">
                {{ grade }} Grade Homework
                <img class="inline h-5 w-5 mr-1" src="../assets/icons/xlink.svg" alt="external link">
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
 <!-- for if homework is not fully loaded in yet -->
  <div v-else class="flex justify-center items-center h-screen">
    <p>Loading...</p>
  </div>
</template>

<script setup>

const websiteData = useWebsiteDataStore()


const gradeLinks = computed(() => {
  const homework = websiteData.summerHomework[0]
  return {
    'Ninth': homework?.ninth || '',
    'Tenth': homework?.tenth || '',
    'Eleventh': homework?.eleventh || '',
    'Twelfth': homework?.twelfth || ''
  }
})

const convertToText = (data) => {
  let output = [];

  data.forEach((block) => {
    let blockText = "";

    if (block._type === "block") {
      block.children?.forEach((child) => {
        let text = child.text || "";
        const marks = child.marks || [];

        // Bold (strong)
        if (marks.includes("strong")) {
          text = `<span class="font-bold">${text}</span>`;
        }

        // Italics (em)
        if (marks.includes("em")) {
          text = `<span class="italic">${text}</span>`;
        }

        if (marks.includes("bullet")) {
          text = `<span class="list-disc">${text}</span>`;
        }

        // Hyperlinks
        marks.forEach((mark) => {
          const linkDef = block.markDefs?.find((def) => def._key === mark);
          if (linkDef && linkDef.href) {
            const url = linkDef.href;
            text = `<a href="${url}" target="_blank" class="underline text-blue-400">${text}</a>`;
          }
        });

        // Append the processed text for this child
        blockText += text;
      });
    }

    // Add the block text to output array
    output.push(blockText.trim());
  });

  return output.join("<br/>");
};
</script>