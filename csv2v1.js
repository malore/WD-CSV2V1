function csv2v1() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  /* store the first row */
  var data = sheet.getDataRange().getValues();
  var firstRow = [];
  var i=0;
  while(data[0][i] != '' && i<data[0].length){
    firstRow[i] = data[0][i];
    i++;
  }
  
  /* create a new sheet */
  var newSheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet();
  newSheet.setName(sheet.getName() + " - V1");
  
  /* fill the new sheet */
  var k = 1;
  for(i=1;i<data.length;i++) {
    if(data[i][0] == '') {
      newSheet.getRange(parseFloat(k),1).setValue("CREATE");
      k++;
      for(j=0; j<data[0].length; j++) {
        if(data[i][j] != '') {
          newSheet.getRange(parseFloat(k), 1, 1, 3).setValues([["LAST",data[0][j],data[i][j]]]);
          k++;
        }
      }
    }
  }
  
  
}
