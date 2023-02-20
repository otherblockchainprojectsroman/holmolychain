import { Injectable } from '@angular/core';
import {Blockchain} from "../../../src/blockchain";
import EC from 'elliptic';


@Injectable({
  providedIn: 'root'
})
export class BlockchainService {
  public blockInstance = new Blockchain();
  public walletKeys =[];


  constructor() { 
    this.blockInstance.difficulty=1;
    this.blockInstance.minePendingTransactions('my-wallet-address');

    this.generateWalletkeys ();
  }

  getBlocks(){

    return this.blockInstance.chain;
  }
  private generateWalletKeys(){
    const ec = new EC.ec('secp256k1');
    const key = ec.genKeyPair();

    this.walletKeys.push({
      keyObj: key,
      publicKey: key.getPublic('hex'),
      privateKey: key.getPrivate('hex'),
    });
    console.log(this.walletKeys);
  }
}
