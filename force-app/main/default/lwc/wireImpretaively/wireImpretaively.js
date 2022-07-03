import { LightningElement } from 'lwc';
import getAccounts from '@salesforce/apex/AccountLister.getAccounts';

export default class WireImpretaively extends LightningElement {

    accounts 
    handleAccounts(){
        getAccounts().then(result => {
            this.accounts = result
        }).catch(error=>{
            console.log(error)
        })
    }
}