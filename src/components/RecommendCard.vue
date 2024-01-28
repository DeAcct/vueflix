<template>
  <section class="RecommendCard">
    <strong class="RecommendCard__Title"><slot name="title"></slot></strong>
    <p class="RecommendCard__Text"><slot name="text"></slot></p>
    <slot name="content"></slot>
    <div class="RecommendCard__CTA">
      <slot name="cta"></slot>
    </div>
  </section>
</template>

<style scoped lang="scss">
.RecommendCard {
  display: flex;
  flex-direction: column;
  width: calc(100% - 4rem);
  border: 1px solid hsl(var(--bg-200));
  padding: var(--inner-padding);
  border-radius: var(--global-radius);

  &__Title {
    font-size: 1.8rem;
    margin-bottom: 0.4rem;
    line-height: 1.3;
  }
  &__Text {
    font-size: 1.6rem;
    margin-bottom: 2rem;
    line-height: 1.3;
  }
  &__CTA {
    display: flex;
    margin: 0 calc(var(--inner-padding) * -1) calc(var(--inner-padding) * -1);
    height: 4.8rem;
    background-color: hsl(var(--bg-200));
    font-size: 1.4rem;
  }
}

@media screen and (min-width: 1080px) {
  .RecommendCard {
    width: min(calc(100% - 4rem), 1280px);
    padding: 4rem;
    &__Text {
      margin-bottom: 4rem;
    }
    &__Item {
      padding: 0 4rem;
    }
    &__CTA {
      margin: 0 -4rem -4rem;
    }
  }
}
</style>
