//alert('外部ファイル');

var a = 1;
//alert(a);

var b = 2;

var c = a+b;
//alert(c);

var A = 'apple';
var B = 'banana';
var C = A+B;
//alert(C);

var fruit = {'name':'apple', 'price':100};
/*alert(fruit['name']);//'apple'
alert(fruit.name);//'apple'
alert(fruit['price']);//100
alert(fruit.price);//100
*/

var fruits = [
    {'name':'apple', 'price':'100'},// index 0
    {'name':'banana', 'price':'150'},// index 1
    {'name':'strawberry', 'price':'200'}//index 2
    ];
//alert(fruits[1].price);// 150

/*var answer = prompt('1 + 1は？');
//promptというのは'1 + 1 は？'というメッセージ表示とキーボードから入力を受け付けるための関数
if(answer == 2){
    alert('正解');
}else{
    alert('不正解');
}
*/

/*var answer = prompt('リンゴとバナナのどちらが好きですか？');
switch(answer){
    case 'リンゴ':
    alert('リンゴは英語でapple');
    break;//important
    case 'バナナ':
    alert('バナナは英語でbanana');
    break;//important
    default:
    alert('リンゴ　or バナナを入力して！');
    break;//not important
}
*/

var fruitS = ['リンゴ', 'バナナ', 'イチゴ', 'ブドウ', 'モモ', 'キウイ', 'メロン', 'スイカ', 'ミカン', 'サクランボ'];

for(var i = 0; i < fruitS.length; i++){
    //alert(fruitS[i]);//変数fruitSの中身がindex順にアラートされる。
}
/*
1.ループ開始するときの処理(var i =0)
変数iに0を代入
2.ループ継続するかの判定(i<fruitS.length)
fruitS.length:配列fruitSの要素数を表している。
3.ループ継続するときの処理(i++)
i=i+1の省略形(i+=1も可)
iに1を加算した値をiに代入する処理。
*/

var n = 0;
while(n<fruitS.length){
    //lert(fruitS[n]);
    n++;//i+=1と書いても同じ。
}//while文は継続するための条件式のみでfor文と同じ内容になる。
/*
下記も同じ内容
var n = 0;
while(true){
    if(n>=fruitS.length){
        break;
    }
    alert(fruitS[n]);
    n++;//n+=1と書いても同じ。
}//while文は継続するための条件式のみでfor文と同じ内容になる。
*/

function calc(x){
    return x*2;
}
alert(calc(3));
