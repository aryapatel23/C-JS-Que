// 26. Write a program to check if a string ends with a specific character.Example: Input: ("codinggita", "a"), Output: true.


// function character(str,char){
//     let lastchar;
//     for (let i=0;i=str.length;i++){
//         let lastchar=str[i];
//     }if(lastchar === char){
//         return true;
//     }else{
//         return false;
//     }
// }
// let result=character("arya","a");
// console.log(result)


function endsWithChar(str, char) {
    let lastChar;
    for(let i=0;i<str.length;i++){
        lastChar=str[i]
    }
    if (lastChar === char) {
        return true;
    } else {
        return false;
    }
}
let result = endsWithChar("aryb", "a");
console.log(result);