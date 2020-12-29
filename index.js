const sha256 = require("crypto-js/sha256");

class Block{
    constructor(timestamp, data, previousHash = ""){
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
        this.chain = [this.generateGenesisBlock()];
    }

    generateGenesisBlock(){
        return new Block("2020-01-01", "GENESIS", "0000");
    }

  getLatestBlock()
    {
        return this.chain[this.chain.length-1]; 
    }
   
    addBlock(newBlock)  //function for adding block
    {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

}

const joshcoin = new Blockchain();  //empty blockchain initialization

const block = new Block("2020-02-02", {amount: 5});

joshcoin.addBlock(block);

console.log(joshcoin);