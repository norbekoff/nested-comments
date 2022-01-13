<template>
  <div class="vote">
    <div
      class="vote__down-vote"
      @click.prevent="downvote"
      :class="[{ voted: num < count }]"
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 9L12 15L18 9"
          stroke="#8A939A"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div
      class="vote__count"
      :class="[
        { down: num < count },
        { up: num > count },
        { positive: num > 0 },
        { negative: num < 0 },
      ]"
    >
      <span class="vote__count-n">{{ count + 1 }}</span>
      <span class="vote__count-n">{{ count }}</span>
      <span class="vote__count-n"> {{ count - 1 }}</span>
    </div>
    <div
      class="vote__up-vote"
      @click.prevent="upvote"
      :class="[{ voted: num > count }]"
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 15L12 9L6 15"
          stroke="#8A939A"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      default: 0,
    },
    id: {
      type: Number,
      default: 0,
    },
    isLiked: {
      type: Boolean,
    },
    isDisliked: {
      type: Boolean,
    },
  },
  data() {
    return {
      num: this.count,
      liked: this.isLiked,
      disliked: this.isDisliked,
    };
  },
  mounted() {
    if (this.liked) {
      this.num = this.count + 1;
    } else if (this.disliked) {
      this.num = this.count - 1;
    }
  },
  methods: {
    downvote() {
      if (this.num !== this.count - 1) {
        this.num -= 1;
      }
    },
    upvote() {
      if (this.num !== this.count + 1) {
        this.num += 1;
      }
    },
  },
};
</script>

<style lang="scss">
.vote {
  display: flex;
  align-items: center;
  // .vote__down-vote
  svg {
    path {
      stroke: #595959;
    }
  }
  // .vote__count
  &__count {
    min-width: 30px;
    height: 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #595959;
    display: flex;
    align-items: center;
    user-select: none;
    justify-content: center;
    position: relative;
    display: flex;
    flex-direction: column;
    max-height: 20px;
    overflow: hidden;
    .vote__count-n {
      transition: all 0.4s ease;
    }

    &.up {
      .vote__count-n {
        transform: translateY(100%);
      }
    }

    &.down {
      .vote__count-n {
        transform: translateY(-100%);
      }
    }
    &.negative {
      color: #d34f57;
    }
    &.positive {
      color: #2ea83a;
    }
  }
  // .vote__down-vote
  &__down-vote {
    border-radius: 50%;
    &.voted {
      background: rgba(211, 79, 87, 0.1);
      svg {
        path {
          stroke: #d34f57;
        }
      }
      &:hover {
        background: rgba(211, 79, 87, 0.2);
      }
    }
    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }
  }
  // .vote__up-vote
  &__up-vote {
    border-radius: 50%;
    &.voted {
      background: rgba(79, 167, 87, 0.1);
      svg {
        path {
          stroke: #2ea83a;
        }
      }
      &:hover {
        background-color: rgba(79, 167, 87, 0.2);
      }
    }
    &:hover {
      &:hover {
        background: rgba(0, 0, 0, 0.05);
      }
    }
  }
}
// :last-child {
//   box-shadow: calc(20px * -1 - 1px) 0 0 0 #fff;
// }
</style>
