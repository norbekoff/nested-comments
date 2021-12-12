<template>
<div>
<div class="comment bg-red ">
     <div class="comment__ava p-7">
         <img :src="avatar" alt="">
     </div>
     <div class="comment__content">
         <h3 class="comment__author text-[lime]">{{author}}</h3>
         <div class="comment__comment" v-html="content"></div>
     </div>
 </div>
 <div v-if="reply.length">
    this is reply length
 </div>
</div>
  
</template>

<script>
import { mapState } from 'vuex';
import Comment from './Comment.vue';
export default {
  name: 'Comment',
  components: {
    Comment,
  },
  props: {
    avatar: {
      type: String,
      default: 'https://picsum.photos/200',
    },
    content: {
      type: String,
      default: '<p> lorem ipsom anothe ripsom  </p>',
    },
    author: {
      type: String,
      default: 'Алина Карасева',
    },
    when: {
      type: String,
      default: '2021-12-06 16:00',
    },
    reply: {
      type: Array,
      default: () => [],
    },
    id: {
      type: Number,
      default: 0,
    },
  },
};
</script>
<style lang="scss">
.komment {
  &:hover .vote__down-vote,
  &:hover .vote__up-vote {
    opacity: 1;
  }
}
</style>
