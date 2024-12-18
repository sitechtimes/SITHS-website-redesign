<template>
    <div>
      <div class="grid grid-cols-1 gap-4 m-2">
        <div v-for="item in resources" class="mb-12 group">
          <h3 class="text-2xl font-semibold border-b-[2px] border-gold transition-all duration-500">{{item.name}}</h3>
          <p v-html="convertToText(item.description)" class="pt-2 brightness-75 group-hover:brightness-100 transition-all duration-300"></p>
        </div>
      </div>
  
    </div>
  </template>
  
  <script setup>
  defineProps({
    resources: Array
  })

  const convertToText = (data) => {
  let output = []

  data.forEach(block => {
    let blockText = ''

    if (block._type === 'block') {
      block.children?.forEach(child => {
        let text = child.text || ''
        const marks = child.marks || []

        // Bold (strong)
        if (marks.includes('strong')) {
          text = `<span class="font-bold">${text}</span>`
        }
        // Italics (em)
        if (marks.includes('em')) {
          text = `<span class="italic">${text}</span>`
        }

        // Hyperlink
        marks.forEach(mark => {
          if (mark === 'c107c4332c3c' || mark === '20b78802cef3') {
            const linkDef = block.markDefs?.find(def => def._key === mark)
            if (linkDef && linkDef.href) {
              const url = linkDef.href
              text = `<a href="${url}" target="_blank" class="underline">${text}</a>`
            }
          }
        })

        // Append the processed text for this child
        blockText += text
      })
    }

    // Add the block text to output array
    output.push(blockText.trim())
  })

  return output.join('<br/><br/>')
}

  </script>