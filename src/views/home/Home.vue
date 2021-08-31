<template>
  <div class="home">
    <post-list :articles='articles'/>
  </div>
</template>

<script>
import PostList from './childComps/PostList'
import {getPostList} from 'network/getDatas'
export default {
  name: 'Home',
  components: {
    PostList
  },
  data() {
    return {
      articles: [],
    }
  },
  methods: {
    getPostList() {
      getPostList().then(res => {
        this.articles = res
      })
    }
  },
  created() {
    this.getPostList()
  }
}
</script>

<style scoped lang='less'>
.home {
  background-color: #colors[1st];
}
</style>