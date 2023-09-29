import { LightningElement,api,wire,track} from 'lwc';
import  {getRelatedListRecords}  from 'lightning/uiRelatedListApi';



export default class ContactsMap extends LightningElement {

    @api recordId;
    @track mapMarkers = [];

    @wire(getRelatedListRecords,{
        parentRecordId : '$recordId',
        relatedListId : 'Contacts',
        fields : ['Contact.MailingCity','Contact.MailingStreet','Contact.MailingCountry','Contact.MailingPostalCode','Contact.MailingState','Contact.Name'],
        
    })
    realtedContacts({error,data})
    {
        if(data)
        {
           
            data.records.forEach(dataItem => {
                this.mapMarkers = [...this.mapMarkers,
                {
                    location: {
                        City: dataItem.fields.MailingCity.value,
                        Country: dataItem.fields.MailingCountry.value,
                        PostalCode : dataItem.fields.MailingPostalCode.value,
                        Street : dataItem.fields.MailingStreet.value,
                        State : dataItem.fields.MailingState.value
                    },
                    
                    title: dataItem.fields.Name.value,
                }
                ];
            });
            
            console.log(this.mapMarkers);
            this.error = undefined;
           
        }
        else if(error)
        {
            console.log('error' + error);
        }
    }


}