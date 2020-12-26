const sha256 = require("crypto-js/sha256");

class Block{
    constructor(timestamp, data, previousHash){
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash(){
        return sha256(
            this.timestamp + JSON.stringify(this.data) + this.previousHash
        ).toString();
    }
}

class Blockchain{
constructor(){
        this.chain = [];
    }
    
    addBlock(newBlock){
        this.chain.push(newBlock);
    }

}

const joshcoin = new Blockchain();

const block = new Block("2020-02-02", {amount: 5}, "AXYZ");

joshcoin.addBlock(block);
console.log(joshcoin);