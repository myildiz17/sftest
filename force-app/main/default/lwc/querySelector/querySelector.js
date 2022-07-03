import { LightningElement } from 'lwc';

export default class QuerySelector extends LightningElement {

    names = ['Ali', 'Veli','Deli']
    fetchDetailHandler(){
        const elem = this.template.querySelector('h1')
        console.log(elem.innerText)
        // const allNames = this.template.querySelectorAll('.name')
        //Array.from(allNames).forEach(el=>{console.log(el.innerText)})
    }
}