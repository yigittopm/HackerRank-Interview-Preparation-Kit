'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the sockMerchant function below.
// 10 20 20 10 10 30 50 10 20
function sockMerchant(n, ar) {
    
    let list = [];
    let result = 0;
    
    for(let i=0; i<ar.length; i++){
        if(!list.includes(ar[i])){
            list.push(ar[i])
        }
    }
    
    
    // 10 20 20 10 10 30 50 10 20 -- ar
    // 10 20 30 50                -- list 
    for(let k=0; k<list.length; k++){
        let gecici = 0;
        let c = 0;
        for(let a=0; a<ar.length; a++){
            if(ar[a] == list[k]){
                gecici += ar[a];
                c = ar[a]
            }
        }
        gecici = Math.floor(gecici / (c*2));
        result += gecici
    }
    
    
    return result;
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}