module.exports = {
    configureWebpack: {
        resolve: {
            //别名
            alias:{
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network'
            }
        }
    }
}