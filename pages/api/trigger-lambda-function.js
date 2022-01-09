// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try{
      const result = await axios.post(req.body.n8nWebhookUrl, req.body.forwardBody, {
        auth: {
          username: req.body.forwardBasicAuth.username,
          password: req.body.forwardBasicAuth.password,
        }
      });
      res.status(result.status).json({ message: result.data.message })
    }
    catch(err){
      console.log(err)
      res.status(err.response.status).json({ message: err.response.statusMessage })
    }
  }
  else{
    res.status(400).json({ message: 'use POST with body with n8nWebhookUrl and forwardBody properties' })
  }
}
