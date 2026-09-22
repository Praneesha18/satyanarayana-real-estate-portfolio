/**
 * Satyanarayana Real Estate - Google Apps Script Backend for Lead Capture
 * 
 * Instructions:
 * 1. Open your Google Sheet (e.g. named "Real Estate Leads").
 * 2. In row 1, set up column headers:
 *    A1: Date & Time | B1: Customer Name | C1: Phone Number | D1: Preferred Call Time | E1: Address / Location | F1: Property Type | G1: Status | H1: Source URL
 * 3. Click Extensions > Apps Script in Google Sheets.
 * 4. Paste this code into Code.gs.
 * 5. Click Deploy > New deployment.
 * 6. Select type "Web app".
 * 7. Set:
 *    - Description: "Satyanarayana Real Estate Lead Webhook"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone" (IMPORTANT!)
 * 8. Click Deploy, Authorize access, and copy the Web App URL (starts with https://script.google.com/macros/s/...).
 * 9. Add the URL to your project's .env file as VITE_GOOGLE_APPS_SCRIPT_URL=<YOUR_URL>.
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Ensure header row exists if empty sheet
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
    var phone = "'" + (data.phone || ""); // prefix with ' to keep leading zeros / formatted phone string
    var preferredCallTime = data.preferredCallTime || "";
    var address = data.address || "Not specified";
    var propertyType = data.propertyType || "";
    var status = data.status || "New";
    var sourceUrl = data.sourceUrl || "";

    // Append row
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

    // Return JSON response
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
    service: "Satyanarayana Real Estate Lead Webhook",
    timestamp: new Date().toISOString()
  })).setMimeType(ContentService.MimeType.JSON);
}
