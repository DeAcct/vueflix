<template>
    <li class="tag">
        <label :for="label">
            <triple-state-toggle :identify="label"/>
            <span>{{label}}</span>
        </label>
    </li>
</template>

<script>
import TripleStateToggle from "./TripleStateToggle.vue";
export default {
    name: "SelectorItem",
    components: {
        TripleStateToggle,
    },
    props: {
        label: {
            type: String
        }
    }
}
</script>

<style lang="scss" scoped>
.tag{
    width: 100%;
    display:flex;
    align-items: center;
    label{
        display: flex;
        align-items: center;
        gap: 0.5rem;
        span{
            font-size: 1.5rem;
            font-weight: 500;
        }
    }
  }
</style>