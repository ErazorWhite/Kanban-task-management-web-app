import { ModalBox } from '../ModalBox/ModalBox.tsx';
import { CheckboxGroup } from '../../chexboxes/CheckboxGroup/CheckboxGroup.tsx';
import { DropdownSelect } from '../../dropdown/DropdownSelect/DropdownSelect.tsx';
import { useLocation, useParams } from 'react-router-dom';
import {
  dataByTaskIdSelector,
  toggleSubtaskCompletionSelector,
} from '../../../state/selectors/selectors.ts';
import { useRecoilCallback, useRecoilValue } from 'recoil';
import ReactDOM from 'react-dom';
import { useTaskManager } from '../../../hooks/useTaskManager.ts';
import { useMemo } from 'react';

export const ViewTaskModal = () => {
  const { taskId } = useParams<{ taskId: string }>();
  const location = useLocation();
  const { task, board } = useRecoilValue(dataByTaskIdSelector(taskId || ''))!; // securely routed
  const { moveTask } = useTaskManager();
  const dropdownActionList = useMemo(
    () => [
      {
        title: 'Edit Task',
        link: `${location.pathname}/edit`,
        state: { backgroundLocation: { pathname: `/board/${board.id}` } },
      },
      {
        title: 'Delete Task',
        link: `${location.pathname}/delete`,
        state: { backgroundLocation: { pathname: `/board/${board.id}` } },
      },
    ],
    [taskId]
  );

  const handleToggle = useRecoilCallback(
    ({ set }) =>
      (subtaskId: string) => {
        set(toggleSubtaskCompletionSelector(subtaskId), undefined);
      },
    []
  );

  const handleStatusChange = (newStatus: string) => {
    if (!taskId) return;
    moveTask({ taskId: taskId, newStatus: newStatus });
  };

  const options = board.columns?.map((column) => column.name);

  const portalRoot = document.getElementById('modal-root');
  if (!portalRoot) return;
  return ReactDOM.createPortal(
    <ModalBox title={task.title} dropdownActionMenu={dropdownActionList}>
      <div>{task.description}</div>
      {task.subtasks && <CheckboxGroup tasks={task.subtasks} onChange={handleToggle} />}
      <DropdownSelect
        title="Current status"
        value={task.status}
        options={options}
        onChange={handleStatusChange}
      />
    </ModalBox>,
    portalRoot
  );
};
