import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { ButtonLinkPrimary } from '../../../components/ButtonLink/styles';
import categoriasRepository from '../../../repositories/categorias';
import useForm from '../../../hooks/useForm';

const CadastroDiv = styled.div`
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
`;

export default () => {
  const [categorias, setCategorias] = useState([]);
  const suggestions = categorias.map((categoria) => categoria.titulo);

  useEffect(() => {
    categoriasRepository.getAll()
      .then((resposta) => setCategorias(resposta))
      .catch((err) => console.error(err.message));
  }, []);

  const valoresIniciais = {
    titulo: '',
    url: '',
    categoria: '',
  };

  const { values, handleChange, clearForm } = useForm(valoresIniciais);

  const handleSubmit = (event) => {
    event.preventDefault();

    const videoCategory = categorias.find((categoria) => categoria.titulo === values.categoria);
    if (!videoCategory) {
      return alert('Essa categoria não existe');
    }

    const savedVideo = {
      titulo: values.titulo,
      url: values.url,
      categoriaId: videoCategory.id,
    };

    alert('Parabéns! Vídeo cadastrado com sucesso: ' + JSON.stringify(savedVideo) + '\n(Esse Salvar é fake porque não quero estragar o site)');

    clearForm();
  };

  return (
    <PageDefault>
      <CadastroDiv>
        <h1>Cadastro de Vídeo</h1>

        <form onSubmit={handleSubmit}>
          <FormField
            label="Título"
            type="text"
            name="titulo"
            value={values.titulo}
            onChange={handleChange}
          />

          <FormField
            label="URL"
            type="text"
            name="url"
            value={values.url}
            onChange={handleChange}
          />

          <FormField
            label="Categoria"
            type="text"
            name="categoria"
            value={values.categoria}
            onChange={handleChange}
            suggestions={suggestions}
          />

          <div>
            <ButtonLinkPrimary as="button" type="submit">Salvar</ButtonLinkPrimary>
          </div>
          <div>
            <ButtonLinkPrimary as={Link} to="/cadastro/categoria" style={{ margin: '20px 0' }}>Cadastrar categoria</ButtonLinkPrimary>
          </div>
        </form>
      </CadastroDiv>
    </PageDefault>
  );
};
