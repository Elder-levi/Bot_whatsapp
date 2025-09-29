
export async function handleCommands(sock,from, text) {
  if(!text) return;
  const lower = text.toLowerCase(); 
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
