'use client'
import { useState } from "react"
    //variável não guarda valor, guarda referência
export default function Contador() { // quando alguém importar o arquivo, retorne a função Contador
    // criando um estado 
    
    // let [variável, função que muda a variável] = useState(valor inicial)
    let [numero, setNumero] = useState(0) 
    //estado é o único que segura valor 
    //usar função para manipular os estados

    function aumentar() {
        setNumero(numero + 1)
    }

    function diminuir() {
        setNumero(numero - 1)
    }

    return ( //parte visual do componente 
        <div>
            <h1 className="text-2xl font-bold">Contador</h1>
            Valor: {numero} 

            <br />

            <button 
            className="bg-blue-600 px-4 py-2 rounded-md text-white mx-3" 
            onClick={diminuir}
            >
                Diminuir
            </button>
            
            <button 
            className="bg-lime-600 px-4 py-2 rounded-md text-white" 
            onClick={aumentar}
            >
                Aumentar
            </button>
        </div>
    )
}   