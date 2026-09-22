/**
 * Bheemarasetty Satyanarayana Real Estate - Google Apps Script Backend for Lead Capture
 * 
 * Target Google Sheet:
 * URL: https://docs.google.com/spreadsheets/d/1m9DHbTnzCNYMx6Rby6v3e9WdKXi8KAeC_UEroQtMTH4/edit?usp=drivesdk
 * Sheet ID: 1m9DHbTnzCNYMx6Rby6v3e9WdKXi8KAeC_UEroQtMTH4
 * 
 * Setup Instructions:
 * 1. Open your Google Sheet (https://docs.google.com/spreadsheets/d/1m9DHbTnzCNYMx6Rby6v3e9WdKXi8KAeC_UEroQtMTH4/edit).
 * 2. In Google Sheets, click Extensions > Apps Script.
 * 3. Delete any existing code in Code.gs and paste this entire file.
 * 4. Click the Save icon (💾).
 * 5. Click Deploy > New deployment.
 * 6. Select type: "Web app" (gear icon).
 * 7. Configure:
 *    - Description: "Satyanarayana Real Estate Leads Webhook"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone" (IMPORTANT: Allows public web form submission)
 * 8. Click Deploy, Authorize access, and copy the Web App URL (starts with https://script.google.com/macros/s/...).
 * 9. Add the URL to your project's .env file as:
 *    VITE_GOOGLE_APPS_SCRIPT_URL=<YOUR_COPIED_URL>
 */

var SPREADSHEET_ID = "1m9DHbTnzCNYMx6Rby6v3e9WdKXi8KAeC_UEroQtMTH4";

function getTargetSheet() {
  try {
    if (SPREADSHEET_ID && SPREADSHEET_ID !== "") {
      var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
      return ss.getActiveSheet();
    }
  } catch (err) {
    // Fallback to active spreadsheet if script is container-bound
  }
  return SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
}

function doPost(e) {
  try {
    var sheet = getTargetSheet();
    
    // Ensure header row exists if the sheet is empty
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
      // Format header row
      var headerRange = sheet.getRange(1, 1, 1, 8);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#0F243E");
      headerRange.setFontColor("#FFFFFF");
    }

    var contents = e.postData.contents;
    var data = JSON.parse(contents);

    var timestamp = data.submittedAt || new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    var name = data.name || "";
    var phone = "'" + (data.phone || ""); // prefix with ' to keep exact phone digits
    var preferredCallTime = data.preferredCallTime || "";
    var address = data.address || "Not specified";
    var propertyType = data.propertyType || "";
    var status = data.status || "New";
    var sourceUrl = data.sourceUrl || "";

    // Append row to sheet
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
      message: "Lead recorded successfully in Google Sheet"
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
