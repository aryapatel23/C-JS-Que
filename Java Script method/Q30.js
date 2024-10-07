// 30. Write a program to input an integer 'n' and print the sum of all its even digits and the sum of all its odd digits separately. Example : Input: 'n' = 132456, Output: 12, 9



let num=123456789;
let str=num.toString()
let length=str.length;
let even=0;
let odd=0;
for(i=0;i<length;i++){
        let digits=parseInt(str[i])

        if(str[i]%2 ==0){
            even=even+digits
        }else{
            odd=odd+digits
        }
}
console.log(even)
console.log(odd)