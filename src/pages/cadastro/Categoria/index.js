import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import categoriasRepository from '../../../repositories/categorias';
import useForm from '../../../hooks/useForm';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { ButtonLinkPrimary } from '../../../components/ButtonLink/styles';
import Loading from '../../../components/Loading';

const CadastroDiv = styled.div`
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
`;

export default () => {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#eb2184',
  };

  const { values, handleChange, clearForm } = useForm(valoresIniciais);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategorias([...categorias, values]);
    clearForm();
  };

  useEffect(() => {
    categoriasRepository.getAll()
      .then((resposta) => setCategorias(resposta))
      .catch((err) => console.error(err.message));
  }, []);

  return (
    <PageDefault>
      <CadastroDiv>
        <h1>
          Cadastro de Categoria:
          {values.titulo}
        </h1>

        <form onSubmit={handleSubmit}>
          <FormField
            type="text"
            label="Título da Categoria"
            name="titulo"
            value={values.titulo}
            onChange={handleChange}
          />

          <FormField
            type="textarea"
            label="Descrição"
            name="descricao"
            value={values.descricao}
            onChange={handleChange}
          />

          <FormField
            type="color"
            label="Cor"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />

          <div>
            <ButtonLinkPrimary as="button" type="submit">Salvar</ButtonLinkPrimary>
          </div>
        </form>

        {categorias.length === 0 && <Loading />}

        {categorias.length > 0 && (
          <ul>
            {categorias.map((categoria) => <li key={categoria.titulo}>{categoria.titulo}</li>)}
          </ul>
        )}
      </CadastroDiv>
    </PageDefault>
  );
};
