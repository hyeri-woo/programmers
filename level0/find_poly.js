/*
if(polynomial.reduce((a, c) => a += parseInt(c), 0) == 0 || polynomial == "") { return "0"; }
빈 polynomial 값을 받으면 empty string 대신 "0" 문자열을 제출하기 위해 추가했다.
sum_x에는 x를 가지고 있는 것만 가지고 있도록 filter 함수를 사용했다.
sum_c에는 constant (숫자)만 가지고 있도록 filter 함수를 사용했다.
num_x는 sum_x를 reduce 함수를 사용해 x를 제외한 앞의 상수를 더하도록 했다
앞에 아무것도 없다면 1을 더할 수 있도록 했다.
num_c는 sum_c를 reduce 함수를 사용해 전부 더하도록 했다.
return (num_x==0?"":num_x+"x") + (num_c==0?"":" + " + num_c);
num_x나 num_c가 0이라면 empty string, 0이 아니라면 그 값을 제출했다.
num_x 뒤에는 "x" 를 붙였다.

테스트 케이스를 "x"를 넣어보니 "x" 대신 "1x"가 나왔다. 계수가 생략되지 않았다
*/
function first_solution(polynomial) {
    polynomial = polynomial.split(" + ");
    if(polynomial.reduce((a, c) => a += parseInt(c), 0) == 0 || polynomial == "") {
        return "0";
    } 
    let sum_x = polynomial.filter(item => item.includes('x'));
    let sum_c = polynomial.filter(item => !item.includes('x'));
    let num_x = sum_x.reduce((a, c) => a += (parseInt(c.replace("x", "")) || 1), 0);
    let num_c = sum_c.reduce((a, c) => a += parseInt(c), 0);
    return (num_x==0?"":num_x+"x") + (num_c==0?"":" + " + num_c);
}

/*
return 라인에 x를 출력할때 삼항 연산자를 추가해 num_x가 1일시 "1x"대신 "x"를 출력하도록 했다.
이중 삼항 연산자를 추가하고 싶지 않았지만 이미 변수가 너무 많았기에 더이상 변수도 추가하기 싫었다.

x값만 있는 것은 따로 테스트 해보았는데 상수값만 있는 것은 테스트 못해보았다. 뒤에 "+"를 무조건 붙이는 것이 문제가 되는 것 같아보였다.
*/
function second_solution(polynomial) {
    polynomial = polynomial.split(" + ");
    if(polynomial.reduce((a, c) => a += parseInt(c), 0) == 0 || polynomial == "") {
        return "0";
    } 
    let sum_x = polynomial.filter(item => item.includes('x'));
    let sum_c = polynomial.filter(item => !item.includes('x'));
    let num_x = sum_x.reduce((a, c) => a += (parseInt(c.replace("x", "")) || 1), 0);
    let num_c = sum_c.reduce((a, c) => a += parseInt(c), 0);
    return (num_x == 0 ? "": num_x==1? "x" : num_x+"x") + (num_c==0 ? "":" + " + num_c);
}

/*
너무 쓸떼없는 변수가 많은 것 같아 없애버렸다.
answer을 따로 정의해 먼저 일차항을 저장했다.
만약 일차항이 존재한다면 뒤에 상수값을 +와 함께 추가했다.
만약 존재하지 않고 0이라면 "0"을, 0이 아니라면 sum_c를 문자열로 변경해 제출했다.
*/
function final_solution(polynomial) {
    polynomial = polynomial.split(" + ");
    let sum_x = polynomial.filter(item => item.includes('x'))
                .reduce((a, c) => a += (parseInt(c.replace("x", "")) || 1), 0);
    let sum_c = polynomial.filter(item => !item.includes('x'))
                .reduce((a, c) => a += parseInt(c), 0);
    let answer = sum_x == 0 ? "": sum_x == 1 ? "x" : sum_x + "x";
    if(answer != "") answer += sum_c == 0 ? "":" + " + sum_c;
    else answer = sum_c == 0 ? "0": sum_c.toString();
    return answer;
}