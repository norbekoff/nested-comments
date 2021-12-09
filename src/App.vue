<template>
  <div>another one there mateF</div>
  <Comment />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Comment from "./components/Comment.vue";
@Options({
  components: {
    Comment,
  },
})
export default class App extends Vue {}
</script>
