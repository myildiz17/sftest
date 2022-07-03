import { LightningElement } from 'lwc';

export default class C2pModelComponent extends LightningElement {
    closeHandler(){
        const myEvent = new CustomEvent('close', {
            detail: "Islem tamam abiiii"
        })
        this.dispatchEvent(myEvent)
    }

}