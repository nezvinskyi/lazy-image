import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <h1>
        <span>Lazy Loading Images</span> 🖼️
      </h1>
      <ul>
        <li>
          <Link to={'lazy-react'}>
            {' '}
            Lazy loading using React lazy-load-image Component{' '}
          </Link>
        </li>
        <li>
          <Link to={'lazy-native'}>
            {' '}
            Lazy loading using native loading='lazy' attribute
          </Link>
        </li>
        <li>
          <Link to={'no-lazy'}> No lazy loading</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
