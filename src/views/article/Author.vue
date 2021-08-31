<template>
  <div class="author">
    <section>
      <header>作者</header>
      <div>
        <img :src="author.avatar_url" alt="" />
        <router-link :to="{path: '/user', query: {name: author.loginname}}" custom v-slot="{ navigate }">
          <span @click="navigate">{{author.loginname}}</span>
        </router-link>
        <p>积分：{{ author.score }}</p>
      </div>
    </section>
    <section>
      <header>作者最近主题</header>
      <div>
        <p v-for="item in author.recent_topics">
          <router-link
            :to="{
              path: '/article',
              query: { id: item.id, author: author.loginname }
            }"
            :title="item.title"
            >{{ item.title }}</router-link
          >
        </p>
      </div>
    </section>
    <section>
      <header>作者最近回复</header>
      <div>
        <p v-for="item in author.recent_replies">
          <router-link
            :to="{
              path: '/article',
              query: { id: item.id, author: item.author.loginname }
            }"
            :title="item.title"
            >{{ item.title }}</router-link
          >
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import { getUserData } from 'network/getDatas'
export default {
  name: 'Author',
  data() {
    return {
      author: {}
    }
  },
  methods: {
    getAuthorData() {
      getUserData(this.$route.query.author).then((res) => {
        this.author = res
      })
    }
  },
  created() {
    this.getAuthorData()
  },
  watch: {
    // 监听url变化重新加载页面数据
    $route(to, from) {
      if (this.$route.query.author) {
        this.getAuthorData()
      }
    }
  }
}
</script>

<style lang='less' scoped>
.author {
  position: sticky;
  top: 0;
  font-size: 10px;
  span {
    font-size: 16px;
    color: #colors[2nd];
  }
  // 修改router-link的默认样式
  .router-link-active {
    text-decoration: none;
    color: #colors[6th];
  }
  img {
    height: 50px;
    object-fit: contain;
  }
  header {
    height: 40px;
    line-height: 40px;
    padding-left: 5px;
    background-color: #colors[5th];
  }
  section {
    background-color: #colors[1st];
    div {
      padding: 5px;
    }
    p {
      line-height: 15px;
      // 标题长度超出省略号显示
      width: 350px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>