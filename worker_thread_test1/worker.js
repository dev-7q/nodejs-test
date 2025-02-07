const { parentPort } = require('worker_threads');
parentPort.on('message', (message)=>{
    console.log('메인 스레드에서 받은 메시지 : ', message)
    parentPort.postMessage('안녕 나는 워커야');
});