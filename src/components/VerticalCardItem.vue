<template>
  <li class="vertical-card-item">
    <figure>
      <a :href="url">
        <div class="img" :style="createImg"></div>
        <div class="text">
          <strong class="title">{{ title }}</strong>
          <p class="genre">{{ genre }}</p>
        </div>
      </a>
    </figure>
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
  computed: {
    createImg() {
      return `background: url(${this.img}) center/cover`;
    },
  },
};
</script>
<style lang="scss" scoped>
.vertical-card-item {
  width: 100%;
  background-color: #fff;
  border-radius: 0.6rem;
  padding: 1rem;
  & + & {
    margin-top: 1rem;
  }
  a {
    display: flex;
    .img {
      min-width: 5rem;
      height: 5rem;
      border-radius: 0.3rem;
    }
    .text {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 1rem;
      .title {
        font-size: 1.4rem;
      }
      .genre {
        font-size: 1.2rem;
        margin-top: 0.5rem;
      }
    }
  }
}
</style>
