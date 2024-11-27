import { Link, Outlet, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { dataByTaskIdSelector } from '../../../state/selectors/selectors.ts';
import { FC } from 'react';
import ReactDOM from 'react-dom';
import { ModalBox } from '../../modals/ModalBox/ModalBox.tsx';

export const TaskProtectedRoute: FC = () => {
  const { taskId } = useParams<{ taskId: string }>();
  const taskData = useRecoilValue(dataByTaskIdSelector(taskId || ''));

  if (!taskData) {
    const portalRoot = document.getElementById('modal-root');
    if (!portalRoot) return;
    return ReactDOM.createPortal(
      <ModalBox title={`Task with id: "${taskId}" can't be found`}>
        <div>
          Back to <Link to={'/'}>home</Link>
        </div>
      </ModalBox>,
      portalRoot
    );
  }

  return <Outlet />;
};
