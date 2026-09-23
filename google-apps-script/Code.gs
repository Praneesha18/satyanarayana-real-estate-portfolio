/**
 * Bheemarasetty Satyanarayana Real Estate - Google Apps Script Backend for Lead Capture
 * 
 * Target Google Sheet ID: 1m9DHbTnzCNYMx6Rby6v3e9WdKXi8KAeC_UEroQtMTH4
 */

var SPREADSHEET_ID = "1m9DHbTnzCNYMx6Rby6v3e9WdKXi8KAeC_UEroQtMTH4";

// Test function: Select "testSheet" in the top bar and click ▶ Run to authorize permissions!
function testSheet() {
  var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = ss.getSheets()[0];
  
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Date & Time",
      "Customer Name",
      "Phone Number",
      "Preferred Call Time",
      "Address / Location",
      "Property Type",
      "Status",
      "Source URL"
    ]);
  }
  
  sheet.appendRow([
    new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    "B. Satyanarayana Test",
    "'8897582265",
    "10 AM – 12 PM",
    "Thatichetlapalem, Visakhapatnam",
    "Open Plot",
    "New",
    "Authorization Test"
  ]);
  
  Logger.log("✅ Success! Test row added to Google Sheet!");
}

function getSheet() {
  var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  return ss.getSheets()[0];
}

function doPost(e) {
  try {
    var sheet = getSheet();
    
    // Create header row if empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Date & Time",
        "Customer Name",
        "Phone Number",
        "Preferred Call Time",
        "Address / Location",
        "Property Type",
        "Status",
        "Source URL"
      ]);
      var headerRange = sheet.getRange(1, 1, 1, 8);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#0F243E");
      headerRange.setFontColor("#FFFFFF");
    }

    var data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (jsonErr) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    var timestamp = data.submittedAt || new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    var name = data.name || "";
    var phone = "'" + (data.phone || "");
    var preferredCallTime = data.preferredCallTime || "";
    var address = data.address || "Not specified";
    var propertyType = data.propertyType || "";
    var status = data.status || "New";
    var sourceUrl = data.sourceUrl || "";

    // Append lead row to sheet
    sheet.appendRow([
      timestamp,
      name,
      phone,
      preferredCallTime,
      address,
      propertyType,
      status,
      sourceUrl
    ]);

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Lead recorded successfully"
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "online",
    service: "Bheemarasetty Satyanarayana Real Estate Lead Webhook",
    timestamp: new Date().toISOString()
  })).setMimeType(ContentService.MimeType.JSON);
}
