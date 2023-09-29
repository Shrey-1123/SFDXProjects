import { LightningElement ,track} from 'lwc';

export default class BmiCalculator extends LightningElement {

    @track height;
    @track weight;
    @track recalculate=false;

    bmiValue;
    result;

    constructor()
    {
        super();
        console.log('inside construtor');
    }

    inputHandler(event)
    {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name);
        if(name==="height")
        {
            this.height = value;
        }
        if(name==="weight")
        {
            this.weight = value;
        }
    }

    submitHandler(event){

        event.preventDefault();
        console.log('height is'+this.height);
        console.log('weight is'+this.weight);

        this.calculate();
    }

    calculate(){
        let height = Number(this.height)/100;
        let weight = Number(this.weight);

        console.log(height*height);
        console.log(weight);

        let BMI = Number(weight)/Number(height*height);

        console.log('BMI is '+ BMI);

        this.bmiValue = BMI.toFixed(2);

        if(this.bmiValue<18.5)
        {
            this.result = "Underweight";
        }
        else if(this.bmiValue>= 18.5 && this.bmiValue<=24.9)
        {
            this.result = "Fit";
        }
        else if(this.bmiValue>24.9 && this.bmiValue<=30)
        {
            this.result = "Overweight";
        }
        else if(this.bmiValue>30)
        {
            this.result = "Obese";
        }

        this.recalculate = true;
    }

    reset()
    {
        this.recalculate = false;
    }
}