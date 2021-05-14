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

// Complete the hourglassSum function below.
function hourglassSum(arr) {

    let current = 0; // current sum
    let big = -100; // Best big number
    let index=0;  // process number
    
    for(let y=0; y<arr.length-2; y++){      // x cord
        for(let d=0; d<arr.length-2; d++){  // y cord
        ///////////////////////////////////////////
            
            for(let i=y; i<y+3; i++){            
                for(let j=d; j<d+3; j++){
                    
                    if(index != 3 && index != 5){
                        current += (arr[i][j]);
                    }
                    
                 index++;   
                }
            }
            current >= big && (big = current); // selected best big
            current = 0;
            index = 0;
        }
        
    }
    
    
    return big;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let result = hourglassSum(arr);

    ws.write(result + "\n");

    ws.end();
}
