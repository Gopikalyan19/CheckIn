const FORMSUBMIT_CONFIG = {
  // Replace with your email address where you want to receive attendance notifications
  recipientEmail: "interns.innerwhispers@gmail.com",

  // FormSubmit endpoint (will be constructed dynamically)
  baseUrl: "https://formsubmit.co",

  // Email template settings
  senderName: "Intern Attendance System",
  companyName: "InnerWhispers",
  supportEmail: "interns.innerwhispers@gmail.com",
}

// Create attendance email data for FormSubmit
function createAttendanceFormData(user, attendanceRecord) {
  const formattedDate = new Date(attendanceRecord.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return {
    // FormSubmit fields
    _subject: `Attendance Marked Successfully - ${formattedDate}`,
    _template: "table",
    _captcha: "false",
    _autoresponse: "Thank you! Your attendance has been recorded successfully.",

    // Custom fields for the email
    "Intern Name": user.name,
    "Intern ID": attendanceRecord.internId,
    Email: user.email,
    Date: formattedDate,
    Time: attendanceRecord.time,
    Status: "Present",
    System: "Intern Attendance System",
  }
}

// The functions and configuration are now available globally in the browser
