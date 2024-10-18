let audio = new Audio('pouring-water.mp3');  // 倒水音效
let waterHeight = 0;  // 杯子中的水高度

// 监听填充按钮点击事件
document.getElementById('fillButton').addEventListener('click', function() {
    if (waterHeight < 150) {  // 如果水还没满
        waterHeight += 15;  // 每次增加10%水
        document.getElementById('water').style.height = `${waterHeight}px`;

        // 播放倒水音效
        audio.play();

        // 检查水是否刚好满了
        if (waterHeight === 150) {
            alert('Taniah，anda telah mengisikan air sehingga penuh！');
        }
    } else {
        alert('杯Gelas ini sudah penuh！Jom guna gelas yang baharu.');
        resetGame();
    }
});

// 重置游戏
function resetGame() {
    waterHeight = 0;
    document.getElementById('water').style.height = '0px';
}
