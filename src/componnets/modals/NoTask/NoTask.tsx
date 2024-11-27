import { Link } from 'react-router-dom';

export const NoTask = () => {
  return (
    <div>
      There is no such task, go back to <Link to={'/'}>home</Link>
    </div>
  );
};
