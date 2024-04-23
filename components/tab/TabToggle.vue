<script setup>
    import {ref, defineProps,defineEmits} from "vue";

    const props = defineProps(['tabList']);
    const emits = defineEmits(['tabIndexEvent']);

    const tabList = ref(props.tabList)

    // const tabList = ref([
    //     {
    //         isSelect: true,
    //         name: "音乐",
    //     },
    //     {
    //         isSelect: false,
    //         name: "播客",
    //     },
    //     {
    //         isSelect: false,
    //         name: "动态",
    //     },
    // ])

    const tabToggle = (index) => {
        let arr = []
        tabList.value.map((value, i) => {
            value.isSelect = index === i;
            arr.push(value)
        })
        tabList.value = arr
        //调用父组件的event事件
        emits('tabIndexEvent', index)
    }
</script>

<template>
    <view class="tabView">
        <view class="tabBar" v-for="(item,index) in tabList" :key="index" @click="tabToggle(index)">
            <text class="title" :style="{color:item.isSelect?'#000000':'#9298a1'}">{{ item.name }}</text>
            <view v-show="item.isSelect" class="iden" :style="{background:'#ea4550'}"></view>
        </view>

    </view>
</template>

<style scoped lang="scss">
    .tabView {
        display: flex;
        justify-content: space-between;
        padding: 50rpx 100rpx;

        .tabBar {
            display: flex;
            flex-direction: column;
            align-items: center;

            .iden {
                width: 30rpx;
                height: 8rpx;
                border-radius: 10rpx;
                margin-top: 5rpx;
            }

        }
    }
</style>