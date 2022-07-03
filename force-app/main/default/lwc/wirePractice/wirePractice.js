import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountLister.getAccounts';


export default class WirePractice extends LightningElement {

    updatedAccounts

    @wire(getAccounts)
    accounts

    @wire(getAccounts)
    accountHnadler({data, error}){

        if(data){
            this.updatedAccounts = data.map(acc=>{
                let newType = acc.Type ===  'Customer - Direct' ? 'Direct' : 
                acc.Type ===  'Customer - Channel' ? 'Channel' : '-------'
                return {...acc,newType}
            })

        }
        if(error){
            console.error(error)
        }
    }

}  