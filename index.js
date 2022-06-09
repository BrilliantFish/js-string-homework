// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
name = name.toUpperCase();
console.log(name);


// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
flag = 1;
for(var i = 0; i < sentence.length; i++){
    if(flag == 1){
        sentence = sentence.replace(sentence[i], sentence[i].toUpperCase());
        flag = 0;
    }
    if(sentence[i] == ' '){
        flag = 1;
    }
}
console.log(sentence);


// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
var amount = money.replace('￥', '');
console.log(amount);
