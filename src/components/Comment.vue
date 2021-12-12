<template>
  <div class="komment__wrapper">
    <div class="komment" :class="[{ 'has-children': reply.length }]">
      <div v-if="hasArce" class="komment__arc"></div>
      <div class="komment__header flex items-center justify-between mb-[12px]">
        <div class="flex items-start gap-[10px]">
          <a  class="komment__title">
            <a
              :src="coverUrl"
              width="32"
              height="32"
              class="rounded-full"
            ></a>
          </a>
          <div>
            <a
              class="komment__title flex items-center gap-[4px]"
            >
              <span>
                {{ author }}
              </span>
              <svg
                v-if="isVerified"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.864 6.90362L7.81865 10.9036C7.69332 11.0683 7.49932 11.1656 7.29265 11.167H7.28798C7.08332 11.167 6.88998 11.0723 6.76332 10.911L5.14198 8.83962C4.91532 8.55028 4.96598 8.13095 5.25598 7.90428C5.54532 7.67695 5.96532 7.72762 6.19198 8.01828L7.28065 9.40895L9.80332 6.09628C10.026 5.80362 10.444 5.74628 10.738 5.96962C11.0307 6.19295 11.0873 6.61095 10.864 6.90362ZM8.00065 1.83362C4.31865 1.83362 1.33398 4.81828 1.33398 8.50029C1.33398 12.1816 4.31865 15.167 8.00065 15.167C11.6827 15.167 14.6673 12.1816 14.6673 8.50029C14.6673 4.81828 11.6827 1.83362 8.00065 1.83362Z"
                  fill="#2BA0EC"
                />
                <mask
                  id="mask0_5046_152"
                  style="mask-type: alpha"
                  maskUnits="userSpaceOnUse"
                  x="1"
                  y="1"
                  width="14"
                  height="15"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.864 6.90362L7.81865 10.9036C7.69332 11.0683 7.49932 11.1656 7.29265 11.167H7.28798C7.08332 11.167 6.88998 11.0723 6.76332 10.911L5.14198 8.83962C4.91532 8.55028 4.96598 8.13095 5.25598 7.90428C5.54532 7.67695 5.96532 7.72762 6.19198 8.01828L7.28065 9.40895L9.80332 6.09628C10.026 5.80362 10.444 5.74628 10.738 5.96962C11.0307 6.19295 11.0873 6.61095 10.864 6.90362ZM8.00065 1.83362C4.31865 1.83362 1.33398 4.81828 1.33398 8.50029C1.33398 12.1816 4.31865 15.167 8.00065 15.167C11.6827 15.167 14.6673 12.1816 14.6673 8.50029C14.6673 4.81828 11.6827 1.83362 8.00065 1.83362Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_5046_152)"></g>
              </svg>
            </a>
            <p class="komment__when">
              {{ when }}
            </p>
          </div>
        </div>

        <div>
          <Vote :hoverable="true" class="e:!hidden" />
        </div>
      </div>
      <div class="komment__content mb-[12px]">
        {{ content }}
      </div>
      <div
        class="flex items-center justify-between mb-[12px] g:flex-wrap g:gap-[10px]"
      >
        <div class="flex items-center">
          <p class="mr-[12px] komment__answer" @click="handleShowReply">
            Javob berish
          </p>
         hello 
        </div>
        <div>
          <Vote :hoverable="true" class="!hidden e:!flex" />
        </div>
      </div>
     hello
    </div>
    <div
      v-if="reply.length"
      class="komment__other pl-[20px]"
      :class="{ 'has-border': reply.length > 1 }"
    >
      <template>
        <Comment />
      </template>
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
    coverUrl: {
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
    hasArce: {
      type: Boolean,
      default: false,
    },
    id: {
      type: Number,
      default: 0,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    link: {
      type: String,
      default: 'https://www.google.com',
    },
  },
  data() {
    return {
      showTextarea: false,
    };
  },
  methods: {
    handleShowReply() {
      this.showTextarea = true;
      this.$store.commit('setReplyCommentId', this.id);
    },
    report() {},
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
