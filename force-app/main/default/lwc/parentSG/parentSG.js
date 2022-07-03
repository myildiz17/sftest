import { LightningElement } from 'lwc';

export default class ParentSG extends LightningElement {
    num1= 56
    num2=6354364
    str='Hello'
    data = ["ali","Veli"]
    data1={
        name:"mesude",
        meslek:"teacher"
    }

    get mult(){
       return this.num1*this.num2
    }

    get arr(){
        return this.data1.meslek
    }


}