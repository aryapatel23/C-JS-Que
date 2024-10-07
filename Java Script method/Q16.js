// 16. Check if all the elements in arr = [3, 5, 9, 1,
//     7] are positive numbers, and print true or false.
    

let arr=[3,5,9,1,7]
let count=false;
for(let i=0;i<=arr.length;i++){
    if(arr[i]>0){
        count=true;
    }
}
console.log(count)