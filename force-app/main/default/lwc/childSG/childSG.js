import { LightningElement, api } from 'lwc';

export default class ChildSG extends LightningElement {
    tempData
    @api 
    userData
    @api 
    get userData(){
        return this.tempData
    }

    set userData(d){
        this.tempData = d
        this.tempData = {...d, name:"Metin"}
    }

   




}