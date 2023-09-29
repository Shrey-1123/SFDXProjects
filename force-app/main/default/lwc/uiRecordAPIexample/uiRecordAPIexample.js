import { LightningElement,api,wire,track} from 'lwc';
import getRecord from 'lightning/uiRecordApi';

const fieldsArray = [
    "Account.Name",
    "Account.Phone"
]

export default class UiRecordAPIexample extends LightningElement {

    @api recordId;
    @track columns = [
        { label: 'Name', fieldName: 'Name' },
        { label: 'Phone', fieldName: 'Phone'},
        
    ];

    @track accountList;
    
    @wire(getRecord,{recordId:'$recordId',fields:fieldsArray})
    wiredRecords({error,data})
    {
        debugger;
        if(data)
        {
            debugger;
            console.log(JSON.stringify(data));
            this.accountList = data;

        }
        else if(error)
        {
            console.log('error');
        }
    }
}