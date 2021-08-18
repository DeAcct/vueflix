<template>
    <div class="controller">
        <div class="left-col">
            <div class="contain">
                <strong>포함할 태그</strong>
                <ul class="tags">
                    <tag-item>로맨스</tag-item>
                </ul>
            </div>
            <div class="not-contain">
                <strong>포함하지 않을 태그</strong>
                <ul class="tags">
                    <tag-item>특촬물</tag-item>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import TagItem from "./TagItem.vue"
export default {
    name: "Controller",
    components: {
        TagItem
    }
}
</script>
<style lang="scss" scoped>
.controller{
    width: 100%;
    padding: 2.5rem;
    background-color: var(--text-100);
    border-radius: 0.6rem 0.6rem 0 0;
}
</style>