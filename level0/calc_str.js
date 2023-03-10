function my_solution(my_string) {
    let nums = my_string.replaceAll(" ", "").split(/[\+-]+/);
    let exps = my_string.replace(/[0-9]/gi, "").replaceAll(" ", "").split("");
    let answer = parseInt(nums[0]);
    for(let i=0; i<exps.length; i++) {
        if(exps[i] == "+") answer += parseInt(nums[i+1]);
        if(exps[i] == "-") answer -= parseInt(nums[i+1]);
    }
    return answer;
}

function other_solution(my_string) {
    const arr = my_string.split(' ').filter(e=>e);
    while(arr.length > 1) arr.unshift(+arr.shift() + (arr.shift() === "+" ? 1 : -1) * arr.shift())
    return arr[0]
}