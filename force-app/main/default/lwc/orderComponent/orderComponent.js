import { LightningElement } from 'lwc';

export default class OrderComponent extends LightningElement {

    show = false
    flag = true

    ingredients=[
        {
            id:'1',
            name:'beef'
        },
        {
            id:'2',
            name:'chicken'
        },
        {
            id:'3',
            name:'fish'
        }
    ]

    veggyIngredients=[
        {
            id:'1',
            name:'carrot'
        },
        {
            id:'2',
            name:'patato'
        },
        {
            id:'3',
            name:'braccoli'
        }
    ]



    handleOrder(e){
        this.show = true
    }

    handleVeggie(event){
        this.flag = event.target.checked
    }
}