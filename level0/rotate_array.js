// array의 push와 for-loop를 사용해 품
function solution(numbers, direction) {
    let answer = [];
    if(direction == "right") {
        answer.push(numbers[numbers.length - 1]);
        for(let i=0; i<numbers.length-1; i++) {
            answer.push(numbers[i]);
        }
        
    } else {
        for(let i=1; i<numbers.length; i++) {
            answer.push(numbers[i]);
        }
        answer.push(numbers[0])
    }
    return answer;
}

// array의 push/pop과 shift/unshift을 이용해 품
function solution(numbers, direction) {
    direction === "right"? numbers.unshift(numbers.pop()) : numbers.push(numbers.shift());
    return numbers;
    
}
