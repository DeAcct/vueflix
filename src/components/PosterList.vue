<template>
    <ul>
        <poster-item></poster-item>
    </ul>
</template>

<script>
import PosterItem from "./PosterItem.vue";

export default {
    name: "PosterList",
    components: {
        PosterItem
    }    
}
</script>