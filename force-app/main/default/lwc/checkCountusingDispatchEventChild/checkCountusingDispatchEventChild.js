import { LightningElement,api} from 'lwc';

export default class CheckCountusingDispatchEventChild extends LightningElement {

    EventHandler(event)
    {
        event.preventDefault();
        const selectEvent = new CustomEvent('counthandler',{
            detail : event.target.name
        });

        this.dispatchEvent(selectEvent);
    }


}