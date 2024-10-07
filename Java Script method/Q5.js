// 5. Write a function that checks if a person is eligible to vote. The person is eligible if they are 18 years old or older.

function age(yourage){
    if(yourage>=18){
        console.log("Person is eligible for vote")
    }else{
        console.log("Person is not eligibal for vote")
    }
}
console.log(age(18))