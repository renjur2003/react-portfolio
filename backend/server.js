import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/api/send-email", async (req, res) => {
  const { from_name, reply_to, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "renju.stackuponline@gmail.com",
      subject: `New Portfolio Message from ${from_name}`,
      html: `
        <p><strong>Name:</strong> ${from_name}</p>
        <p><strong>Email:</strong> ${reply_to}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      reply_to: reply_to,
    });

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
