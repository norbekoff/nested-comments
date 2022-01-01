<template>
  <div class="my-[100px] max-w-[600px] mx-auto">
    <div v-for="item in 4" :key="item">
      <Comment :item="item" />
    </div>
  </div>
</template>

<script>
import Comment from "@/components/Comment.vue";
export default {
  components: {
    Comment,
  },
  data() {
    return {
      key: Symbol("key"),
      comments: [
        {
          author: "brandon Jonson",
          id: 1,
          image: "https://placeimg.com/100/100/people",
          comment: "I love this product",
          date: "2019-01-01",
          votes: 10,
          is_like: true,
          is_dislike: false,
          reply: [],
        },
        {
          author: "Nick Jonson",
          id: 2,
          comment: "I don't like this product",
          image: "https://placeimg.com/100/100/people",
          date: "2019-01-01",
          votes: -10,
          is_like: false,
          is_dislike: false,
          reply: [
            {
              author: "Alex Jonson",
              id: 3,
              comment: "Why not?",
              image: "https://placeimg.com/100/100/people",
              date: "2019-01-01",
              votes: 2,
              is_like: false,
              is_dislike: false,
              reply: [],
            },
          ],
        },
      ],
    };
  },
};
</script>
