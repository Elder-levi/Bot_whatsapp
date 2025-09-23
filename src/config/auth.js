import { useMultiFileAuthState } from "baileys";

export async function authConfig() {
    // armazena dados cadastrados do usuario
    return await useMultiFileAuthState("auth_info")
}