// importa la funzione createApp da Vue
const { createApp } = Vue

// chiama (invoca) la funzione createApp()
createApp({ 
    data() {
        return {messaggio: "Ciao!"}
    }
}).mount("#app");