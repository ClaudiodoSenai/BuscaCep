import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';

const BuscaCep = () => {

    const [cep, setCep] = useState<string>("")
    const [localidade, setLocalidade] = useState<string>("")
    const [uf, setUf] = useState<string>("")

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
                    }
                ).catch(error => {console.error("Erro:", error)});
    }

    const submitForm = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "cep") {
            setCep(e.target.value);
        }
    }
    return (
        <div>
            <form onSubmit={findCep}>
                <label htmlFor="cep">CEP</label>
                <input type="text" name="cep" id="cep" onChange={submitForm} />
                <input type="submit" value="Pesquisar" />
            </form>
            <p>Cidade:{localidade} </p>
            <p>Estado:{uf} </p>
            <p>CEP: {cep}</p>
        </div>
    );
}

export default BuscaCep