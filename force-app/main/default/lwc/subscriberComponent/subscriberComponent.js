import { LightningElement, wire} from 'lwc';
import MyMessageChannel from '@salesforce/messageChannel/MyMessageChannel__c';
import {subscribe,MessageContext} from 'lightning/messageService';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class SubscriberComponent extends LightningElement {

    Subscription = null;
    publisherMessage = '';

    @wire(MessageContext,{refresh:true})
    messageContext;

    connectedCallback()
    {
        this.handleSubscribe();
    }

    handleSubscribe(){
        if(this.Subscription)
        {
            return;
        }

        this.Subscription = subscribe(this.messageContext,MyMessageChannel, (message) => {
            console.log(message.message);

            this.publisherMessage = message.message;
            this.showToast('Success',this.publisherMessage,'success','dismissable');



        })
    }

    showToast(title, message, variant, mode){

        const evt = new ShowToastEvent({
            title: title,
            message:message,
            variant: variant,
            mode: mode
        });
        this.dispatchEvent(evt);

    }

}