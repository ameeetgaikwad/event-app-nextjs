export default function handler(req, res) {
  const { method } = req;
  if (method === "POST") {
    const { email, eventId } = req.body;

    req.status(200).json({
      message: `You have been registered successfully with the email:${email} ${eventId}`,
    });
  }
}
