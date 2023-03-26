/*
문자열을 배열로 바꾼다.
arr에 set version of s 배열을 저장한다 (중복값 삭제)
s의 item이 각 arr 원소 값을 맞는 것을 filter 해준 후 그것의 길이가 1개이면 answer 배열에 넣는다.
오름차순으로 정렬해준 후 문자열으로 변경 후 제출한다.
*/
function my_solution(s) {
    s = s.split("");
    var arr = [...new Set(s)];
    var answer = [];
    for(let a of arr) {
        if(s.filter(item => item == a).length == 1) answer.push(a);
    }
    return answer.sort().join("");
}


/*
indexOf()메서드는 호출한 String 객체에서 주어진 값과 일치하는 첫 번째 인덱스를 반환한다. 일치하는 값이 없으면 -1을 반환한다.
lastIndexOf()메서드는 주어진 값과 일치하는 부분을 fromIndex로부터 역순으로 탐색하여, 최초로 마주치는 인덱스를 반환한다. 일치하는 부분을 찾을 수 없으면 -1을 반환한다.
두 메서드를 사용해 둘 다 똑같은 인덱스를 반환한다면 answer 배열에 추가한다.
오름차순으로 정렬해준 후 문자열으로 변경 후 제출한다.
*/
function solution(s) {    
    let answer = [];
    for(let i of s) {
        if(s.indexOf(i) == s.lastIndexOf(i)) answer.push(i);
    }
    return answer.sort().join("");
}