// ------------------------------------------------------------------
// APP CONFIGURATION
// ------------------------------------------------------------------

module.exports = {
    logging: true,
 
    intentMap: {
       'AMAZON.StopIntent': 'END',
      'AMAZON.YesIntent': 'YesIntent',
      'AMAZON.NoIntent': 'NoIntent'      
     
    },
 
    db: {
         FileDb: {
             pathToFile: '../db/db.json',
         }
     },

     cms: {
    GoogleSheetsCMS: {
        spreadsheetId: '1vNs11l_84rNGlTRNVLsktLHdrNvMyCVrOufuxRJa0g0',
        access: 'public',
        sheets: [
            {
                name: 'responses',
                type: 'Responses',
                position: 1,
            },
        ]
    }
},


 };
 