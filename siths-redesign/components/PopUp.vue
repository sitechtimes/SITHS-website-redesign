<template>
    <div class="p-8 bg-white w-1/2 text-black">
        <h2>{{ title }}</h2>
        <p v-html="convertToText(description)"></p>
    </div>
</template>

<script setup>
import { UrlInput } from 'sanity';

defineProps({
  title: String,
  description: String,
  img: UrlInput,
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

        // Hyperlink
        marks.forEach((mark) => {
          const linkDef = block.markDefs?.find((def) => def._key === mark);
          if (linkDef && linkDef.href) {
            const url = linkDef.href;
            text = `<a href="${url}" target="_blank" class="underline">${text}</a>`;
          }
        });

        // Append the processed text for this child
        blockText += text;
      });
    }

    // Add the block text to output array
    output.push(blockText.trim());
  });

  return output.join("<br/><br/>");
};

</script>