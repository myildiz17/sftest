import { LightningElement } from 'lwc';

export default class P3cParent extends LightningElement {

    carosuel =  [
        {
            src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header: "First Card",
            description: "First card description."
        },
        {
            src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
            header: "Seond Card",
            description: "Seond card description."
        },
        {
            src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
            header: "Third Card",
            description: "Third card description."
        }
    ]

    handleClick(event){
        this.template.querySelector('c-p3c-envoke-function').fifty()
    }

}
