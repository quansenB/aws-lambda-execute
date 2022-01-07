// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    await axios.post(req.body.n8nWebhookUrl, req.body.forwardBody);
    res.status(200).json({ message: 'Successfull' })
  }
  else{
    res.status(400).json({ message: 'use POST with body with n8nWebhookUrl and forwardBody properties' })
  }
}
