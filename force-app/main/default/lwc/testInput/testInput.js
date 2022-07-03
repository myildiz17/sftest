import { LightningElement } from 'lwc';

export default class TestInput extends LightningElement {

    inputValue
    inputValue2
    handleInput(event){
        this.inputValue = event.target.value
    }

    handleInput2(event){
        this.inputValue2 = event.target.value
    }
}