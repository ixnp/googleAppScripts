function myFunction() {
//creates a spread sheet with the name New Test sheet 2 with 50 rows and 20 col
//loggs the sheet made
var ss = SpreadsheetApp.create('New Test Sheet 2', 50, 20);
Logger.log(ss.getId());
}
var spreadID = 'replace with id'

//function fun1(){
//19qdWW5VN278G0s3ST5VyLDYDLHwHMfcGtP5dIH5o8do
 //var ss = SpreadsheetApp.openById('19qdWW5VN278G0s3ST5VyLDYDLHwHMfcGtP5dIH5o8do')
 //var sheet = ss.getSheets()[0];
 //ss.getRange('A1').setBackground('red');
// ss.getRange('B1').setBackground('blue');
 //var range = sheet.getRange(10,5,8, 4).setBackground('purple')
 //Logger.log(ss.getName());

//}

function fun1(){
    var ss = SpreadsheetApp.openById(spreadsheetID)
    //if there are multiple sheets this specifys the sheet 
    var sheet = ss.getSheets()[0];
    //range of cells being selected
    //getRange(row, column, numRows, numColumns)
    //Returns the range with the top left cell at the given coordinates with the given number of rows and columns.
    var range = sheet.getRange(1,1,2,4);
    var colorBack = range.setBackground('purple');
    var temp = range.getValues();
    Logger.log(temp);
    range.setValues([['value1', 'value2', 'value3', 'value4'],['value1', 'value2', 'value3', 'value4']]);
    Logger.log(temp[1][2]);
    Logger.log(ss.getName());
     
   }
   