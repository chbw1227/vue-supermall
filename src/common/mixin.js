import { debounce } from './utils'
export const imageLoadMixin = {
    data(){
        return{
            itemImageListener:null
        }
    },
    mounted() {
        let newRefresh = debounce(this.$refs.scroll.refresh, 100)
        this.itemImageListener = newRefresh
        this.$bus.$on('itemImgLoad', this.itemImageListener)
        console.log('我是混入内容')
    },
}