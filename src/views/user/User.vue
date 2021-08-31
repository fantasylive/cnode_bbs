<template>
  <div class="user">
    <section>
      <div>
        <img :src="user.avatar_url" alt="" />
        <span>{{ user.loginname }}</span>
        <p>积分：{{ user.score }}</p>
        <p>注册时间：{{createdTime}}</p>
      </div>
    </section>
    <section>
      <header>回复的主题</header>
      <div>
        <p v-for="item in user.recent_replies">
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
    <section>
      <header>创建的主题</header>
      <div>
        <p v-for="item in user.recent_topics">
          <router-link
            :to="{
              path: '/article',
              query: { id: item.id, author: user.loginname }
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
import {howLongAgo} from 'common/utils'
import { getUserData } from 'network/getDatas'
export default {
  name: 'User',
  data() {
    return {
      user: {}
    }
  },
  computed: {
    createdTime() {
      return howLongAgo(this.user.create_at)
    }
  },
  methods: {
    getUserData() {
      getUserData(this.$route.query.name).then((res) => {
        this.user = res
      })
    }
  },
  created() {
    this.getUserData()
  }
}
</script>

<style lang='less' scoped>
.user {
  font-size: 16px;
  span {
    font-size: 25px;
    vertical-align: middle;
    margin-left: 5px;    
  }
  // 修改router-link的默认样式
  a {
    text-decoration: none;
    color: #colors[6th];
  }
  img {
    height: 80px;
    object-fit: contain;
    vertical-align: middle;
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
      line-height: 20px;
    }
  }
}
</style>