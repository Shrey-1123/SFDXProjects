import { LightningElement,api,wire,track} from 'lwc';
import getRecord from '@salesforce/apex/genericMapAPEX.getRecord';



export default class GenericMapusingAPEX extends LightningElement {

    @api recordId;
    @track mapMarker = [];

  
    accountName;
    billingStreet;
    billingCity;
    billingState;
    billingCountry;
    billingPostalCode;

    renderedCallback(){

        console.log('record id is : '+this.recordId);
    }
   
    
   @wire(getRecord,{recordId:'$recordId'})
    wiredRecords({error,data}){

        if(data)
        {
            console.log(JSON.stringify(data[0]));
            this.accountName = JSON.stringify(data[0].Name);
            this.billingStreet = JSON.stringify(data[0].BillingStreet);
            this.billingCity = JSON.stringify(data[0].BillingCity);
            this.billingPostalCode = JSON.stringify(data[0].BillingPostalCode);
            this.billingState = JSON.stringify(data[0].BillingState);
            this.billingCountry = JSON.stringify(data[0].BillingCountry);
            
            const marker = {
                location :{
                    Street : this.billingStreet ? this.billingStreet:"",
                    City : this.billingCity ? this.billingCity :"",
                    PostalCode : this.billingPostalCode ? this.billingPostalCode :"",
                    State : this.billingState ? this.billingState :"",
                    Country : this.billingCountry ? this.billingCountry :""

                },
                title : this.accountName ? this.accountName :""
            };
            
            this.mapMarker.push(marker);

            console.log('mapmaker '+JSON.stringify(this.mapMarker));
           
        }
        else if(error)
        {
            this.error = undefined;
            console.log('error');
        }
       
    }
}