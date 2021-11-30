<template>
  <div class="wrap">
    <main>
      <service-noti-box :notiItems="NotiItems" />
      <div class="inner">
        <div class="day-selector-holder">
          <day-selector />
        </div>
        <h3 class="blind">애니 목록</h3>
        <div class="daily-new-content">
          <ul class="daily-contents">
            <vertical-card-item
              v-for="anime in dailyShownList"
              :key="anime.title"
              :title="anime.title"
              :img="anime.img"
              :url="anime.url"
              :genre="anime.genre"
            />
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import ServiceNotiBox from "../components/ServiceNotiBox.vue";
import DaySelector from "../components/DaySelector.vue";
import VerticalCardItem from "../components/VerticalCardItem.vue";
export default {
  name: "Daily",
  components: {
    ServiceNotiBox,
    DaySelector,
    VerticalCardItem,
  },
  data() {
    return {
      NotiItems: [
        {
          type: "업로드 지연",
          noti:
            "<러브 라이브! 슈퍼스타!!> 6화는 일본 현지 방영 일정으로 인해 휴방되었습니다. 서비스 이용에 참고 부탁드리겠습니다.",
        },
      ],
    };
  },
  computed: {
    dailyShownList() {
      return this.$store.state.daily.shownList;
    },
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.resolution = window.innerWidth;
      this.shownItems = this.resolution >= 1920 ? 7 : 4;
      this.carouselNumber = 0;
    });
  },
};
</script>

<style lang="scss" scoped>
main {
  padding: 9rem 0 8.6rem;
  background-color: var(--bg-100);
  min-height: 100vh;
  .day-selector-holder {
    position: sticky;
    display: flex;
    top: 6rem;
    padding: 1.5rem 0;
    background-color: var(--bg-100);
  }
  .day-selector {
    width: 100%;
    margin: 0;
  }
  .daily-contents {
    display: flex;
    flex-wrap: wrap;
  }
}
@media screen and (min-width: 769px) {
  main {
    .day-selector-holder {
      justify-content: center;
      padding: 2rem 0;
    }
    .day-selector {
      width: 50%;
      justify-content: space-between;
    }
  }
}
@media screen and (min-width: 1300px) {
  .inner {
    width: 1300px;
    margin: 0 auto;
  }
}
@media screen and (min-width: 1920px) {
  main .day-selector {
    width: 30%;
  }
}
</style>
