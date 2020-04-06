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
    },
//     devServer: {
        
//         proxy: {
         
//           '^/api': { //拦截所有以'/admin'开始的请求
//             target: 'http://123.207.32.32:8000/api/h8',   //`http://192.160.0.101`,
//             changeOrigin: true,
//             pathRewrite: {
//             }
//           },
          
//         },
    
// }
}
      
