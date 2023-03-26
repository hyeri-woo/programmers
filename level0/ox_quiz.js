/* 
각 quiz마다 배열로 변경해 equation에 저장한다
ans에 첫번째 숫자를 저장한다.
각 equation 배열 원소마다 +일때는 ans에 그 뒤에 원소를 더해주고 아닐시 빼준다.
만약 마지막 원소가 ans와 같다면 O을 answer에 추가하고 아닐시 X를 추가한다.
*/
function my_solution(quiz) {
    let answer = [];
    for(let q of quiz) {
        let equation = q.split(" ");
        let ans = parseInt(equation[0]);
        for(let i=1; i<equation.length-2; i+=2) {
            if(equation[i] == "+") ans += parseInt(equation[i+1]);
            else ans -= parseInt(equation[i+1]);
        }
        if(ans == parseInt(equation[equation.length-1])) answer.push("O");
        else answer.push("X");
    }
    return answer;
}

/*
각 quiz 원소마다 =를 기준으로 나눠준 뒤 calc과 result에 저장한다.
calc이 +를 포함했다면 1 아니면 -1를 sign에 저장한다.
sign이 1이라면 calc을 +를 기준으로 나누고, sign이 -1이라면 -를 기준으로 나눈 후 a와 b에 저장한다.
a와 b를 Number로 변경 후 b를 sign과 곱해 a와 더한다. 만약 result값이 같다면 O 아니라면 X를 quiz의 원소에 저장한다.
*/
function other_solution(quiz) {
    var answer = [];
    return quiz.map(t => {
        const [calc, result] = t.split(' = ');
        const sign = calc.includes('+') ? 1 : -1
        const [a, b] = calc.split(sign === 1 ? ' + ' : ' - ');

        return +a + (+b * sign) === +result ? 'O' : 'X'
    });
}