<template>
  <div>
    <div class="comment">
      <div class="comment__avatar">
        <img :src="avatar" alt="" />
      </div>
      <div class="comment__content">
        <h3 class="comment__title">
          {{ author }}
        </h3>
        <p class="comment__body">
          {{ comment }}
        </p>
      </div>
      <Vote />
    </div>
    <div v-if="replies.length" class="ml-[20px]">
      <template v-for="(item, index) in replies" :key="index">
        <Comment
          v-bind="{
            avatar: item.image,
            author: item.author,
            comment: item.comment,
            replies: item.replies,
          }"
        />
      </template>
    </div>
  </div>
</template>

<script>
import Vote from "./Vote.vue";
export default {
  components: {
    Vote,
  },
  props: {
    avatar: {
      type: String,
      default: "https://picsum.photos/200",
    },
    author: {
      type: String,
      default: "Robin Wieruch",
    },
    comment: {
      type: String,
      default: "What is all this then?",
    },
    replies: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
.comment {
  display: flex;
  gap: 8px;
  align-items: center;
  // .comment__avatar
  &__avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    overflow: hidden;
  }
  // .comment__title
  &__title {
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
  }

  // .comment__body

  &__body {
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
  }
}
</style>
