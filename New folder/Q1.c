// 1. Write a function to check the grade of a student based on the score:
// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// Below 60: F


#include <stdio.h>
int main(){
    int score;
    printf("Enter your score:");
    scanf("%d",&score);
    if(score<=100 && score >=90){
        printf("grade :A");
    }else if(score<=89 && score>=80){
        printf("grade:B");
    }else if(score<=79 && score>=70){
        printf("grade:C");
    }else if(score<=69 && score>=60){
        printf("grade :D");
    }else if(score<60){
        printf("grade:F");
    }else{
        printf("score invelide");
    }
    return 0;
}