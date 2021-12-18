<template>
  <div class="vote">
    <div class="vote__down-vote" @click.prevent="downvote">
      <svg
        width="24"
        height="24"
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
    <div class="vote__count">
      <span class="vote__count-n">{{ count + 1 }}</span>
      <span class="vote__count-n">{{ count }}</span>
      <span class="vote__count-n"> {{ count - 1 }}</span>
    </div>
    <div class="vote__up-vote" @click.prevent="upvote">
      <svg
        width="24"
        height="24"
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

<style lang="scss" scoped>
.vote {
  display: flex;
  // .vote__down-vote
  &__down-vote {
  }
  // .vote__count
  &__count {
  }
  // .vote__count-n
  &__count-n {
  }
  // .vote__up-vote
  &__up-vote {
  }
}
</style>
