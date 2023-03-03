function my_solution(board) {
    // bomb의 인덱스들을 찾는다
    let index = [];
    for(let i=0; i<board.length; i++) {
        let idx = board[i].indexOf(1);
        while(idx != -1) {
            index.push([i, idx]);
            idx = board[i].indexOf(1, idx + 1);
        }
    }
    
    // [x-1][y-1], [x-1][y], [x-1][y+1], [x][y-1], [x][y+1], [x+1][y-1], [x+1][y], [x+1][y+1]의 값들을 2로 변경
    for(let i of index) {
        let x = i[0];
        let y = i[1];
        if(x > 0) {
            board[x-1][y] = 2;
            if(y > 0) { board[x-1][y-1] = 2; }
            if(y < board.length-1) { board[x-1][y+1] = 2; }
        }
        if(x < board.length-1) {
            board[x+1][y] = 2;
            if(y > 0) { board[x+1][y-1] = 2; }
            if(y < board.length-1) { board[x+1][y+1] = 2; }
        }
        if(y > 0) {
            board[x][y-1] = 2;
        }
        if(y < board.length-1) {
            board[x][y+1] = 2;
        }
    }
    
    //board의 0의 갯수를 찾은 뒤 return 
    let answer = 0;
    for(let b of board) {
        answer += b.filter(function(value){ return value == 0;}).length
    }
    return answer;
}

function other_solution(board) {
    // 바꿀 index을 미리 정의
    let outside = [[-1,0], [-1,-1], [-1,1], [0,-1],[0,1],[1,0], [1,-1], [1,1]];
    let safezone = 0;

    board.forEach((row, y, self) => row.forEach((it, x) => {
        // it이 1이면 false return
        if (it === 1) return false;
        // optional chaining(?.)을 사용해 outofindex 에러 막아주기
        // 단축어(!!)을 사용해 boolean 값으로 받기
        return outside.some(([oy, ox]) => !!self[oy + y]?.[ox + x])? false : safezone++;
    }));

    return safezone;

}