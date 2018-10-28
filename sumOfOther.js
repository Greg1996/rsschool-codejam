function sumOfOther (arr) {
    let arr_2=[];
    let sum = 0;
    for( let i=0;i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            sum+=arr[j];
        }
        arr_2[i]=sum - arr[i];
        sum = 0;
    }
    return arr_2;
}