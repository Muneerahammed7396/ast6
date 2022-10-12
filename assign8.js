//Given a 2d Array print the difference between first and second diagonals sum 
//Sample Input - [
	//	[1, 2, 3],
	//	[4, 5, 6],
	//	[7,  8, 9]
//]
	//Sample Output - First Diagonal -> 1+5+9 ->  15
		//	Second Diagonal -> 3+5+7 -> 15
		//	Difference => 15-15 -> 0
        arr=[
        [1, 2, 3],
		[4, 5, 6],
	    [7,  8, 9]
];
var firstsum=0;
var secondsum=0;
for(var i=0;i<arr.length;i++){
    firstsum+=arr[i][i]
    secondsum+=arr[i][1]
};
console.log('15-15=',firstsum-secondsum)
