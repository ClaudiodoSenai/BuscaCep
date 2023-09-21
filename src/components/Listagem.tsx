import React, {
    Component, useState,
    ChangeEvent, FormEvent,
    useEffect
} from 'react';


import styles from "../App.module.css"
import { CadastroInterface } from '../interfaces/CadastroInterfaces';
import axios from 'axios';

const Listagem = () => {

    const [usuarios, setUsuarios] = useState<CadastroInterface[]>([])
    const [erro, setError] = useState("");
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://10.137.9.132:8000/api/find');
                setUsuarios(response.data.data);
            } catch (error) {
                setError("Ocorreu um erro");
                console.log(error);
            }

        }

        fetchData();
    }, []);

    return (
        <div>
            <main className={styles.main}>
                <div className='container'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Listagem de Usuarios</h5>
                            <table className='table table-hover'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nome</th>
                                        <th>CPF</th>
                                        <th>E-mail</th>
                                        <th>Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {usuarios.map(usuario => (
                                        <tr key={usuario.id}>
                                            <td>{usuario.id}</td>
                                            <td>{usuario.nome}</td>
                                            <td>{usuario.cpf}</td>
                                            <td>{usuario.email}</td>
                                            <td>
                                                <a href="#" className='btn btn-primary btn-sm'>Editar</a>
                                                <a href="#" className='btn btn-danger btn-sm '>Excluir</a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Listagem