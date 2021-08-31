<template>
  <div class="post_list">
    <div class="post_list_item" v-for="(item, index) in articles">
      <router-link :to="{path: '/user', query: {name: item.author.loginname}}" custom v-slot="{ navigate }">
        <img :src="item.author.avatar_url" @click="navigate">
      </router-link>
      <span class="reply_count">{{ item | replyToVisit }}</span>
      <span class="title" @click="titleClick(item)">{{ item.title }}</span>
      <span class="last_reply">{{ item | lastVisit }}</span>
    </div>
  </div>
</template>

<script>
import { howLongAgo } from 'common/utils'
export default {
  name: 'PostList',
  props: {
    articles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    // replyToVisit() {
    //   return this.article.reply_count + '/' + this.article.visit_count
    // },
    // 计算最后回复时间距今多少天
    //lastVisit() {
      // return Math.floor(
      //   (new Date().getTime() -
      //     new Date(this.article.last_reply_at).getTime()) /
      //     (24 * 3600 * 1000)
      // ) > 0
      //   ? Math.floor(
      //       (new Date().getTime() -
      //         new Date(this.article.last_reply_at).getTime()) /
      //         (24 * 3600 * 1000)
      //     ) + '天前'
      //   : Math.floor(
      //       (new Date().getTime() -
      //         new Date(this.article.last_reply_at).getTime()) /
      //         (3600 * 1000)
      //     ) + '小时前'
      //return howLongAgo(this.article.last_reply_at)
    //}
  },
  filters: {
    replyToVisit(value) {
      return value.reply_count + '/' + value.visit_count
    },
    lastVisit(value) {
      return howLongAgo(value.last_reply_at)
    }
  },
  methods: {
    titleClick(value) {
      this.$router.push({
        path: '/article',
        query: {
          id: value.id,
          author: value.author.loginname
        }
      })
    }
  }
}
</script>

<style scoped lang='less'>
.post_list {
  padding: 0 10px;
}
.post_list_item {
  height: 40px;
  border-bottom: 1px solid #colors[3rd];
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  img {
    flex: 1;
    height: 80%;
    // 被替换的内容将被缩放，以在填充元素的内容框时保持其宽高比。
    object-fit: contain;
  }
  .reply_count {
    flex: 3;
    text-align: center;
  }
  .title {
    flex: 30;
  }
  .last_reply {
    flex: 2;
    text-align: center;
  }
}
</style>