
export async function handleCommands(sock,from, text) {
  if(!text) return;

   await sock.sendMessage(from,{
      text:"Seja-vindo ,somos tal empresa",
      text:"Nossos ",
      text:"Academia",
        

   })



  const lower = text.toLowerCase().trim();  
  switch (lower) {
  case "1":
       await sock.sendMessage(from,
        {
         text:"Academia",
        })
  break;
   
  case "2":
      await sock.sendMessage(from,
        {
         text:"Personal",
        })
  break;
 
  case "3":
       await sock.sendMessage(from,
        {
         text:"Artes-Marciais",
        })
  break;  
  default:
       await sock.sendMessage(from,
        {
         text:"Opaçao invalidade , favor digite opçao valida",
        })
  break;
}











  if(lower === "ola") {
   await sock.sendMessage(from, {
  text: "Escolha uma opção:",
  footer: "Academia XPTO",
  templateButtons: [
    { index: 1, quickReplyButton: { displayText: "Sim", id: "btn1" } },
    { index: 2, quickReplyButton: { displayText: "Não", id: "btn2" } }
  ]
});

  }
}
