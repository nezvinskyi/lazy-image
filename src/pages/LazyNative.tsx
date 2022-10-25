import { Link } from 'react-router-dom';
import { generateArray } from '../utils/generate-array';

type Props = {
  items: number;
};

const LazyNative = ({ items }: Props) => {
  return (
    <div>
      <Link to={'/'}>Back</Link>
      <h1>
        <span>Lazy Loading Images using loading="lazy" attribute</span> 🖼️
      </h1>

      <div className="container-images">
        {generateArray(items).map(image => (
          <img
            key={image}
            src={`https://picsum.photos/700/500?random=${image}`}
            alt={`Image Alt-${image}`}
            className="img-lazy"
            width={700}
            height={500}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

export default LazyNative;
