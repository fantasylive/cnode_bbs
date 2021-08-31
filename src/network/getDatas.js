import {request} from './request'
export {getPostList, getArticleData, getUserData}

function getPostList() {
  return request({
    url: '/topics',
    method: 'get',
    params: {
      page: 1,
      limit:20,
    }
  })
}

function getArticleData(id) {
  return request({
    url: `/topic/${id}`,
    method: 'get',
    params:{
      mdrender:true
    }
  })
}

function getUserData(name) {
  return request({
    url: `/user/${name}`,
    method: 'get'
  })
}
