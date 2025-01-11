import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_id";
const EMAILJS_TEMPLATE_ID = "template_id";
const EMAILJS_PUBLIC_KEY = "public_key";

export const sendEmail = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
      },
      EMAILJS_PUBLIC_KEY
    );
    return { success: true, data: response };
  } catch (error) {
    console.error("Email send error:", error);
    return { success: false, error };
  }
};
