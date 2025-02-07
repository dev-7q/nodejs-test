const { Worker } = require("worker_threads");
console.log('메인 스레드 실행');

const worker = new Worker("./worker.js");
worker.postMessage("안녕, 워커!");
worker.on('message', (message) => {
    console.log('워커로부터 메시지:', message);
    worker.terminate().then(() => console.log('워커 종료됨'));
})