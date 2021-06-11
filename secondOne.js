let secondFunction=(arr)=>{
let ob={};
let c=true;
for (let i of arr){
    if (ob[i]==undefined){
        ob[i]=1
    }
    else{
        ob[i]+=1;
    }
}
for(let i in ob){
    if (ob[i]>arr.length/2){
        console.log(i)
        c=false;
    }
}
if (c){
    console.log("No Majority Element");
}};
secondFunction([3,3,4,2,4,4,2,4,4]);