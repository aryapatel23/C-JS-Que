// 27. Write a program to extract the file extension from a given filename.Example: Input: "document.pdf", Output: "pdf".



let file="index.js"
let arr=file.split('')
// console.log(arr)
let len=arr.length;
str=""
for(let i=0; i<len; i++){
    if(arr[i] == '.'){
        for(j=i+1;j<len;j++){
            str=str+arr[j];
           
        }
    }
}

console.log(str)