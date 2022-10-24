import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const generateArray = (items: number) => [...Array.from(Array(items).keys())];

import './App.css';

function App() {
  return (
    <div>
      <h1>
        <span>Lazy Loading Images</span> 🖼️
      </h1>

      <div className="container-images">
        {generateArray(15).map(image => (
          <LazyLoadImage
            key={image}
            src={`https://picsum.photos/700/500?random=${image}`}
            alt={`Image Alt-${image}`}
            className="img-lazy"
            width={700}
            height={500}
            placeholderSrc={''}
            effect="blur" // opacity | black-and-white
          />
        ))}
      </div>
    </div>
  );
}

export default App;
