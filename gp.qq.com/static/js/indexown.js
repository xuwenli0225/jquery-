
// 顶部tab模块切换
$('.top-tab .hd a').mouseover(function () {
    var index = $(this).index()
    $('.top-tab .bd .con>li').eq(index).removeClass('content').siblings().addClass('content')
})
// top-tab模块切换，新闻hover改变字体颜色为橙色
$('.news>li>a').hover(function () {
    $(this).children('span').css('color','#feb012')
},function () {
    $(this).children('span').css('color','#333')
})



//top-slide轮播图
//图片自动播放
var timer = setInterval(function () {
    var index = $('.adBtn a.on').index()
    var newindex = (index+1)%5
    $('.adBtn a').eq(newindex).addClass('on').siblings().removeClass('on')
    $('.adPic a').eq(newindex).children('img').show().parent().siblings().children('img').hide()
},2500)
//鼠标移入图片清除定时器，不再自动播放
$('.adPic img').mouseover(function () {
    // clearInterval(timer++)
    clearInterval(timer)
    timer = null
})
// 鼠标移到按钮上改变图片和按钮样式
$('.adBtn a').mouseover(function () {
    // clearInterval(timer++)
    clearInterval(timer)
    timer = null
    var index = $(this).index()
    $(this).addClass('on').siblings().removeClass('on')
    $('.adPic a').eq(index).children('img').show()
    $('.adPic a').eq(index).siblings().children('img').hide()
})
//鼠标移出图片继续自动播放
$('.adPic').mouseout(function () {
     var timer = setInterval(function () {
        var index = $('.adBtn a.on').index()
        var newindex = (index+1)%4
        $('.adBtn a').eq(newindex).addClass('on').siblings().removeClass('on')
        $('.adPic a').eq(newindex).children('img').show().parent().siblings().children('img').hide()
    },2500)
})



//玩法资料tab切换
$('.play-title li').click(function () {
    $(this).addClass('on').siblings().removeClass('on')
    var index = $(this).index()
    $('.play-intro li').eq(index).addClass('on').siblings().removeClass('on')
})
// 视频中心tab切换
$('#audio .audio-title li').click(function () {
    $(this).addClass('on').siblings().removeClass('on')
    var index = $(this).index()
    $('.audio .audio-show ul').eq(index).addClass('on').siblings().removeClass('on')
})
// 攻略中心tab切换
$('.method .title li').click(function () {
    $(this).addClass('on').siblings().removeClass('on')
    var index = $(this).index()
    $('.method .wrapper-r').eq(index).addClass('on').siblings().removeClass('on')
})


// 游戏特色轮播图feature .swiper
// 自动播放
function slide() {
    var timeId = setInterval(function () {
        var index = $('.swiper div.on').index()
        var newindex = (index+1)%8
        $('.swiper div').eq(newindex).addClass('on').siblings().removeClass('on')
    },2000)
}
slide()

// 左按钮点击
$('.swiper .arrow-l').click(function () {
    var index = $('.swiper div.on').index()
    var newindex = index>0? index-1 : 7
    $('.swiper div').eq(newindex).addClass('on').siblings().removeClass('on')
})

// 右按钮点击
$('.swiper .arrow-r').click(function () {
    var index = $('.swiper div.on').index()
    var newindex = (index+1)%8
    $('.swiper div').eq(newindex).addClass('on').siblings().removeClass('on')
})

// 扫码下载固定定位，显示和隐藏
$(window).scroll(function () {
    console.log($(document).scrollTop())
// 650+42=692
    if ($(document).scrollTop() >= 692) {
        $(".slide-menu").css("display","block")
    } else {
        $(".slide-menu").css("display","none")
    }
})




