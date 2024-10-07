// 8. Find the Average of an Array. Example: Input: arr=[1,2,3,4,5]; Output: 3


#include <stdio.h>
int main(){
    int num[]={1,2,3,4,5};
    int len=sizeof(num)/sizeof(num[0]);
    int sum=0;
    int count=0;
    for(int i=0;i<len;i++){
        sum +=num[i];
        count++;
    }
    float average=(float) sum/count;
    printf("average is:%.2f",average);
    return 0;
}