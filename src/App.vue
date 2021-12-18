<template>
  <div>
    <router-view />
    <Comment/>
  </div>
</template>

<script>
import Comment from '@/components/Comment.vue'
export default {
  components: {
    Comment
  },
}
</script>