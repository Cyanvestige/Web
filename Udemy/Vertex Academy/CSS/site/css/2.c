#include<stdio.h>
#define N 3
int func(int a,int b)
{
	a++;
	b++;
	return a%b;
}
typedef struct{
	int num;
	double speed;
}Car;

int main(void)
{
	Car car[N] = {{100,110},{200,130},{300,120}};
	int i,max_i;
	double max = 0.0;

	for(i = 0;i < N;i++){
		if(max < car[i].speed){
			max = car[i].speed;
			max_i = car[i].num;
		}
	}
	printf("%d\n",max_i);
}


	/*int i ,j;
	int y[2],x[2] = {1,1};
	int a[2][2]={{1,2},{3,4}};
	for(i = 0;i < 2;i++)
	{
		y[i] = 0;
		for(j = 0;j < 2;j++){
			y[i] += a[i][j]*x[j];
		}
	}
	printf("%d\n",y[1]);
*/
	/*int i;
	for(i = 0;i < 5;i++)
	{
		i+=2;
	}
	printf("%d",i);
	return 0;
*/
/*	int i,s = 0;
	int a[4] = {1,2,3,4};
	float t;

	for(i = 0;i<4;i++){
		s+=a[i];
	}
	t = s/4;
	printf("%.1f\n",t);
*/
	/*
	int x = 1,y = 2,z;
	int *p = &x,*q = &y,*r = &z;

	*r = *p+*q;

	q = p;
	p = &y;

	*q += z;
	*p = -*q*(*r-x)*(*p);
	printf("%d\n",y);
	*/
	/*
	int i;
	char c;
	char st[32] = "PRO3";

	i = 0;
	while(st[i] != '\0'){
		i++;
	}
	c = st[1] + i;
	printf("%c\n",c);
	*/
	/*int n = 5,k = 2;
	n = func(n,k);
	printf("%d\n",n+k);
	return 0;
*/
