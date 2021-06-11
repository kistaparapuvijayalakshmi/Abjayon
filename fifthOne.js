let fifthFunction=(boolArr)=>{
    let minc=9999999;
    let counter=0;
    let count;
    let value;
    for (let i of boolArr){
        count=0;
        for (let j of i){
            if (j===1){
                break;
            }
            count+=1
        }
        if (minc>count){
            minc=count;
            value=counter;
        }
        counter=counter+1;
    }
    return value;
};
console.log(fifthFunction([[0,1,1,1],[0,0,1,1],[1,1,1,1],[0,0,0,0]]));