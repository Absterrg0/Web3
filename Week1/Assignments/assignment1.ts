import crypto from'crypto'

function findHashWithPrefix(prefix:string){
    let input =0;
    while(true){
        const inpStr = input.toString();
        const hash  = crypto.createHash('sha256').update(inpStr).digest('hex')
        if(hash.startsWith(prefix)){
            return { input : input , hash: hash};
        }
        input++;
    }

}


const result = findHashWithPrefix('00000')
console.log(`Input : ${result.input}`);
console.log(`Hash : ${result.hash}`);