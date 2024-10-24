<template>
    <div class="flex min-h-[100dvh] flex-col">
        <Body class="flex-1">
            <SiteHeader/>
            <slot />
        </Body>
        <SiteFooter class="mt-auto" />
    </div>
</template>