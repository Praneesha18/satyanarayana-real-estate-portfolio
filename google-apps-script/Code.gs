/**
 * Bheemarasetty Satyanarayana Real Estate - Google Apps Script Backend for Lead Capture
 * 
 * Target Google Sheet:
 * URL: https://docs.google.com/spreadsheets/d/1m9DHbTnzCNYMx6Rby6v3e9WdKXi8KAeC_UEroQtMTH4/edit?gid=0#gid=0
 * Sheet ID: 1m9DHbTnzCNYMx6Rby6v3e9WdKXi8KAeC_UEroQtMTH4
 * 
 * IMPORTANT DEPLOYMENT INSTRUCTIONS:
 * 1. Open your Google Sheet (https://docs.google.com/spreadsheets/d/1m9DHbTnzCNYMx6Rby6v3e9WdKXi8KAeC_UEroQtMTH4/edit).
 * 2. Click Extensions > Apps Script.
 * 3. Replace all code in Code.gs with this exact file and click Save (💾).
 * 4. Click Deploy > Manage deployments.
 * 5. Click the Edit (pencil) icon on your active deployment:
 *    - Set Version: "New version" (CRITICAL: if you don't choose "New version", old code remains active!)
 *    - Execute as: "Me"
 *    - Who has access: "Anyone" (CRITICAL: Must be "Anyone", NOT "Only myself")
 * 6. Click Deploy.
 */

var SPREADSHEET_ID = "1m9DHbTnzCNYMx6Rby6v3e9WdKXi8KAeC_UEroQtMTH4";

function getTargetSheet() {
  try {
    if (SPREADSHEET_ID && SPREADSHEET_ID.trim() !== "") {
      var ss = SpreadsheetApp.openById(SPREADSHEET_ID.trim());
      return ss.getActiveSheet();
    }
  } catch (err) {
    // If running container-bound
  }
  return SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
}

function doPost(e) {
  try {
    var sheet = getTargetSheet();
    
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

    // Parse data from either JSON postData or form parameters
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
    var phone = "'" + (data.phone || ""); // prefix with ' to preserve full 10-digit number format
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
    spreadsheetId: SPREADSHEET_ID,
    timestamp: new Date().toISOString()
  })).setMimeType(ContentService.MimeType.JSON);
}
