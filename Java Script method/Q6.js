// 6. Write a function that checks if a username and password match predefined values. If the username is "admin" and the password is "1234", print "Login successful"; otherwise, print "Login failed."


function login(username,password){
    const admin="admin"
    const correctedpassword=1234
    if(username===admin && password===correctedpassword){
        console.log("Login successful")
    }else{
        console.log("Login Failed")
    }
}
console.log(login("admin",1234))