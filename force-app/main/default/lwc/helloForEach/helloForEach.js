import { LightningElement } from 'lwc';

export default class HelloForEach extends LightningElement {

    customers=[
        {
            id:'1',
            Name: 'Ali',
        },
        {
            id:'2',
            Name: 'Veli',
        },
        {
            id:'3',
            Name: 'Deli',
        }
    ]
}