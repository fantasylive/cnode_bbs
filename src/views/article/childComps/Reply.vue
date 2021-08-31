<template>
  <div>
    <div class="replyItem" v-for="(item, index) in replies">
      <div class="author">
        <img :src="item.author.avatar_url" alt="" />
        <span>{{ item.author.loginname }}</span>
        <span>{{ index | floor}}楼</span>
        <span class="favorite"><i class="el-icon-star-on"></i>{{ item.ups | ups }}</span>
      </div>
      <p v-html="item.content" id="content"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Reply',
  props: {
    replies: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    ups() {
      return this.reply.ups.length
    }
  },
  filters: {
    floor(value) {
      return value + 1
    },
    ups(value) {
      return value.length
    }
  }
}
</script>

<style lang='less'>
@import url("~assets/css/markdown-github.css");
.replyItem {
  border-bottom: 1px solid #colors[3rd];
  p {
    margin-left: 20px;
  }
}
.author {
  height: 50px;
  line-height: 50px;
  span:not(.favorite) {
    margin: 0 10px;
  }
  img {
    height: 60%;
    object-fit: contain;
    font-size: 0;
    vertical-align: middle;
  }
  .favorite {
    font-size: 20px;
    color: #colors[4th];
    float: right;
  }
}
</style>