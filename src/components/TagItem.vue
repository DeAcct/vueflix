<template>
    <li class="tag-item">
        <slot></slot>
    </li>
</template>
<script>

export default {
    name: "TagItem"
}
</script>

<style lang="scss" scoped>
    .tag-item{
        width: fit-content;
        border-radius: 0.6rem;
        padding: 1rem 1.5rem;
        font-size: 1.5rem;
        border: 1px solid var(--theme-500);
    }
</style>