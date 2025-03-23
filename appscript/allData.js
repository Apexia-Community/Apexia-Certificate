function doGet(req) {
  var doc = SpreadsheetApp.getActiveSpreadsheet();
  var sheetNames = [
    "Converge_Certificate_Data",
    "Webverse_Part_One_Event_One_Certificate_Data",
    "Webverse_Part_One_Event_Two_Certificate_Data",
    "Projects_to_Products_Certificate_Data",
    "Designiti_Certificate_Data",
    "Genesis_Certificate_Data"
  ]; // Add your sheet names here
  var output = [];

  sheetNames.forEach(function (sheetName) {
    var sheet = doc.getSheetByName(sheetName);
    if (sheet) {
      var values = sheet.getDataRange().getValues();

      for (var i = 0; i < values.length; i++) {
        var row = {};
        row["Attendee_Name"] = values[i][0];
        row["Email_Address"] = values[i][1];
        row["Checked_In"] = values[i][2];
        row["SheetName"] = sheetName;

        output.push(row);
      }
    }
  });

  return ContentService.createTextOutput(
    JSON.stringify({ data: output })
  ).setMimeType(ContentService.MimeType.JSON);
}
