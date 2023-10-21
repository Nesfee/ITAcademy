function Alternation(arr1, arr2) {
    let max = Math.max(arr1.length, arr2.length)*2;
    let d = [arr1, arr2];
    let result = [];

    for(let i= 0; i < max; i++){
        let v =  d[i%2][Math.floor(i/2)];
        if(v != undefined) result.push(v);    
    }

    console.log(result)
}

Alternation([1,2,3,4,5], ['a','b','c','d','e','f'])
