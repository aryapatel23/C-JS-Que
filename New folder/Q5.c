// 5. Write a function that checks if a person is eligible to vote. The person is eligible if they are 18 years old or older.



#include <stdio.h>
int main(){
    int age;
    printf("Enter your age:");
    scanf("%d",&age);
    if(age>=18){
        printf("Eligible for Vote");
    }else{
        printf("not Eligible for vote");
    }
}