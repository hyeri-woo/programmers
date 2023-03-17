// if문을 사용해 비교해서 answer return
function my_solution(angle) {
    let answer = 0;
    if(angle < 90) {
        answer = 1;
    } else if(angle == 90) {
        answer = 2;
    } else if (angle < 180) {
        answer = 3;
    } else {
        answer= 4;
    }
    return answer;
}

// array filter을 사용해 풀어냄
function other_solution(angle) {
    return [0, 90, 91, 180].filter(x => angle>=x).length;
}
