import { LightningElement,track,wire} from 'lwc';
import MyMessageChannel from '@salesforce/messageChannel/MyMessageChannel__c';
import {publish,MessageContext} from 'lightning/messageService';


export default class PublisherComponent extends LightningElement {

    @track Message;
    @wire(MessageContext,{refresh:true})
    messageContext;

    

    handleChange(event)
    {
        this.Message = event.target.value;
    }

    handleClick()
    {
        let message = {message:this.Message,refresh:true};
        publish(this.messageContext,MyMessageChannel,message);
    }
}