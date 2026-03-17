const express = require("express")
const { GoogleGenerativeAI } = require("@google/generative-ai");

require("dotenv").config();
const {testarGemini, main} = require ("./Confiig/Coneccao")


main();
const app = express()
app.use(express.urlencoded({ extended: false}))

const GenAI = new GoogleGenerativeAI(process.env.CHAVE_API)


app.post("/Zapzap" , async (req , res) =>{

    try {
      
         const mensagemUser = req.body.Body

         const model = GenAI.getGenerativeModel({model: "gemini-3-flash-preview"})
 
         const result = await model.generateContent(mensagemUser)
        
         console.log("Resposta:",result);

    } catch (error) {
        
     console.log("Error ao Envia Mensagem",error)
    }

})


app.listen(3000, ()=>{

    console.log("Bot ligado Na Porta 3000 https://localhost:3000 ")
})

