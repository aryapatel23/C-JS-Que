// 2. Write a function to determine whether a given number is positive, negative, or zero.


#include <stdio.h>
int main(){
    int num;
    printf("Enter number:");
    scanf("%d",&num);
    if(num>0){
        printf("number is positive");
    }else if(num<0){
        printf("number is negative");
    }else{
        printf("number is zero");
    }
}