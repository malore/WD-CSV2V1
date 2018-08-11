function csv2v1(){
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
    if(data[i][0] == '') { // if it's creating a new item
      newSheet.getRange(parseFloat(k),1).setValue("CREATE");
      k++;
      for(j=1; j<data[0].length; j++) {
        if(data[i][j] != '') {
          newSheet.getRange(parseFloat(k), 1, 1, 3).setValues([["LAST",data[0][j],data[i][j]]]);
          k++;
        }
      }
    } else { // if the item is already existent
      for(j=1; j<data[0].length; j++) {
        var ref = 0;
        if(data[i][j] != '') {
          if(data[i][j].startswith("S") && ref=0 || data[i][j].startswith("qal")) { // if reference or qualifier
            ref = -1; // no more references are allowed in this row
            var m = 1;
            while(newSheet.getRange(parseFloat(k)-1, m).getValue() != ''){
                  m++;
            }
            newSheet.getRange(parseFloat(k)-1, m, 1, 2).setValues([[data[0][j],data[i][j]]]);
          }
          if(data[i][j].startswith("s")){ // if same reference
          
          }
          newSheet.getRange(parseFloat(k), 1, 1, 3).setValues([[data[i][0],data[0][j],data[i][j]]]);
          k++;
        }
      }
    }
  }
  
  
}
