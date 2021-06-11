let third=(arr1,arr2,arr3)=>{
    let min=99999999;
    let minioutof,maximumoutof,sum;
    let counter=0;
    let ob={};
    let minii=9999999999;
    for (let i of arr1){
        for(let j of arr2){
            for (let k of arr3){
                 minioutof=minimum(i,j,k);
                 maximumoutof=maximum(i,j,k);
                 differenceof=maximumoutof-minioutof;
                 
                 if (min>=differenceof){
                     min=differenceof;
                     if (ob[differenceof]===undefined){
                         ob[differenceof]=[[i,j,k]];
                         
                     }
                     else{
                         ob[differenceof].push([i,j,k]);
                         
                     }
                 }
                 
                 
            }
        }
    }
    if (ob[min].length===1){
        console.log(ob[min[0]]);
    }
    else{
        let resultantArr;
        
        for ( let m of ob[min]){
            sum=0;
            for (let n of m){
                sum+=n;
            }
            if (minii >sum){
                minii=sum;
                resultantArr=m;
            }
        }
        console.log(sort(resultantArr));
    }
};
let sort=(arr)=>{
    arr=arr.sort();
    arr=arr.reverse();
    return arr;
}
let minimum=(a,b,c)=>{
if(a < b && a < c)
	{
		return a;
	}
	else if(b < c)
	{
		return b;
	}
	else
	{
		return c;
	}	}
let maximum=(a,b,c)=>{
    if (a >= b && a >= c)
        {return a;}
   else if (b >=a && b >= c){return b;}
    else{
        return c;
    }
        

};
third([1,2,3],[4,5,6],[7,8,9]);
third([5,2,8],[10,7,12],[9,14,6]);
third([15,12,18,9],[10,17,13,8],[14,16,11,5]);