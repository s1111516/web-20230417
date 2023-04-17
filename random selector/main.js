//window.onload = function(){
    //alert("Hi");
//};

let imageURL_Array=[
    "https://photo.518.com.tw/selfmedia/articles/1822/166184376108829.jpeg",
    "https://fairylolita.com/wp-content/uploads/2020/10/DSCF8136.jpg",
    "https://rs.joo.com.tw/website/uploads_product/website_771/P0077100065111_1_243124.jpg?_43177",
    "https://images.chinatimes.com/newsphoto/2019-12-07/656/20191207002790.jpg",
    "https://resource02.ulifestyle.com.hk/ulcms/content/article/thumbnail/1280x720/uf/3350000/3354914/584.jpg",
    "https://media.zenfs.com/zh-tw/nownews.com/f6b655306de6d887c40196aed8f1afc9",
    "https://www.chefschoice.com.tw/wp-content/uploads/2019/12/1576203882635.jpg"
]

$(function(){
    $("input").on("click",function(){
        //alert("Hi");
        $("h1").text($("li:first").text());
    });
});
$(function(){
    $("input").on("click",function(){
        //alert("Hi");
        $("h1").text($("li:last").text());
    });
});
$(function(){
    $("input").on("click",function(){
        //alert("Hi");
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("h1").text($("li").eq(randomChildNumber).text());
        $("img").attr("src",imageURL_Array[randomChildNumber]);

        
    });
});