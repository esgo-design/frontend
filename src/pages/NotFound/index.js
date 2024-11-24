import React from 'react';
import { Link } from 'react-router-dom';

const Page = () => {
    return (
        <div>
            <h1>Página não Encontrada - ERRO 404</h1>

            <Link to="/">Página Inicial</Link>
        </div>
    );
}

export default Page;