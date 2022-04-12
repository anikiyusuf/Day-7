function sortit(arr,n)
{
for(let i = 0 ; i < n ; i++){
 arr[i] = i+1;
}
}
let arr = [10,6,3,1,2,5,4,7,9,8];
let n = arr.length;

sortit(arr,n);

for(let i = 0 ; i < n; i++)
console.log(arr[i] + " ");