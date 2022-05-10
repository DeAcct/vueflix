<template>
  <div class="keyword-others-chart">
    <div class="row-top">
      <h3 class="keyword-others-chart__description">
        <span class="line-break">이 애니는</span>
        <span class="line-break"> 이런 점이</span>
        <span class="line-break"> 좋아요!</span>
      </h3>
      <div class="keyword-others-chart__canvas">
        <canvas ref="keyword-others-chart__canvas">키워드 평점 차트</canvas>
      </div>
    </div>
    <ul class="chart-legend">
      <li class="item" v-for="(label, index) in data" :key="label">
        <span class="col-left">
          <i
            class="chart-legend__icon"
            :style="`background-color:${Palette[index]}`"
          />
          <strong class="chart-legend__keyword">{{ label.keyword }}</strong>
        </span>
        <p class="chart-legend__value">{{ label.value }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { Chart, DoughnutController, ArcElement } from "chart.js";
Chart.register(DoughnutController, ArcElement);
export default {
  mounted() {
    const ctx = this.$refs["keyword-others-chart__canvas"];
    const values = this.data.map((label) => label.value);
    const data = {
      datasets: [
        {
          data: values,
        },
      ],
    };
    new Chart(ctx, {
      type: "doughnut",
      data,
      options: {
        responsive: true,
        borderWidth: 0,
        backgroundColor: this.Palette,
      },
    });
  },
  props: {
    data: {
      type: Array,
    },
  },
  computed: {
    Palette() {
      const root = getComputedStyle(document.body);
      let palette = [];
      for (let i = 1; i <= this.data.length; i++) {
        const key = `--chart-palette-${i}00`;
        const value = root.getPropertyValue(key);
        palette.push(value);
      }
      return palette;
    },
  },
};
</script>

<style lang="scss" scoped>
.keyword-others-chart {
  display: flex;
  flex-direction: column;
  align-items: center;
  .row-top {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
  }
  &__description {
    .line-break {
      font-size: 2rem;
      font-weight: 900;
      line-height: 1.5;
    }
  }
  &__canvas {
    width: 50%;
  }

  .chart-legend {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    padding: 0.5rem;
    border-radius: 0.6rem;
    .item {
      display: flex;
      width: 33%;
      align-items: center;
      justify-content: space-between;
      margin: 0.5rem 0;
      padding: 0.5rem;
    }
    &__icon {
      width: 0.7rem;
      height: 0.7rem;
      border-radius: 9999px;
      margin-right: 0.7rem;
    }
    .col-left {
      display: flex;
      align-items: center;
    }
    &__keyword {
      font-size: 1.3rem;
      margin-right: 0.5rem;
    }
    &__value {
      font-size: 1.2rem;
    }
  }
}

@media screen and (min-width: 1024px) {
  .keyword-others-chart {
    &__canvas {
      max-width: 300px;
    }
    &__description {
      margin-bottom: 2rem;
      .line-break {
        display: inline;
      }
    }
    .row-top {
      flex-direction: column;
    }
    .chart-legend {
      max-width: 768px;
      padding: 0;
      &__keyword {
        font-size: 1.4rem;
      }
      &__value {
        font-size: 1.3rem;
      }
    }
  }
}
</style>
