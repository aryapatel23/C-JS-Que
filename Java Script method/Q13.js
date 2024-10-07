// 13. Check if the array arr = [1, 2, 3, 4, 5]
// contains the number 3 and print true or false

let arr=[1,2,3,4,5]
let count=false
for(let i=0;i<=arr.length;i++){
    if(arr[i]===3){
        count=true;
        break
    }
    
}
console.log(count)