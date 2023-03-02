/* 
    babbling 단어들을 able_words와 비교한 뒤 해당이 된다면 전부 *로 먼저 바꿔준다. 
    (empty string으로 변경 시 wyeoo 같은 단어도 카운트됨)
    전부 끝낸 뒤 *을 다시 empty string으로 변경하고 
    babbling 안의 empty string이 몇개인지 카운트 후 return 
*/
function initial_solution(babbling) {
    let answer = 0;
    const able_words = ["aya", "ye", "woo", "ma"]; 
    for(let i=0; i<babbling.length; i++) {
        for(let j of able_words) {
            if(babbling[i].includes(j)) {
                babbling[i] = babbling[i].replace(j, "*");
            }
        }
        babbling[i] = babbling[i].replaceAll("*", "");
    }
    babbling.map(item => {
        if(item == "") answer++;
    });
    return answer;
}


/*
    문자열 비교시 정규식을 사용하면 간편하게 할 수 있다
*/
function other_solution(babbling) {
    var answer = 0;
    const regex = /^(aya|ye|woo|ma)+$/;

    babbling.forEach(word => {
        if (regex.test(word)) answer++;  
    })

    return answer;
}

