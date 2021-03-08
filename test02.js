(function($, window){
    $(function(){
        //処理
        //$('h1').addClass('title'); //addclassメソッド
        
        //$('index').removeClass('list'); //removeClassメソッド
        
        //$('h2').show(); //showメソッド
        
        //$('#index').find('li').eq(0).hide(); //hideメソッドとfindメソッド（'li'のインデックス番号0の要素をfindで取得し、hideする)
        
        //$('#index').find('li').eq(0).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000); //fadeIn/Outメソッド
        
        /*var title = $('h1').text();//textメソッド（テキストを書き換える)
        alert(title);*/
        
        //$('h1').html('jQueryの<span class="title">htmlメソッド</span>で書き換え'); //htmlメソッド
        
        /*$('#index').find('li').each(function(){ //eachメソッド（ループ処理)
            alert($(this).text()); 
        }); */
        
        //課題1:removeメソッド(削除メソッド)
        $('h2').remove(); 
        
        //課題3
        $('#index').append('<li>メソッド</li>');
        
        //課題4
        $('#index').find('li').each(function(){
            alert($(this).text().length);
            });
        
        //課題5
        $('#index').find('li').each(function(){
            var count = ($(this).text().length);
            $(this).append('['+count+'文字'+']');
        });
    });
})(jQuery, window);

/*課題2
textメソッド:テキストだけを書き換えたり、追加したりできるメソッドでhtmlはjs_test02.html(htmlファイルに準ずる）
hitmlメソッド:テキストの書き換えや変更だけではなくhtmlを関数内で変更が可能でとても便利。*/
