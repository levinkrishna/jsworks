var num=[2,4,5,6]

element=9

low=0
upp=arr.length-1
while(low<upp){
    let cur_sum=arr[low]+arr[upp]
    if(cur_sum==element){
        console.log(arr[low],arr[upp]);
        break
    }
    else if(cur_sum<element){
        low=low+1
    }
}
