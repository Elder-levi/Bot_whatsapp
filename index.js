import express from "express"
import { GoogleGenerativeAI } from "@google/generative-ai";
import twilio, { twiml } from "twilio";
import env from "dotenv"
 

env.config()

const app = express()
app.use(express.urlencoded({ extended: false}))

const gentIA = new GoogleGenerativeAI(process.env.CHAVE_API)

const MessagingResponse = twilio.twiml.MessagingResponse;

app.post("/Zapzap" , async (req , res) =>{

    try {
      
         const mensagemUser = res.body.body

         const model = GenAI.getGenerativeModel({model: "gemini-1.5-flash"})
 
         const result = await model.generateContent(mensagemUser)
         const RespAI = (await result.response).text();
        
     const twilio = new MessagingResponse();

     twilio.message(RespAI)
    
     res.type("text/xml").send(twiml.toString());
 

    } catch (error) {
        
     console.log("Error ao Envia Mensagem",error)
    }

})


app.listen(3000, ()=>{

    console.log("Bot ligado Na Porta 3000 https://localhost:3000 ")
})

