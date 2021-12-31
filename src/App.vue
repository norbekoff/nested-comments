<template>
  <div>
    <div v-for='item in 4' :key='item'>
      <Comment :item='item'/>
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
            author: 'brandon Jonson',
            id: 1, 
           }
      ]
    };
  },
};
</script>
