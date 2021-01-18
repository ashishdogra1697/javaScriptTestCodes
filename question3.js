var array = [ 1,2,3,4,5,6,7,7,8,9,10,11]; //random test array

repnum=0;
for(var i=0;i<array.length;i++){
    if(array[i]==array[i+1]){
        repnum=array[i];
    }
}
console.log(repnum);