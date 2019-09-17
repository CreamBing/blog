window.οnlοad = function() {
    L2Dwidget.on('*', (name) => {
        console.log('%c EVENT ' + '%c -> ' + name, 'background: #222; color: yellow', 'background: #fff; color: #000')
    }).init({
        dialog: {
            // 开启对话框
            enable: true,
            script: {
                // 每空闲 10 秒钟，显示一条一言
                'every idle 10s': '$hitokoto$',
                // 当触摸到星星图案
                'hover .star': '星星在天上而你在我心里 (*/ω＼*)',
                // 当触摸到角色身体
                'tap body': '哎呀！别碰我！',
                // 当触摸到角色头部
                'tap face': '人家已经不是小孩子了！'
            }
        }
    });
}