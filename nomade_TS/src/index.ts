import * as CryptoJS from "crypto-js";
class Block {
    public hash: string;
    public previousHash:string;
    public index:number;
    public data:string;
    public timestamp:number;

    //블록을 생성하지 않아도 되는 mathod
    static calculateBlockHash = (
        index: number,previousHash: string,timestamp: number,data: string
        ) : string => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

    constructor(
        index:number,
        hash: string,
        previousHash:string,
        data:string,
        timestamp:number
        ){
            this.index = index;
            this.hash = hash;
            this.previousHash = previousHash;
            this.data = data;
            this.timestamp = timestamp;     
        }
}

const genesisBlock:Block = new Block(0, "20202020" , "" ,"Hello", 123456);

let blockchain:Block[] = [genesisBlock];

console.log(blockchain);

const getBlockchain = () : Block[] => blockchain;

const getLatestBlock = () : Block => blockchain[blockchain.length -1];

const getNewTimeStamp = () :number => Math.round(new Date().getTime() / 1000);

export{};