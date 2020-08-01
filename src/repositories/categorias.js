import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;
const URL_CATEGORIES_WITH_VIDEOS = `${URL_CATEGORIES}?_embed=videos`;

function getAll() {
  return fetch(URL_CATEGORIES)
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }
      throw new Error('Não foi possível pegar os dados');
    });
}

function getAllWithVideos() {
  return fetch(URL_CATEGORIES_WITH_VIDEOS)
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }
      throw new Error('Não foi possível pegar os dados');
    });
}

export default {
  getAll,
  getAllWithVideos,
};
