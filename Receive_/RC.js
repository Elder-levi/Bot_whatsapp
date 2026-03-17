const { useMultiFileAuthState } = require("@whiskeysockets/baileys")
const makeWASockect  = require("@whiskeysockets/baileys").default

  const { state, saveCreds } = await useMultiFileAuthState("auth");

  const sock = makeWASockect({
    auth: state
  });

  sock.ev.on("messages.upsert" , async ({messages})=>{
    
    const msg = messages[0]

    if(!msg.messages)return;

    const texto = msg.messages.conversation;


    console.log("Mensagem :" ,texto)

  })
