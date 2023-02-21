import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
  let cardContent = [
    {
      titulo: "LA IA",
      noticia: "La IA dominará el mundo",
    },
    {
      titulo: "El Mundo",
      noticia: "El mundo es grande",
    },
    {
      titulo: "Turquía",
      noticia: "Sismo en Turquía",
    },
    {
      titulo: "David Bravo",
      noticia: "Está programando en React",
    },
  ];
  return (
    <>
      <Navbar />
      <Jumbotron />
      <div className="album py-3">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
            {cardContent.map((item, index) => {
              return (
                <Card
                  titulo={item.titulo}
                  descripcion={item.noticia}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
