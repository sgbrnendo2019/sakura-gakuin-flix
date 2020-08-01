import React, { useEffect, useState } from 'react';
import categoriasRepository from '../../repositories/categorias';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import Loading from '../../components/Loading';
import ModalPlayer from '../../components/ModalPlayer';

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState('');

  const handleClickModal = (event, video) => {
    event.preventDefault();
    setShowModal(!showModal);
    setCurrentVideoId(video);
  };

  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((resposta) => setDadosIniciais(resposta))
      .catch((err) => console.error(err.message));
  }, []);

  return (
    <PageDefault>
      {dadosIniciais.length === 0 && <Loading />}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={categoria.videos[0].titulo}
                url={categoria.videos[0].url}
                videoDescription={"Sakura Gakuin (Japanese: さくら学院, lit. 'Cherry Blossom Academy') is a Japanese group formed in 2010 by the Amuse talent agency."}
              />

              <Carousel
                key={categoria.id}
                ignoreFirstVideo
                category={categoria}
                onVideoClick={handleClickModal}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
            onVideoClick={handleClickModal}
          />
        );
      })}

      <ModalPlayer
        videoId={currentVideoId}
        showModal={showModal}
        onClick={handleClickModal}
      />
    </PageDefault>
  );
}

export default Home;
