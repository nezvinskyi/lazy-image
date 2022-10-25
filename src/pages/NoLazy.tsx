import { Link } from 'react-router-dom';
import { generateArray } from '../utils/generate-array';

type Props = {
  items: number;
};

const NoLazy = ({ items }: Props) => {
  return (
    <div>
      <Link to={'/'}>Back</Link>
      <h1>
        <span>No Lazy Loading Images</span> 🖼️
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
          />
        ))}
      </div>
    </div>
  );
};

export default NoLazy;
