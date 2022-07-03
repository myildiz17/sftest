import { LightningElement, wire } from 'lwc';
import getFilteredAccounts from '@salesforce/apex/AccountLister.getFilteredAccounts';

export default class WireWithParams extends LightningElement {
    typeValue=''
    @wire(getFilteredAccounts, {type: '$typeValue'})
    filteredAccounts
}