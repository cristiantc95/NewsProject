import React from "react";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import { useFetch } from "../utils/hooks/useFetch";
import { getNewsCategoriesEndpoint } from "../api/endpoints";
import NewsCardList from "../components/NewsCardList";
import { getNewsList } from "../api/adaptors";
import { Link } from "react-router-dom";

function Home() {

  const technologyNewsEndpoint = getNewsCategoriesEndpoint("technology", 1, 6);
  const worldNewsEndpoint = getNewsCategoriesEndpoint("world", 1, 6);
  const musicNewsEndpoint = getNewsCategoriesEndpoint("music", 1, 6);
  const filmNewsEndpoint = getNewsCategoriesEndpoint("film", 1, 6);

  let technologyData = useFetch(technologyNewsEndpoint);
  let worldData = useFetch(worldNewsEndpoint);
  let musicData = useFetch(musicNewsEndpoint);
  let filmData = useFetch(filmNewsEndpoint);

  const adaptedTechnologyData = getNewsList(technologyData);
  const adaptedWorldData = getNewsList(worldData);
  const adaptedMusicData = getNewsList(musicData);
  const adaptedFilmData = getNewsList(filmData);

  return (
    <Layout>
      <section className="tech my-5">
        <Container>
          <h1 className="mb-5 pt-3">Tech</h1>
          <NewsCardList newsList={adaptedTechnologyData} />
          <p>
            Vezi toate știrile legate de tehnologie în secțiunea{" "}
            <Link to="/category/technology" className="text-secondary">
              Tech
            </Link>
            .
          </p>
        </Container>
      </section>
      <section className="world my-5">
        <Container>
          <h1 className="mb-5 pt-3">World News</h1>
          <NewsCardList newsList={adaptedWorldData} />
          <p>
            Vezi toate știrile legate de tehnologie în secțiunea{" "}
            <Link to="/category/world" className="text-secondary">
              World News
            </Link>
            .
          </p>
        </Container>
      </section>
      <section className="film my-5">
        <Container>
          <h1 className="mb-5 pt-3">Movie</h1>
          <NewsCardList newsList={adaptedFilmData} />
          <p>
            Vezi toate știrile legate de filme în secțiunea{" "}
            <Link to="/category/film" className="text-secondary">
              Movie
            </Link>
            .
          </p>
        </Container>
      </section>
      <section className="music my-5">
        <Container>
          <h1 className="mb-5 pt-3">Fotbal</h1>
          <NewsCardList newsList={adaptedMusicData} />
          <p>
            Vezi toate știrile legate de muzica în secțiunea{" "}
            <Link to="/category/music" className="text-secondary">
              Music
            </Link>
            .
          </p>
        </Container>
      </section>
      <section className="favorites my-5">
        <Container>
          <h1 className="mb-5 pt-3">Favorite</h1>
          <p>
            Vrei să îți salvezi știrile favorite pentru a le reciti mai încolo?
          </p>
          <p>
            În cadrul fiecărei știri găsești un buton prin care poți adăuga
            știrea la favorite.
          </p>
          <p className="pb-3">
            Vizitează secțiunea{" "}
            <Link to="/favorites" className="text-secondary">
              Favorite
            </Link>{" "}
            pentru a vedea știrile adăugate.
          </p>
        </Container>
      </section>
    </Layout>
  );
}

export default Home;
