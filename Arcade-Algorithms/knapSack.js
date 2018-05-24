function knapsackLight(v1, w1, v2, w2, maxW) { 
    let pairs = [[0,0], [v1, w1], [v2, w2], [v1+v2, w1+w2]]; 
    var maxVal = 0; 
    pairs.forEach((pair)=>{
        if (pair[1]<=maxW && pair[0]>maxVal) { 
            maxVal = pair[0];
        } 
    }); 
    return maxVal; 
}