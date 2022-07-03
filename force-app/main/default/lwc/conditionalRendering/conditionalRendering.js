import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    flag=true

    handleFlag(event){
        this.flag = event.target.checked
    }
}