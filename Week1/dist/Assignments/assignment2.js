"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
function findHashWithPrefix(prefix) {
    let input = 0;
    while (true) {
        const inpStr = "100xdevs" + input.toString();
        const hash = crypto_1.default.createHash('sha256').update(inpStr).digest('hex');
        if (hash.startsWith(prefix)) {
            return { input: input, hash: hash };
        }
        input++;
    }
}
const result = findHashWithPrefix('00000');
console.log(`Input:${result.input}`);
console.log(`Hash:${result.hash}`);
