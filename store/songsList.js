import {defineStore} from "pinia";
import {SongdetailApi} from "../base/api";
import {ref} from "vue";

export const userSongsListStore = defineStore('songslist',()=>{

    const songsListData = ref(null)

    const setSongsList = (value) => {
        songsListData.value = value
    }

    return{
        songsListData,
        setSongsList
    }

})

