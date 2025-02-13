<template>
  <div class="absolute">
    <div class="flex flex-col bg-white/80 backdrop-blur-sm text-black p-12 rounded-md w-2/3">
      <button @click="emit('closeEvent')" class="absolute w-8 h-8 self-end cursor-pointer">
        <img src="../assets/icons/x.png" alt="x"
          @click="selected = false">
      </button>
      <h2 class="pb-6">{{ item.name }}</h2>
      {{ item.description }}
      <p v-html="PortableTextSerializer(item.description)"></p>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['closeEvent']);

defineProps({
  item: Object
})

const PortableTextSerializer = ((PortableText) => {
  let output = []
  PortableText.forEach((el) => {
    el.children.forEach((el) => {
      output.push(el.text)
    })
    return output
  })

})
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

//         // Hyperlink
//         marks.forEach((mark) => {
//           const linkDef = block.markDefs?.find((def) => def._key === mark);
//           if (linkDef && linkDef.href) {
//             const url = linkDef.href;
//             text = `<a href="${url}" target="_blank" class="underline">${text}</a>`;
//           }
//         });

//         // Append the processed text for this child
//         blockText += text;
//       });
//     }

//     // Add the block text to output array
//     output.push(blockText.trim());
//   });

//   return output.join("<br/><br/>");
// };

</script>