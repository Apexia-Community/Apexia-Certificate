function doGet(req) {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = doc.getSheetByName("SheetName");
    var values = sheet.getDataRange().getValues();

    var output = [];
    for (var i = 0; i < values.length; i++) {
        var row = {};
        row["Attendee_Name"] = values[i][0];
        row["Email_Address"] = values[i][1];
        row["Checked_In"] = values[i][2];

        output.push(row);
    }
    return ContentService.createTextOutput(
        JSON.stringify({ data: output })
    ).setMimeType(ContentService.MimeType.JSON);
}
