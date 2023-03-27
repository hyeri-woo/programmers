/*
계산하기 쉽게 bin1과 bin2를 배열로 만들어 준 뒤 꺼꾸로 정렬했다.
더 긴 배열을 기준으로 각 맞는 자리의 합을 더해준 뒤 2로 나눠준 나머지를 answer 배열에 추가한다.
temp는 2 이상이 아닐 시 0으로 리셋해준다.
if 문을 사용하여 temp가 0이 아닐때만 추가하게 했다.
*/
function my_solution(bin1, bin2) {
    bin1 = [...bin1].reverse();
    bin2 = [...bin2].reverse();
    let answer = [];
    let temp = 0;
    for(let i=0; i<Math.max(bin1.length, bin2.length); i++) {
        temp += (parseInt(bin1[i]) || 0) + (parseInt(bin2[i]) || 0);
        answer.push(temp%2);
        temp = Math.floor(temp/2);
    }
    if(temp != 0) answer.push(temp);
    return answer.reverse().join("");
}
