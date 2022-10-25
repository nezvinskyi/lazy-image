import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { generateArray } from '../utils/generate-array';

type Props = {
  items: number;
};

const LazyReact = ({ items }: Props) => {
  // const items: number = props.number;
  return (
    <div>
      <Link to={'/'}>Back</Link>
      <h1>
        <span>Lazy Loading Images using react-lazy-load-image-component</span>
      </h1>

      <div className="container-images">
        {generateArray(items).map(image => (
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
};

export default LazyReact;
