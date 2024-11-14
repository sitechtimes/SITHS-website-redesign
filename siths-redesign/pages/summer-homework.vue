<template>
    <div>
        <h1>Summer Homework</h1>
        <div class="flex flex-row items-start">
            <SubpageMenu :page="grade" v-model="selectedPage" />

            <div>
                <div v-if="selectedPage === 'Home'">
                    <h2>Home</h2>
                    <p v-html="blocksToText(websiteData.summerHomework[0]?.homePage)"></p>
                </div>
                <div v-if="selectedPage === '9th Grade'">
                    <h2>9th Grade Homework</h2>
                    <p v-html="blocksToText(websiteData.summerHomework[0]?.ninth)"></p>
                </div>

                <div v-if="selectedPage === '10th Grade'">
                    <h2>10th Grade Homework</h2>
                    <p v-html="blocksToText(websiteData.summerHomework[0]?.tenth)"></p>
                </div>

                <div v-if="selectedPage === '11th Grade'">
                    <h2>11th Grade Homework</h2>
                    <p v-html="blocksToText(websiteData.summerHomework[0]?.eleventh)"></p>
                </div>

                <div v-if="selectedPage === '12th Grade'">
                    <h2>12th Grade Homework</h2>
                    <p v-html="blocksToText(websiteData.summerHomework[0]?.twelfth)"></p>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script setup>
const websiteData = useWebsiteDataStore()
const grade = [
    { name: 'Home' },
    { name: '9th Grade' },
    { name: '10th Grade' },
    { name: '11th Grade' },
    { name: '12th Grade' },
]
const selectedPage = ref('Home')

function blocksToText(blocks) {
    if (!blocks) return '';
    return blocks
        .map((block) => {
            if (block._type !== 'block' || !block.children) {
                return `[${block._type} block]`
            }
            return block.children.map((child) => `<p class="flex-grow">${child.text}</p><br/>`).join('')
        })
        .join('\n\n')
}
</script>