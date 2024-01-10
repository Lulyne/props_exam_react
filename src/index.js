import { createRoot } from 'react-dom/client';
import App from './App';
import 'bulma/css/bulma.min.css';

const root = createRoot(document.querySelector('#root'));

root.render(<App />);