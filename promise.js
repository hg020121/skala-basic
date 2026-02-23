const drawButton = document.getElementById('drawButton');
const messageDiv = document.getElementById('message');

/**
 * 추첨 함수: async/await를 사용하여 비동기 처리합니다.
 */
function drawLottery() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isWinner = Math.random() < 0.5; // 50% 확률
            isWinner ? resolve("당첨 되었습니다.") : reject("꽝! 다음 기회에...");
        }, 1000);
    });
}

/**
 * 이벤트 리스너: async 키워드를 붙여 await를 사용할 수 있게 합니다.
 */
drawButton.addEventListener('click', async () => {
    // 1. 화면 초기화
    messageDiv.textContent = "1초 후에 당첨 결과가 발표됩니다.";
    messageDiv.className = 'message'; 

    try {
        // 2. await를 사용하여 비동기 작업의 결과가 올 때까지 기다립니다.
        // 성공(resolve)할 경우 그 값이 result 변수에 담깁니다.
        const result = await drawLottery();
        
        messageDiv.textContent = result;
        messageDiv.classList.add('success'); // 파란색
    } catch (error) {
        // 3. 실패(reject)할 경우 에러가 catch 블록으로 넘어옵니다.
        messageDiv.textContent = error;
        messageDiv.classList.add('failure'); // 빨간색
    }
});