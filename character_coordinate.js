// 처음 캐릭터의 좌표를 (0, 0)이라고 잡고 각 방향에 따라 x 또는 y 좌표를 변경한다.
// 만약 x나 y 좌표의 절대값이 보드에서 갈 수 없는 곳이라면 갈 수 없는 최대값/최소값을 저장한다.
function my_solution(keyinput, board) {
    let x = 0; 
    let y = 0;
    for(let i of keyinput) {
        if(i == "left") x--;
        if(i == "right") x++;
        if(i == "up") y++;
        if(i == "down") y--;
        if(Math.abs(x) > board[0]/2) {
            if(x > 0) x = Math.floor(board[0]/2);
            else x = -1 * Math.floor(board[0]/2);
        }
        if(Math.abs(y) > board[1]/2) {
            if(y > 0) y = Math.floor(board[1]/2);
            else y = -1 * Math.floor(board[1]/2);
        }
    }
		return [x, y];
}


// 각 방향에 따른 object를 key에 정의한다.
// keyinput에 따라 map 함소를 사용해 key[x]로 keyinput을 바꾼다.
// reduce 함수를 사용해 만약 좌표의 절대값이 최대값을 넘는다면 좌표를 그대로 유지하고 아닐 경우 뒤의 좌표와 더해준다.
function other_solution(keyinput, board) {
    let key = {"right" : [1,0], "up" : [0,1], "down" : [0,-1], "left" : [-1,0]};

    let rslt = keyinput.map(v => key[v]).reduce((a,b) => { 
        if (Math.abs(a[0] + b[0]) > board[0]/2 || Math.abs(a[1] + b[1]) > board[1]/2) 
            return [a[0],a[1]] ; 

        return [a[0] + b[0], a[1] + b[1]];}
    , [0,0])

    return rslt;
}