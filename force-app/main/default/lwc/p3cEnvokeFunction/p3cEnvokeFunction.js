import { LightningElement, api } from 'lwc';

export default class P3cEnvokeFunction extends LightningElement {
    ele = 30

    @api fifty(){
        this.ele=50
    }
}