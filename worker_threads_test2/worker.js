const { parentPort, workerData } = require('worker_threads');

console.log(`워커 ${workerData.id} 시작`); // 워커 ID 출력

let count = workerData.count;

let t = setInterval(() => {
    console.log(`워커 ${workerData.id}: ${count--}`);

    if (count === 0) {
        clearInterval(t);
        console.log(`워커 ${workerData.id} 종료 준비 완료`);
        process.exit(0);
    }
}, 1000);