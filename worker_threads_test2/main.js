const { Worker } = require("worker_threads");

console.log('메인 스레드 실행');

const worker1 = new Worker("./worker.js", { workerData: { id: 1, count: 3 } });
const worker2 = new Worker("./worker.js", { workerData: { id: 2, count: 5 } });

// 워커 종료 감지
worker1.on('exit', () => {
    console.log('워커 1 종료됨');
});

worker2.on('exit', () => {
    console.log('워커 2 종료됨');
});
