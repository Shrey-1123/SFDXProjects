import { LightningElement, wire,track } from 'lwc';
import getAccounts from '@salesforce/apex/CREDusingAPEX.getAccounts';

export default class CREDinlwc extends LightningElement {

    @track columns = [
        { label: 'Name', fieldName: 'Name' },
        { label: 'Id', fieldName: 'Id'}
    ];
   @track accountList;
   
  
    @wire(getAccounts)
    accounts({data,error})
    {
        if(data)
        {
            this.accountList = data;
    
        }
        else if(error)
        {
            console.log(error);
        }
    }
 

}