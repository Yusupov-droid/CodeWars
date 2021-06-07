var maxSequence = function (arr = []) {
    let max = 0
    let current = 0
    
    if(!arr.length) return 0
  
    arr.forEach(a => {
      current = Math.max(a, current + a)
      max = Math.max(max, current)
    })
    return max
};
