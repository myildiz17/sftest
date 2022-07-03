import { LightningElement } from 'lwc';

export default class HelloWorld2 extends LightningElement {
    firstName
    lastName

    handleName(event){
        this.firstName = event.target.value
    }

    handleLName(event){
        this.lastName = event.target.value
    }

    get fullName(){
        const tamName = this.firstName+' '+this.lastName
        return tamName.toUpperCase()
    }

}