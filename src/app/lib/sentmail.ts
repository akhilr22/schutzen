import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

interface UserData {
    id: string;
    name: string;
    email: string;
    phone: string;
    resumeUrl: string;
    coverLetterUrl: string | null;
    createdAt: Date;
}

export async function sentMail(userData: UserData) {
  const message = {
    to: process.env.OWNER_EMAIL, // Owner's email
    from: "your-verified-email@example.com", // Must be verified in SendGrid
    subject: "New Resume Submission",
    text: `
      A new resume submission has been received:
      Name: ${userData.name}
      Email: ${userData.email}
      Phone: ${userData.phone}
      Resume URL: ${userData.resumeUrl}
      Cover Letter URL: ${userData.coverLetterUrl || "Not provided"}
    `,
    html: `
      <h3>New Resume Submission</h3>
      <p><strong>Name:</strong> ${userData.name}</p>
      <p><strong>Email:</strong> ${userData.email}</p>
      <p><strong>Phone:</strong> ${userData.phone}</p>
      <p><strong>Resume URL:</strong> <a href="${userData.resumeUrl}">${userData.resumeUrl}</a></p>
      ${
        userData.coverLetterUrl
          ? `<p><strong>Cover Letter URL:</strong> <a href="${userData.coverLetterUrl}">${userData.coverLetterUrl}</a></p>`
          : "<p><strong>Cover Letter:</strong> Not provided</p>"
      }
    `,
  };

  return sgMail.send(message);
}