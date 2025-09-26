"use client"
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Button from "react-bootstrap/Button"
import NavBar from "../components/navBar";

const Game = () => {

    const chooseWord = () =>{
        const words = ["lamente", 
            "surreal",
            "parede", 
            "harmonia", 
            "mascote", 
            "menina", 
            "desfrutar", 
            "caderno", 
            "caixa", 
            "skis",
            "plantas",
            "estribo",
            "abaixo",
            "manchar",
            "acumular",
            "conhaque",
            "canal",
            "bata",
            "segundo",
            "molas",
            "integral",
            "rosto",
            "voto",
            "quarto",
            "permanente",
            "vinhedo",
            "departamento",
            "cidade",
            "mapas",
            "palmeiras",
            "espada",
            ];
        const randomIndex = Math.floor(Math.random() * words.length);

        return words[randomIndex];
    }
    const [palavra, setPalavra] = useState(chooseWord());
    const [display, setDisplay] = useState(Array(palavra.length).fill("_"));
    const [received, setReceived] = useState("");
    const [tentativas, setTentativas] = useState(7);
    const [mensagem, setMensagem] = useState("");
    const [erros, setErros] = useState([])

       

    
    const updateState = (input) => {
        let result = false;
        const novoDisplay = display.map((d, i) =>{ 
            if(palavra[i] === input){
                result = true
                return input;
            }
            return d;
        });
        setDisplay(novoDisplay);
        if(!result){
            setTentativas(t => t-1);
            //adicionar ao array erro a letra que não está certa
            setErros((prev) => {
                if (!prev.includes(input)) {
                    return [...prev, input];
                }
                return prev;
            });
        }
        setReceived("");
    }

    useEffect(() => {
        if(tentativas === 0){
            setMensagem(`Perdeu! A palavra era ${palavra}`);
        }
    }, [tentativas]);

    useEffect(() => {
        if(display.join("") === palavra){
            setMensagem("Parabéns, você ganhou!");
        }
    }, [display]);

    //TODO: terminar de integrar função resetGame
    const resetGame = () => {
        const novaPalavra = chooseWord();
        setPalavra(novaPalavra);
        setDisplay(Array(novaPalavra.length).fill("_"));
        setTentativas(7);
        setMensagem("");
        setReceived("");
        setErros([]);
    }
    

    return(
        <div className={styles.main}>
            <NavBar />
            <h1> Jogo da Forca </h1>
            <h3>{mensagem}</h3>
            <p> {display.join(" ")} </p>
            <input type="text" placeholder="Digite uma letra" value={received} maxLength={1} onChange={(e) => setReceived(e.target.value)}/>
            <button onClick={() => updateState(received)} >Enviar</button>
            <p>Tentativas : {tentativas} </p>
            <p>Erros:  {erros.join(" ")}</p>
            <button onClick={() => resetGame()}>Reiniciar</button>
        </div>
    );
}
export default Game;