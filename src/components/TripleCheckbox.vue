<template>
    <li class="tag">
        <label :for="label" @click="changeState">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                :aria-checked="icon.ariaChecked"
                role="checkbox"
                class="icon"
            >
                <component 
                    :is="icon.icon" 
                    :key="icon.icon" 
                ></component>
            </svg>
            <span>{{label}}</span>
        </label>
    </li>
</template>

<script>
import IconExcluded from "./icons/IconExcluded.vue";
import IconSelected from "./icons/IconSelected.vue";
import IconNotSelected from "./icons/IconNotSelected.vue";
export default {
    name: "TripleCheckbox",
    components: {
        IconExcluded,
        IconSelected,
        IconNotSelected
    },
    props: {
        label: {
            type: String
        }
    },
    data(){
        return {
            state: "NOT",
            icon: this.showIcon(this.state)
        }
    },
    methods: {
        showIcon(state){
            switch(state){
                case "SELECTED":
                    return {
                        icon: "IconSelected",
                        ariaChecked:"true",
                    };
                case "EXCLUDED":
                    return {
                        icon:"IconExcluded", 
                        ariaChecked:"mixed"
                    };
                default:
                    return {
                        icon: "IconNotSelected",
                        ariaChecked:"false",
                    };
            }
        },
        changeState(){
            switch(this.icon.ariaChecked){
                case "false":
                    this.icon = {
                        icon: "IconSelected",
                        ariaChecked:"true",
                    };
                    break;
                case "true":
                    this.icon = {
                        icon: "IconExcluded",
                        ariaChecked: "mixed",
                    };
                    break;
                default:
                    this.icon = {
                        icon: "IconNotSelected",
                        ariaChecked: "false"
                    }
                    break;
            }
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
        width: 100%;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        .icon{
            width: 2.4rem;
            height: 2.4rem;
            &[aria-checked="true"]{
                fill: var(--toggle-true);
            }
            &[aria-checked="mixed"]{
                fill: var(--toggle-mixed);
            }
        }
        span{
            font-size: 1.5rem;
            font-weight: 300;
        }
    }
  }
</style>