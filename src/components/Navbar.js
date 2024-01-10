import { Link } from "react-router-dom";

const NavBar = () => {
    return (
      <nav className='navbar is-warning' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <a className='navbar-item' href='https://bulma.io'>
            <img
              src='https://bulma.io/images/bulma-logo.png'
              width='112'
              height='28'
            />
          </a>

          <a
            role='button'
            className='navbar-burger'
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarBasicExample'
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>
  
        <div id='navbarBasicExample' className='navbar-menu'>
          <div className='navbar-start'>
            <Link to="/" className='navbar-item'>Accueil</Link>
            <Link to="categorie/sport" className='navbar-item'>Sport</Link>
            <Link to="categorie/esport" className='navbar-item'>E-Sport</Link>
            <Link to="categorie/musique" className='navbar-item'>Musique</Link>
            <Link to="categorie/voyage" className='navbar-item'>Voyage</Link>
            <Link to="categorie/art" className='navbar-item'>Art</Link>
          </div>
        </div>
      </nav>
    );
  };
  
  export default NavBar;