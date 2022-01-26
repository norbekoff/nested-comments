<template>
  <div class="my-[100px] max-w-[600px] mx-auto">
    <div v-for="(item, index) in comments" :key="index">
      <Comment
        v-bind="{
          avatar: item.image,
          author: item.author,
          comment: item.comment,
          replies: item.replies,
          is_liked: item.is_liked,
          is_disliked: item.is_disliked,
          id: item.id,
          votes: item.votes,
          date: item.date,
        }"
      />
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
          image: "https://picsum.photos/50",
          comment: "I love this product",
          date: "2019-01-01",
          votes: 10,
          is_liked: true,
          is_disliked: false,
          replies: [],
        },
        {
          author: "Nick Jonson",
          id: 2,
          comment:
            "I don't like this product  Some large text  Some large text  Some large text  Some large text  Some large text  Some large text  Some large text  Some large text  Some large text  Some large text  Some large text  Some large text  Some large text  Some large text ",
          image: "https://picsum.photos/50",
          date: "2019-01-01",
          votes: -10,
          is_liked: false,
          is_disliked: false,
          replies: [
            {
              author: "Alex Jonson",
              id: 3,
              comment:
                "Why not? Some large text  Some large text  Some large text  Some large text  Some large text  Some large text  Some large text  Some large text  Some large text  Some large text  Some large text  Some large text ",
              image: "https://picsum.photos/50",
              date: "2019-01-01",
              votes: 2,
              is_liked: false,
              is_disliked: false,
              replies: [],
            },
            {
              author: "Alex Jonson",
              id: 32,
              comment: "Why not?",
              image: "https://picsum.photos/50",
              date: "2019-01-01",
              votes: 2,
              is_liked: true,
              is_disliked: false,
              replies: [
                {
                  author: "Alex Jonson",
                  id: 32,
                  comment: "Why not?",
                  image: "https://picsum.photos/50",
                  date: "2019-01-01",
                  votes: 2,
                  is_liked: false,
                  is_disliked: false,
                  replies: [],
                },
                {
                  author: "Alex Jonson",
                  id: 32,
                  comment: "Why not?",
                  image: "https://picsum.photos/50",
                  date: "2019-01-01",
                  votes: 2,
                  is_liked: false,
                  is_disliked: false,
                  replies: [],
                },
              ],
            },
            {
              author: "Alex Jonson",
              id: 343,
              comment: "Why not?",
              image: "https://picsum.photos/50",
              date: "2019-01-01",
              votes: 2,
              is_liked: false,
              is_disliked: false,
              replies: [],
            },
            {
              author: "Alex Jonson",
              id: 13,
              comment: "Why not?",
              image: "https://picsum.photos/50",
              date: "2019-01-01",
              votes: 2,
              is_liked: false,
              is_disliked: false,
              replies: [
                {
                  author: "Alex Jonson",
                  id: 321,
                  comment: "Why not?",
                  image: "https://picsum.photos/50",
                  date: "2019-01-01",
                  votes: 2,
                  is_liked: false,
                  is_disliked: false,
                  replies: [],
                },
              ],
            },
            {
              author: "Alex Jonson",
              id: 3,
              comment: "Why not?",
              image: "https://picsum.photos/50",
              date: "2019-01-01",
              votes: 2,
              is_liked: false,
              is_disliked: false,
              replies: [],
            },
          ],
        },
      ],
    };
  },
};
</script>
