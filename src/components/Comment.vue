<template>
  <div class="komment__wrapper">
    <div class="komment" :class="[{ 'has-children': reply.length }]">
      <div v-if="hasArce" class="komment__arc"></div>
      <div class="komment__header flex items-center justify-between mb-[12px]">
        <div class="flex items-start gap-[10px]">
          <a :to="localePath(link)" class="komment__title">
            <a
              :src="coverUrl"
              width="32"
              height="32"
              class="rounded-full"
            ></a>
          </a>
          <div>
            <a
              :to="localePath(link)"
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
          <v-menu
            offset-y
            :nudge-bottom="8"
            content-class="posta__dots-menu"
            min-width="160"
          >
            <template #activator="{ on, attrs }">
              <div class="komment__dots" v-bind="attrs" v-on="on">
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.7334 8.50003C11.7334 7.61629 12.4497 6.90002 13.3334 6.90002C14.2171 6.90002 14.9334 7.61629 14.9334 8.50003C14.9334 9.38376 14.2171 10.1 13.3334 10.1C12.4497 10.1 11.7334 9.38376 11.7334 8.50003Z"
                    fill="#8A939A"
                  />
                  <path
                    d="M6.40039 8.50003C6.40039 7.61629 7.11666 6.90002 8.00039 6.90002C8.88412 6.90002 9.60039 7.61629 9.60039 8.50003C9.60039 9.38376 8.88412 10.1 8.00039 10.1C7.11666 10.1 6.40039 9.38376 6.40039 8.50003Z"
                    fill="#8A939A"
                  />
                  <path
                    d="M2.66641 6.90002C1.78267 6.90002 1.06641 7.61629 1.06641 8.50003C1.06641 9.38376 1.78267 10.1 2.66641 10.1C3.55014 10.1 4.26641 9.38376 4.26641 8.50003C4.26641 7.61629 3.55014 6.90002 2.66641 6.90002Z"
                    fill="#8A939A"
                  />
                </svg>
              </div>
            </template>
            <v-list class="!py-[4px]">
              <v-list-item @click="report">
                <v-list-item-title>{{ $t('report') }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
        <div>
          <Vote :hoverable="true" class="!hidden e:!flex" />
        </div>
      </div>

      <ReplyComment
        v-if="showTextarea && id === replyCommetID"
        @cancel="showTextarea = false"
      />
    </div>
    <div
      v-if="reply.length"
      class="komment__other pl-[20px]"
      :class="{ 'has-border': reply.length > 1 }"
    >
      <template>
        <Comment
          v-bind="{
            coverUrl: item.picture,
            content: item.comment,
            author: item.fullname,
            when: item.when,
            reply: item.reply,
            id: item.id,
            hasArce: true,
            isVerified: item.is_verified,
            link: item.slug,
          }"
        />
      </template>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Vote from '../actions/Vote.vue';
import ReplyComment from '../form/ReplyComment.vue';
import Comment from './Comment.vue';
export default {
  name: 'Comment',
  components: {
    Comment,
    ReplyComment,
    Vote,
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
  computed: {
    ...mapState({
      replyCommetID: (state) => state.replyComment,
    }),
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
