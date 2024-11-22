import { FC } from 'react';
import ReactDOM from 'react-dom';
import { CenteredMutatingDots, LoaderContainer } from './LoadingSpinner.styled';
import { Backdrop } from '../Backdrop/Backdrop.tsx';

const Loader = () => (
  <CenteredMutatingDots
    height="100"
    width="100"
    color="#635FC7"
    secondaryColor="#A8A4FF"
    radius="12.5"
    ariaLabel="mutating-dots-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
  />
);

interface ILoadingSpinnerProps {
  isLoading: boolean;
}

const LoadingSpinner: FC<ILoadingSpinnerProps> = ({ isLoading }) => {
  const portalRoot = document.getElementById('loading-root');
  if (!portalRoot) return null;

  return (
    isLoading &&
    ReactDOM.createPortal(
      <Backdrop>
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      </Backdrop>,
      portalRoot
    )
  );
};

export default LoadingSpinner;
