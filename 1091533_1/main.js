// window.onload = function(){
//     // alert("hi");
// }

// let imageURL_Array = [
//     "https://photo.518.com.tw/selfmedia/articles/1822/166184376108829.jpeg",
//     "https://lordcat.tw/wp-content/uploads/2021/09/1631538408-378fce845ce05de4c29be3e870b50e13.jpg",
//     "https://pic03.eapple.com.tw/siangnong/xn_i_img02.png",
//     "https://tokyo-kitchen.icook.network/uploads/recipe/cover/372073/60ad2eda9638fa38.jpg"
// ]

$(function () {
    $("input").on("click", function () {
        // alert("Hi");
        // $("h1").text("Hello");
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random() * numberOfListItem);
        console.log(randomChildNumber);
        $("h1").text($("li").eq(randomChildNumber).text());
        // $("img").attr("src", imageURL_Array[randomChildNumber]).show();

        if ($("h1").text() == "流星花園") {
            $("img").attr("src", "liuxing.jpg").show();
        } else if ($("h1").text() == "將夜2") {
            $("img").attr("src", "ye.jpg").show();
        } else if ($("h1").text() == "戰火中的青春") {
            $("img").attr("src", "huo.jpg").show();
        } else if ($("h1").text() == "遇龍") {
            $("img").attr("src", "yulong.jpg").show();
        } else if ($("h1").text() == "理智派生活") {
            $("img").attr("src", "lizhipai.jpg").show();
        } else if ($("h1").text() == "蒼蘭訣") {
            $("img").attr("src", "jue.jpg").show();
        } else if ($("h1").text() == "浮圖緣") {
            $("img").attr("src", "yuan.jpg").show();
        } else if ($("h1").text() == "今日宜加油") {
            $("img").attr("src", "jiayou.jpg").show();
        } else if ($("h1").text() == "以愛為營") {
            $("img").attr("src", "ying.jpg").show();
        } else if ($("h1").text() == "抬頭見喜") {
            $("img").attr("src", "taitou.jpg").show();
        } else if ($("h1").text() == "超次元偶像") {
            $("img").attr("src", "ccy.jpg").show();
        } else if ($("h1").text() == "親愛的·客棧(第二季)") {
            $("img").attr("src", "kz2.jpg").show();
        } else if ($("h1").text() == "2018超級企鵝聯盟:紅藍大戰") {
            $("img").attr("src", "qe18.jpg").show();
        } else if ($("h1").text() == "2019超級企鵝聯盟 Super3:星斗場") {
            $("img").attr("src", "qe19.jpg").show();
        } else if ($("h1").text() == "我在頤和園等你") {
            $("img").attr("src", "yhy.jpg").show();
        } else if ($("h1").text() == "元氣滿滿的哥哥") {
            $("img").attr("src", "gg.jpg").show();
        } else if ($("h1").text() == "2020超級企鵝聯盟 Super3:星斗場") {
            $("img").attr("src", "qe20.jpg").show();
        } else if ($("h1").text() == "你好，星期六") {
            $("img").attr("src", "hl.jpg").show();
        } else if ($("h1").text() == "五十公里桃花塢(第二季)") {
            $("img").attr("src", "thw2.jpg").show();
        } else if ($("h1").text() == "打球嘛朋友") {
            $("img").attr("src", "dqm.jpg").show();
        } else if ($("h1").text() == "全力以赴的行動派") {
            $("img").attr("src", "xdp.jpg").show();
        } else if ($("h1").text() == "五十公里桃花塢(第三季)") {
            $("img").attr("src", "thw3.jpg").show();
        } else if ($("h1").text() == "電視劇") {
            return;
        } else if ($("h1").text() == "電影") {
            return;
        } else if ($("h1").text() == "綜藝") {
            return;
        } else if ($("h1").text() == " ") {
            return;
        }
    });
});
