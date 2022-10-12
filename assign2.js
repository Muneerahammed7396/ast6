//Given an array or string print the total no of characters
//Sample Input - ["HTML", "CSS", "JAVA", "JS", "ANDROID"]
//Sample Output - 20
var str=["HTML", "CSS", "JAVA", "JS", "ANDROID"];
var sum=0;
for(i=0;i<str.length;i++){
    for(j=0;j<str[i].length;j++){
    sum+=str[i][j].length
        
    } 
}
console.log(sum)