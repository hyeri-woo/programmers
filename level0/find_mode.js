function my_solution(array) {
    // index = array을 set으로 변경 후 다시 array 형태로 (items in array을 한번만 뽑아서 index 설정)
    let index = Array.from(new Set(array));
    // count = array of objects, initialize with {index, 1}s
    let count = index.map(item => Object.assign({index: item, count: 1}));
    // 각 index을 찾으면 +1
    for(let a of array) {
        let i = count.findIndex(item => item.index == a);
        count[i].count++;
    }
    // count array을 내림차순으로 정렬
    count.sort((a, b) => b.count - a.count);
    // count가 1개라면 return 제일 첫번째
    if(count.length < 2) {
        return count[0].index;
    }
    // 최빈값이 2개 이상이라면 return -1
    if(count[0].count == count[1].count) {
        return -1
    }
    // else return 제일 첫번째
    return count[0].index;
}

function advanced_solution(array) {
    // index = array을 set으로 변경 후 다시 array 형태로 (items in array을 한번만 뽑아서 index 설정)
    let index = Array.from(new Set(array));
    // count = array of objects, initialize with {index, 1}s
    let count = index.map(item => Object.assign({index: item, count: 1}));
    // 각 index을 찾으면 +1
    for(let a of array) {
        let i = count.findIndex(item => item.index == a);
        count[i].count++;
    }
    // count array을 내림차순으로 정렬
    count.sort((a, b) => b.count - a.count);
    // 최빈값이 2개 이상이라면 return -1
    // optional chaining으로 count가 1개일 경우 outofindex error 막기
    return count[0].count == count[1]?.count ? -1 : count[0].index;
}


function other_solution(array) {
    let m = new Map();
    // m.get(n) == true 면 1 아니면 0 해서 1을 더한 뒤 m에 item과 count 추가
    for (let n of array) m.set(n, (m.get(n) || 0)+1);
    // count에 따라 내림차순 정렬
    m = [...m].sort((a,b)=>b[1]-a[1]);
    // m.length가 1이거나 최빈값이 1개 인 경우 return 첫번째 m.item count 
    // else return -1
    return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
}