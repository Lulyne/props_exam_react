import CategoriePage from "./CategoriePage";
import { useParams } from 'react-router-dom';

const CategorieList = () => {
    const { id } = useParams();
    const categories = [
        {
            name: "sport", 
            description: "Page contenant l'actualité sur le sport", 
            image: '../assets/images/sport.webp'
        },
        {
            name: "esport", 
            description: "L'actualité de l'esport en temps réel sur cette page", 
            image: '../assets/images/esport.jpg'
        },
        {
            name: "musique", 
            description: "Toutes les meilleures musiques du moment", 
            image: '../assets/images/musique.jpg'
        },
        {
            name: "voyage", 
            description: "Les meileures destinations dans le monde", 
            image: '../assets/images/voyage.jpg'
        },
        {
            name: "art", 
            description: "Top 10 des musées à faire en France", 
            image: '../assets/images/art.jpg'
        },
    ]

    const catPreFiltered = categories.filter((cat) => categories.name === id);
    const catName = "x";
    const catDesc = "d";
    const catImg = "i";

    return (
        <>
        <h1>CATEGORIE {id}</h1>
          <CategoriePage  name={catName} desc={catDesc} img={catImg} /> 
        </>
      );
};

export default CategorieList;


