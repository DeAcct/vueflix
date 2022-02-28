export const modalAnimations = {
  computed: {
    BgAnimation() {
      const BgKeyframe = new KeyframeEffect(
        this.$refs.bg,
        [
          {
            opacity: 0,
            visibility: "hidden",
          },
          {
            opacity: 1,
            visibility: "visible",
          },
        ],
        {
          duration: 150,
          fill: "forwards",
        }
      );
      const BgAnimation = new Animation(BgKeyframe, document.timeline);
      return BgAnimation;
    },
    ActionAreaAnimation() {
      const MobileKeyframe = new KeyframeEffect(
        this.$refs.actionArea,
        [
          {
            transform: "translateY(0)",
            opacity: 0,
            visibility: "hidden",
          },
          {
            transform: `translateY(-${this.ActionAreaHeight})`,
            opacity: 1,
            visibility: "visible",
          },
        ],
        {
          duration: 150,
          fill: "forwards",
          easing: "cubic-bezier(1,0,0,1)",
        }
      );
      const ActionAreaAnimation = new Animation(
        MobileKeyframe,
        document.timeline
      );
      return ActionAreaAnimation;
    },
  },
};
