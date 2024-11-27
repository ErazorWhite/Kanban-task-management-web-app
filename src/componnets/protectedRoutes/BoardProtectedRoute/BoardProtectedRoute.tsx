import { Link, Outlet, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import ReactDOM from 'react-dom';
import { ModalBox } from '../../modals/ModalBox/ModalBox.tsx';
import { FC } from 'react';
import { isBoardExistsSelector } from '../../../state/selectors/selectors.ts';

export const BoardProtectedRoute: FC = () => {
  const { boardId } = useParams<{ boardId: string }>();
  const boardExists = useRecoilValue(isBoardExistsSelector(boardId || ''));

  if (!boardExists) {
    const portalRoot = document.getElementById('modal-root');
    if (!portalRoot) return;
    return ReactDOM.createPortal(
      <ModalBox title={`Board with id: "${boardId}" can't be found`}>
        <div>
          Back to <Link to={'/'}>home</Link>
        </div>
      </ModalBox>,
      portalRoot
    );
  }

  return <Outlet />;
};
