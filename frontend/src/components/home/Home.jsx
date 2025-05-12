import React from 'react';
import Main from '../template/Main';

export default props => 
    <Main icon="home" title="Início"
        subtitle="Sub Título" >
            <div className='display-4'>Seja Bem Vindo!</div>
            <hr />
            <p className='mb-0'>Sistema para exemplificar a construção de um cadastro desenvolvido em React!</p>
    </Main>