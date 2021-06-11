let firstFunction=(arr,d,n)=>{
    d=d%n;
    let b;
    while(d>0){
        b=arr.shift();
        arr[n-1]=b;
        d=d-1;
    }
    return arr;
};
console.log(firstFunction([1,2,3,4,5],2,5));