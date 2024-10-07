// 4. Write a function to check whether a given character is a vowel or consonant.



# include <stdio.h>
int main(){
    char character;
    printf("Enter character");
    scanf("%c",&character);
    if(character=='a' || character=='e' || character=='i' || character=='o' || character=='u' || character=='A' || character=='E' || character=='I' || character=='O' || character=='U'){
        printf("character is vowel");
    }else {
        printf("characetr is cosonant");
    }
    return 0;
}