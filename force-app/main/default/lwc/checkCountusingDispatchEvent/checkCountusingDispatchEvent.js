import { LightningElement ,track} from 'lwc';


export default class CheckCountusingDispatchEvent extends LightningElement {

    @track count = 0;

    handleCountEvent(event)
    {
        const btnlabel = event.detail;

        if(btnlabel=="Add")
        {
            this.count = Number(this.count)+1;
        }
        else if(btnlabel =="Sub")
        {
            this.count = Number(this.count)-1;
        }
        else if(btnlabel=="Mul")
        {
            this.count = Number(this.count)*2;
        }
    }



}