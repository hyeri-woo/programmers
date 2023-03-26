/* 
공백을 삭제한 후 숫자들만 nums 배열에 저장한다.
숫자/공백을 삭제하고 수식들을 exps 배열에 저장한다.
answer에 첫번째 숫자를 저장한다.
수식을 iterate하면서 +일경우 nums의 i+1에 위치한 숫자를 answer에 더해주고 +일경우 nums의 i+1에 위치한 숫자를 answer에 빼준다.
*/
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

/*
공백을 기준으로 my_string을 배열로 나눠준다.
+arr.shift(): arr의 첫번째 원소를 제거하고 parseInt() 해준다.
(arr.shift() === "+" ? 1 : -1): arr의 첫번째 원소를 제거하고 (기호) +일 경우 1 -일 경우 -1을
arr.shift(): 다음 원소와 곱해준다.
이 곱을 arr의 제일 앞에 추가해준다.
이것을 arr의 길이가 1보다 클때까지 진행한다.
*/
function other_solution(my_string) {
    const arr = my_string.split(' ').filter(e=>e);
    while(arr.length > 1) arr.unshift(+arr.shift() + (arr.shift() === "+" ? 1 : -1) * arr.shift())
    return arr[0]
}