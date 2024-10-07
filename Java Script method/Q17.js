// 17. Count how many positive and negative numbers are in
// arr = [1, -2, 3, -4, 5, -6] and print the result.


var arr=[1,-2,3,-4,5,-6]
let countpos=0;
let countneg=0;
for(let i=0;i<=arr.length;i++){
    if(arr[i]>0){
        countpos=countpos+1;
    }else if(arr[i]<0){
        countneg=countneg+1;
    }
}
console.log("positive number:",countpos)
console.log("negative number:",countneg)