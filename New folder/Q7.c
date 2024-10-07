// 7. Write a function that simulates a traffic light system. The function should take the current light color (red, yellow, green) as input and print the corresponding action:
// "red" → "Stop"
// "yellow" → "Slow down"
// "green" → "Go"



#include <stdio.h>

int main() {
    char light;
    printf("Enter traffic light first lattter:");
    scanf("%c",&light);
    if(light == 'R'){
    printf("stop");
}else if(light == 'Y'){
    printf("slow down");
}else if(light == 'G'){
    printf("go");
}else{
    printf("give proper color");
}

}