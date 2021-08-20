<template>
    <input type="checkbox" name="" :id="identify">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        :width="width"
        :height="height"
        :aria-checked="icon.ariaChecked"
        role="checkbox"
        @click="changeState"
    >
        <component 
            :is="icon.icon" 
            :key="icon.icon" 
        ></component>
    </svg>
</template>

<script>
import IconExcluded from "./icons/IconExcluded.vue";
import IconSelected from "./icons/IconSelected.vue";
import IconNotSelected from "./icons/IconNotSelected.vue";
export default {
    name: "ThreeStateToggle",
    components: {
        IconExcluded,
        IconSelected,
        IconNotSelected
    },
    props: {
        state: {
            type: String,
            default: "NOT"
        },
        width: {
            type: [Number, String],
            default: 24,
        },
        height: {
            type: [Number, String],
            default: 24,
        },
        iconColor: {
            type: String,
            default: "currentColor",
        },
        identify: {
            type: String
        }
    },
    data(){
        return {
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
                case "EXCLUDE":
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
svg {
  color: inherit;
  fill: currentColor;
  transition: 150ms ease-out;
  &[aria-checked="true"]{
      color: var(--toggle-true);
  }
  &[aria-checked="mixed"]{
      color: var(--toggle-mixed);
  }
}
</style>