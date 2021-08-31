<template>
  <div>
    <div class="article">
      <header>
        <h2>{{ article.title }}</h2>
        <p>
          <span
            ><el-tag type="info">分类：{{ classify }}</el-tag></span
          >
          <span
            ><el-tag type="info">{{ article.visit_count }}次访问</el-tag></span
          >
          <span
            ><el-tag type="info">发布于：{{ pubDate }}</el-tag></span
          >
          <span
            ><el-tag type="info" v-if="article.author"
              >作者：{{ article.author.loginname }}</el-tag
            ></span
          >
        </p>
      </header>
      <article v-html="article.content" id="content"></article>
    </div>
    <div class="reply">
      <reply :replies="article.replies" />
    </div>
  </div>
</template>

<script>
import { getArticleData } from 'network/getDatas'
import { howLongAgo } from 'common/utils'
import Reply from './childComps/Reply'
export default {
  name: 'Article',
  data() {
    return {
      article: {}
    }
  },
  computed: {
    // 将分类转换成对应的文字
    classify() {
      let type = this.article.tab
      if ((type = 'ask')) {
        return '问答'
      }
      if ((type = 'share')) {
        return '分享'
      }
      if ((type = 'job')) {
        return '招聘'
      }
      if ((type = 'good')) {
        return '精华'
      }
    },
    // 文章发布时间
    pubDate() {
      return howLongAgo(this.article.create_at)
    }
  },
  // 路由进入之前执行
  // beforeRouteEnter(to, from, next) {
  //   next((vm) => {
  //     vm.id = to.query.id
  //   })
  // },
  components: {
    Reply
  },
  created() {
    this.getArticle()
  },
  watch: {
    // 监听url变化重新加载页面数据
    $route(to, from) {
      if (this.$route.query.id) {
        this.getArticle()
      }
    }
  },
  methods: {
    // 根据id获取文章信息
    getArticle() {
      getArticleData(this.$route.query.id).then((res) => {
        this.article = res
      })
    }
  }
}
</script>

<style lang='less'>
/* 
  格式化v-html中的markdown样式
  scoped属性导致css仅对当前组件生效，而html绑定渲染出的内容可以理解为是子组件的内容，子组件不会被加上对应的属性，所以不会应用css.
  解决的话把scoped属性去掉就行了
*/
@import url('~assets/css/markdown-github.css');
.article {
  background-color: #colors[1st];
  padding: 10px;
  margin-right: 10px;
  span {
    margin-right: 5px;
  }
}
.reply {
  background-color: #colors[1st];
  padding: 10px;
  margin: 10px 10px 0 0;
}
</style>