<template>
  <li class="vertical-card-item">
    <a :href="url">
      <figure>
        <img
          :data-url="img"
          :alt="`${title}썸네일`"
          class="img"
          v-intersection-lazy
        />
        <div class="text">
          <strong class="title">{{ title }}</strong>
          <p class="genre">{{ genre }}</p>
        </div>
      </figure>
    </a>
  </li>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
    },
    img: {
      type: String,
    },
    url: {
      type: String,
    },
    genre: {
      type: String,
    },
  },
};
</script>
<style lang="scss" scoped>
.vertical-card-item {
  width: 100%;
  height: 9rem;
  background-color: var(--top-item);
  border-radius: 0.6rem;
  overflow: hidden;
  box-shadow: 0 0.2rem 0.4rem var(--bg-200);
  & + & {
    margin-top: 1rem;
  }
  a {
    display: block;
    padding: 1rem;
    transition: 150ms ease-out;
    &:is(:hover, :focus) {
      background-color: var(--bg-200);
    }
  }
  figure {
    display: flex;
    .img {
      width: 7rem;
      height: 7rem;
      border-radius: 0.3rem;
      object-fit: cover;
    }
    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 1rem;
      .title {
        font-size: 1.4rem;
        line-height: 1.3;
      }
      .genre {
        font-size: 1.2rem;
        margin-top: 0.7rem;
      }
    }
  }
}

@media screen and (min-width: 769px) {
  .vertical-card-item {
    width: calc((100% - 1rem) / 2);
    height: 12rem;
    & + & {
      margin-top: 0;
    }
    &:nth-child(2n) {
      margin-left: 1rem;
    }
    &:not(:first-child) {
      margin-bottom: 1rem;
    }
    a {
      padding: 1.5rem;
    }
    figure .img {
      width: 9rem;
      height: 9rem;
    }
  }
}
@media screen and (min-width: 1300px) {
  .vertical-card-item {
    width: calc((100% - 3rem) / 3);
    &:nth-child(2n) {
      margin-left: 0;
    }
    &:nth-child(3n + 2),
    &:nth-child(3n) {
      margin-left: 1.5rem;
    }
    &:not(:first-child) {
      margin-bottom: 1.5rem;
    }
    figure .text {
      .title {
        font-size: 1.6rem;
      }
      .genre {
        font-size: 1.4rem;
      }
    }
  }
}
</style>
