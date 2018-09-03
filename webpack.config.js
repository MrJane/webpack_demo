var path = require('path');
module.exports = {
    //配置入口文件
    entry: './src',
    //配置出口文件
    output: {
        path: path.resolve(__dirname, 'dist'),//path.resolve是node.js中path模块路径合并
        // path:'/assets',paht:需要绝对路径
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                "test": /\.js$/,
                "use": [{
                    "loader": "babel-loader", //报错原因：babe版本要装@7
                    "options": {
                        "presets": ["es2015"]
                    }
                }]
            }
        ]
    },
    watch: true //自动监听文件变化
}