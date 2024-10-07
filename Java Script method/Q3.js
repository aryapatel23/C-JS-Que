// 3. Write a function that takes three sides of a triangle and checks whether the triangle is equilateral, isosceles, or scalene.

function triangal(side1,side2,side3){
    if(side1==side2 && side2==side3){
        console.log("Triangal is equilateral")
    }else if(side1==side2 || side2==side3 || side1==side3){
        console.log("Triangle is isosceles")
    }else{
        console.log("Triangle is scalene")
    }
    return
}
console.log(triangal(2,3,2))