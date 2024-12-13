'use client';

import { useState } from "react";
import FilmeItemLista from "./FilmeItemLista";

export default function ListFilmes() {
    let [filmes, setFilmes] = useState([]);

    async function buscaFilmes(palavra) {
        let result = await fetch(`https://api.tvmaze.com/search/shows?q=` + palavra);
        let resposta = await result.json();

        setFilmes(resposta);
    }

    function onBuscarClick() {
        let palavra = document.querySelector("#txtPalavra").value;
        buscaFilmes(palavra);
    }

    function removeFilme(id){
        let novaLista = [] //lista vazia
        for (let filme of filmes) {
            if ( filme.id != id) { //se o id do filme for diferente do id que eu quero remover
                novaLista.push(filme) //adiciona o filme na nova lista
            }
        }

        setFilmes(novaLista)
    }

    return (
        <div>
            <h1 className="text-5xl font-bold text-white"> Lista de Filmes</h1>
            <br />

            <div>
                <input
                    type="text"
                    id="txtPalavra"
                    className="border-2 border-purple-600 rounded-3xl text-black"></input>
                <button
                    className="bg-purple-600 px-3 py-1.5 text-white mx-3 rounded-3xl text-xs"
                    onClick={(ev) => onBuscarClick()}>BUSCAR
                </button>
            </div>
            
            <br />
            Quantidade de filmes: {filmes.length}
            
            <ul>
                {filmes.map((cadafilme) => (
                    <FilmeItemLista filme={cadafilme} 
                    key={cadafilme["show"]["id"]}
                    funcRemoveFilme={removeFilme}/>
                ))}
            </ul>
        </div>
    );
}
