const queue = [
    '1번째 텍스트',
    '2번째 텍스트',
    '3번째 텍스트',
];
const ul = document.querySelector('ul');
document.getElementById('btn').onclick = function() {
    /* 배열의 첫 번째 값을 빼내거나 기본값 대입하기 */
    let text = queue.shift() || '남은 요소가 없습니다.';
    /* 닫는 태그 앞에 li 태그 추가하기 */
    ul.insertAdjacentHTML('beforeend', `<li>${text}</li>`);
};