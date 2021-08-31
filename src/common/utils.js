export {howLongAgo}

// 计算指定时间距今多久并格式化返回
function howLongAgo(time) {
	let msTime = new Date().getTime() - new Date(time).getTime()
	if((Math.floor(msTime / (24 * 3600 * 1000))) >= 365) {
		return Math.floor(msTime / (365 * 24 * 3600 * 1000)) + '年前'
	} else if((Math.floor(msTime / (24 * 3600 * 1000))) >= 30) {
		return Math.floor(msTime / (30 * 24 * 3600 * 1000)) + '月前'
	}	else if((Math.floor(msTime / (24 * 3600 * 1000))) > 0) {
		return Math.floor(msTime / (24 * 3600 * 1000)) + '天前'
	}else if((Math.floor(msTime / (3600 * 1000))) > 0){
	  return Math.floor(msTime / (3600 * 1000)) + '小时前'
	}else {
		return Math.floor(msTime / (60 * 1000)) + '分钟前'
	}
}