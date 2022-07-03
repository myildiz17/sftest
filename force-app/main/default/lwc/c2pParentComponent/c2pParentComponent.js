import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    show = false
    msg
    handleClick(){
        this.show = true
    }
    handleClose(event){
        this.show = false
        this.msg = event.detail
    }
}