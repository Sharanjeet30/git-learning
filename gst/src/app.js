'use strict';

// ------------------------------------------------------------------
// APP INITIALIZATION
// ------------------------------------------------------------------

const { App } = require('jovo-framework');
const { Alexa } = require('jovo-platform-alexa');
const { GoogleAssistant } = require('jovo-platform-googleassistant');
const { JovoDebugger } = require('jovo-plugin-debugger');
const { FileDb } = require('jovo-db-filedb');
const { GoogleSheetsCMS } = require('jovo-cms-googlesheets');


const app = new App();

app.use(
    new Alexa(),
    new GoogleAssistant(),
    new JovoDebugger(),
    new FileDb(),
    new GoogleSheetsCMS()
);


// ------------------------------------------------------------------
// APP LOGIC
// ------------------------------------------------------------------

app.setHandler({
    LAUNCH() {
        let speech = "Hello there , I can assist you  by retrieving a number of metrics. So what information should i help you out with ? ";
        this.ask(speech);
    },

TotalSalesIntent() {
    let speech = "The total sales amount to ";
    let money = "  Dollars.. ";
    let followup = "..... Any other query that you would like to ask";
    
    this.ask(speech + this.t('total.sales') + money + followup);
            
},

TotalXYZSalesIntent() {


    if (this.$inputs.paymentmode.value === 'cash') {
        
        let speech = "The total cash sales amount to ";
        let fs = "."
        this.ask(speech + this.t('cash.sales'));
    

    } else if (this.$inputs.paymentmode.value === 'ewallet') {

        let speech = "The total ewallet sales amount to ";
        this.ask(speech +this.t('ewallet.sales'));

    } 
    else if (this.$inputs.paymentmode.value === 'card') {

        let speech = "The total card sales amount to ";
        this.ask(speech + this.t('card.sales'));
        
    }
},

GenderCountIntent() {
    let speech1 = "The gender count is : Number of male visitors are ";
    let speech2 = "  And the number of female visitors are  ";
    let speech3 = "  "

    this.ask(speech1 + this.t('male.count') + speech2 + this.t('female.count'));
},

 BranchSalesIntent() {
    let speech1 = "The total sales of branch A are ";
    let money = "  Dollars.... ";
    let speech2 = "....And ...The total sales of branch B are ";
    let speech3 = "....And ...The total sales of branch C are ";


    let followup = "..... Any other query that you would like to ask";
    
    this.ask(speech1 + this.t('A.sales') + money + speech2 + this.t('B.sales') + money + speech3 + this.t('C.sales') + money + followup);
            
},
GrossIncomeIntent() {
    let speech = "The gross income is ";
    let money = "  Dollars.. ";
    let followup = "..... Any other query that you would like to ask";
    
    this.ask(speech + this.t('grossincome') + money + followup);
            
},

 

});

module.exports.app = app;
