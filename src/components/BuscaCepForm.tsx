import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';

import styles from "../App.module.css"
import Header from './Header';
import Footer from './Footer';
const BuscaCep = () => {

    const [cep, setCep] = useState<string>("")
    const [localidade, setLocalidade] = useState<string>("")
    const [uf, setUf] = useState<string>("")
    const [erro, setErro] = useState<string>("")

    const findCep = (e: FormEvent) => {
        e.preventDefault();

        fetch('https://viacep.com.br/ws/' + cep + '/json/',
            {
                method: 'GET'
            }).then(response => response.json())
            .then(
                data => {
                    setLocalidade(data.localidade);
                    setCep(data.cep);
                    setUf(data.uf);
                    setErro("");
                }
            ).catch(error => {
                setErro("Pesquisa Inválida")
            });
    }

    const submitForm = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "cep") {
            setCep(e.target.value);
        }
    }
    return (
        <div>
            <Header />
            <main className={styles.main}>
                <form onSubmit={findCep}>
                    <label htmlFor="cep">CEP</label>
                    <input type="text" name="cep" id="cep" onChange={submitForm} />
                    <input type="submit" value="Pesquisar" />
                </form>
                <p>Cidade:{localidade} </p>
                <p>Estado:{uf} </p>
                <p>CEP: {cep}</p>
                <p className={styles.error}>{erro}</p>
            </main>
            <Footer />
        </div>
    );
}

export default BuscaCep