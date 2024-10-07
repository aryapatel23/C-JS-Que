// 3. Write a function that takes three sides of a triangle and checks whether the triangle is equilateral, isosceles, or scalene.



#include <stdio.h>

int main(){
    int side1;
    int side2;
    int side3;
    printf("Enter side 1 length:");
    scanf("%d",&side1);
    printf("Enter side 2 length:");
    scanf("%d",&side2);
    printf("Enter side 3 length:");
    scanf("%d",&side3);
    if(side1==side2 && side2==side3){
        printf("Triangle is equilateral");
    }else if( side1!=side2 && side2!=side3 && side1!=side3){
        printf("Triangle is scalene");
    }else{
        printf("Triangle is isosceles.");
    }
    return 0;
}