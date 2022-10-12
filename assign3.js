//Given an array of game, scores print the highest and lowest score
//Sample Input - [100, 20, 31, 150, 39, 72]
//Sample Output - 150 
		 //  20
          let arry = [100, 20, 31, 150, 39, 72];
          let morthenhundred = arry.filter((item)=>{
            return item>100;
        
          })
          console.log(morthenhundred)
          let ary = [100, 20, 31, 150, 39, 72];
          let lessthentharty = ary.filter((item)=>{
            return item<30;
        
          })
          console.log(lessthentharty)
                 