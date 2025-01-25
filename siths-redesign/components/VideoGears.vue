<template>
    <img src="../assets/imgs/gears/largeGear.svg" alt="Image of a large gear" class="iframe-inner"
        style="position: absolute; top: 0; left: 0;" />
    <img src="../assets/imgs/gears/mediumGear.svg" alt="Image of a medium gear" class="iframe-inner"
        style="position: absolute; top: 0; left: 0;" />
    <img src="../assets/imgs/gears/smallGear.svg" alt="Image of a small gear" class="iframe-inner"
        style="position: absolute; top: 0; left: 0;" />

    <div class="h-fit w-fit relative"> 
        <img src="../assets/imgs/gears/largeGear.svg" alt="Image of a large gear"
            class="iframe-inner z-30 h-40" />
        <div class="iframe-outer">
            <div class="iframe-inner">
                <iframe width="560" height="315"
                    src="https://www.youtube.com/embed/Iq_r7IcNmUk?si=pITyj3iuhlfqzNCY&amp;controls=0"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style lang="css" scoped>
.iframe-outer,
.iframe-inner {
    height: 300px;
    width: 300px;
}

.iframe-outer {
    display: inline-block;
    position: relative;
}

.iframe-inner {
    overflow: hidden;
    border-radius: 5000px;
    position: absolute;
}

.iframe-inner iframe {
    height: 100%;
    width: 100%;
}
</style>