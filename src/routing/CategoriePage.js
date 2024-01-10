const CategoriePage = ({name, desc, img}) => {
    return <>
        <h1>{name}</h1>
        <p>{desc}</p>
        <img source={img} />
        <p>affichage categorie page...</p>
    </>
}

export default CategoriePage;