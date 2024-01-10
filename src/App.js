import Home from './routing/Home';
import router from './routing/routes';
import { RouterProvider } from 'react-router-dom';

const App = () => {
  return (
    <>
      <RouterProvider router={router}>
        <Home />
      </RouterProvider>
    </>
  );
};

export default App;