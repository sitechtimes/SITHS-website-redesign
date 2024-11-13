<template>
    <div class="flex min-h-[100dvh] flex-col">
        <Body class="relative">
            <SiteHeader class="fixed bg-black z-20"/>
            <div class="h-16"/>
            <slot/>
        </Body>
        <SiteFooter class="mt-auto" />
    </div>
</template>