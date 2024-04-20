
<script setup>
import { toplistApi } from '../../base/api/index.js'
import Showlist from "../../components/showlist/showlist.vue";
import Seittlist from '../../components/showlist/setting.vue'
import { ref } from "vue";

const songList = ref([]);  //例表数据
const VarLists = ref([]);
const curIndex=ref(0)
const showlist=false


//调接口
 toplistApi().then(res=>{
	 songList.value=res.list
	 console.log(songList[curIndex])
})


//跳转vip界面
const goVip = () => {
  uni.navigateTo({
    url: "/pages/vippage/vippage",
  });
};
</script>





<template>
  <view class="musiclist">
    <view class="header">
      <image scr="" />
      <view class="search">
        <p class="back"></p>
        <view class="inp">
          <input type="text" />
          <p class="logo">
            <image src="../../icon/songlist/icon-sousuo.png" />
          </p>
        </view>
        <span class="shrink"> </span>
      </view>
    </view>
    <view class="nav">
      <p><image src="../../icon/songlist/icon-tianjia.png" /></p>
      <p><image src="../../icon/songlist/icon-xiaoxi.png" /></p>
      <p><image src="../../icon/songlist/icon-fenxiang2.png" /></p>
    </view>
    <view class="vip">
      <image src="../../icon/songlist/icon-vip.png" />
      <p>
        含25首vip专项歌曲
        <span>vip仅￥0.06/天</span>
        <image
          class="right"
          src="../../icon/songlist/icon-right.png"
          @click="goVip"
        />
      </p>
    </view>
    <view class="songList">
      <view class="allPlay">
        <image class="bofang" src="../../icon/songlist/red-bofang.png" />
        <p>播放全部</p>
        <image src="../../icon/songlist/icon-load.png" />
        <image src="../../icon/songlist/icon-viplist.png" />
      </view>
      <view class="listItem">
        <view class="item">
          <P class="num">
            <span></span>
            <span></span>
          </P>
          <view class="title">
            <h5></h5>
            <span></span>
          </view>
          <p><image src="../../icon/songlist/icon-bofanglist.png" /></p>
          <p><image src="../../icon/songlist/icon-shengl.png" /></p>
        </view>
      </view>
    </view>
	<!-- 底部 -->
	<Showlist />
	<!-- 每首歌曲右侧设置... -->
	<Seittlist v-if="showlist"/>
  </view>
</template>


<style lang="scss" scoped>
.musiclist {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}

.header {
  height: rpx(150);
  background: #eee;
  .search {
    height: rpx(35);
    display: flex;
    // background: #bebebe;
  }
  .back,
  .shrink {
    width: rpx(30);
    height: 100%;
    // background:#eee;
  }
  .shrink {
    display: block;
    width: rpx(30);
    height: 100%;
    // background:#eee;
  }
  .inp {
    flex: 1;
    padding: 1px 10px;
    display: flex;
    input {
      flex: 1;
      height: 100%;
    }
    image {
      width: rpx(30);
      height: rpx(30);
    }
  }
}

.nav {
  width: rpx(260);
  height: rpx(40);
  border-radius: 60px;
  background: #fff;
  position: absolute;
  top: rpx(130);
  left: 15%;
  display: flex;
  align-items: center;
  box-shadow: 1px 1px 2px 2px #eee;
  p {
    flex: 1;
    border-right: 1px solid #bebebe;
    text-align: center;
    image {
      width: rpx(18);
      height: rpx(18);
    }
    &:last-child {
      border: 0;
    }
  }
}

.vip {
  margin: 0 auto;
  width: rpx(320);
  height: rpx(40);
  border: 1px solid #eee;
  margin-top: rpx(35);
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0 rpx(10);
  image {
    width: rpx(25);
    height: rpx(25);
  }
  p {
    font-size: rpx(12);

    span {
      font-size: rpx(12);
      color: #bebebe;
      position: absolute;
      right: rpx(45);
    }
    .right {
      width: rpx(18);
      height: rpx(18);
      position: absolute;
      right: rpx(25);
    }
  }
}
.songList {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.allPlay {
  margin: rpx(30) 0;
  padding: 0 rpx(10);
  display: flex;
  align-items: center;
  .bofang {
    width: rpx(25);
    height: rpx(25);
  }
  image {
    width: rpx(20);
    height: rpx(20);
    display: block;
    margin: 0 rpx(10);
  }
  p {
    flex: 1;
    font-size: 14px;
    margin: 0 rpx(5);
  }
}
.listItem {
  flex: 1;
}
.item {
  display: flex;
  padding: 0 rpx(10);
  .num {
    width: rpx(70);
    height: 100%;
  }
  .title {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  p {
    margin: 0 rpx(10);
    image {
      width: rpx(20);
      height: rpx(20);
    }
  }
}

</style>
