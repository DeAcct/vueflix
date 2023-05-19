import { computed } from "vue";

export const ShadeAnimation = ($bg) => {
  const ShadeKeyframe = new KeyframeEffect(
    $bg,
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
  const ShadeAnimation = new Animation(ShadeKeyframe, document.timeline);
  return ShadeAnimation;
};

export const SheetAnimation = ($sheet) => {
  const media = matchMedia("screen and (min-width: 1080px)").matches;
  const MobileKeyframe = new KeyframeEffect(
    $sheet,
    [
      {
        transform: "translateY(0)",
        opacity: 0,
        visibility: "hidden",
      },
      {
        transform: `translateY(-${$sheet.clientHeight * 0.1}rem)`,
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
  const PCKeyframe = new KeyframeEffect(
    $sheet,
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
      easing: "cubic-bezier(1,0,0,1)",
    }
  );
  const ActionAreaAnimation = new Animation(
    media ? PCKeyframe : MobileKeyframe,
    document.timeline
  );
  return ActionAreaAnimation;
};
