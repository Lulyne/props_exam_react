import { createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import Layout from './Layout';
import CategorieList from './CategorieList';

const router = createBrowserRouter([
    {
        path: '/', 
        element: <Layout />, 
        children: [
            { index: true, element: <Home /> }, 
            { path: 'categorie/:id', element: <CategorieList /> },
        ],
    },
]);


export default router;