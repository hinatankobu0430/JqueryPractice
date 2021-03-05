//課題1
var judge = prompt('正負の数を判定します。※半角数字で入力ください');

if(judge > 0){
    alert('正の数です');
}else if(judge < 0){
    alert('負の数です');
}else if(isNaN(judge)){//課題2
    alert('数値を入力してください');
}else{
    alert('0もしくは空欄です');
}

//課題3~7
var animals = [
    {'name':'パンダ', 'weight':'80kg'},
    {'name':'ライオン', 'weight':'200kg'},
    {'name':'キリン', 'weight':'300kg'}
    ];
    
var msg = prompt('パンダ・ライオン・キリンの中から好きな動物を選んでね。');
switch(msg){
    case 'パンダ':
        alert('パンダ！！！');
        break;
    case'ライオン':
        alert('ライオン！！！');
        break;
    case'キリン':
        alert('キリン！！！');
        break;
    case'':
        alert('動物の名前を記入してね');
        break;
}

var animal = ['パンダ','ライオン','キリン'];
var n = 0;
while(n < animal.length){
    alert(animal[1]);
    break;
}

alert(animals[0].weight);
alert(animals[1].weight);
alert(animals[2].weight);

//課題8
function calc(x){
    var result = x*x*3.14;
    return result;
}
alert(calc(10));
