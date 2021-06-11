let maximum=(a,b,c)=>{
    if (a>=b && b>=c){
        return a;
    }
    else if (b>=a && a>=c){
        return b;
    }
    else{
        return c;
    }
}
let fourthFunction=(matrix)=>{
    const m=matrix.length;
    const n=matrix[0].length;
    let loopit=n;
    let anotherCounter=0;
    let rowCounter=0;
    let colCounter=0;
    let anotherloopit,sum;
    let a,b,c,maximumofabc;
    let max=0;
    let path;
    while(loopit>0){
        sum=matrix[0][anotherCounter];
        path=sum+"-";
        colCounter=anotherCounter;
        rowCounter=1;
        anotherloopit=m;
        while(anotherloopit>1){
            if(colCounter===0){
                if(matrix[rowCounter][0]>matrix[rowCounter][1]){
                    sum+=matrix[rowCounter][0]
                    path=path+matrix[rowCounter][0]+"-";
                }
                else {
                    sum+=matrix[rowCounter][1];
                    colCounter=1;
                    path=path+matrix[rowCounter][1]+"-";
                }
                
            }
            else if (colCounter===n-1){
                if(matrix[rowCounter][n-1]>matrix[rowCounter][n-2]){
                    sum+=matrix[rowCounter][n-1];
                    path=path+matrix[rowCounter][n-1]+"-";
                }
                else{
                    sum+=matrix[rowCounter][n-2];
                    colCounter=n-2;
                    path=path+matrix[rowCounter][n-2]+"-";
                }
            }
            else{
                a=matrix[rowCounter][colCounter];
                b=matrix[rowCounter][colCounter+1];
                c=matrix[rowCounter][colCounter-1];
                maximumofabc=maximum(a,b,c);
                sum+=maximumofabc;
                path=path+maximumofabc+"-";
                if (maximumofabc===b ){
                    colCounter+=1
                }
                if(maximumofabc===c){
                    colCounter-=1;
                }
            }
            
            anotherloopit--;
            rowCounter++;
            
        }
        if(sum>max){
            max=sum;
        }
        loopit--;
        anotherCounter++;
    }
    
    return max;
};
console.log(fourthFunction([[10,10,2,0,20,4],[1,0,0,30,2,5],[0,10,4,0,2,0],[1,0,2,20,0,4]]));
console.log(fourthFunction([[1,2,3],[9,8,7],[4,5,6]]))