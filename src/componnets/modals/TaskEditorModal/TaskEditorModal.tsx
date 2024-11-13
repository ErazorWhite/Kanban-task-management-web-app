import { ModalBox } from '../ModalBox/ModalBox.tsx';
import { TextInput } from '../../TextInput/TextInput.tsx';
import {
  ADD_TASK_TITLE,
  buttonVariantsSize,
  EDIT_TASK,
  PLACEHOLDER_TASK_TEXT_MULTILINE,
  PLACEHOLDER_TEXT_SUBTASK_1,
  PLACEHOLDER_TEXT_SUBTASK_2,
} from '../../../global/constants.ts';
import { DynamicInputList } from '../../DynamicInputList/DynamicInputList.tsx';
import { FC } from 'react';
import { Dropdown } from '../../Dropdown/Dropdown.tsx';
import { Button } from '../../buttons/Button/Button.tsx';

interface ITaskEditorModalProps {
  isEditing?: boolean;
}

export const TaskEditorModal: FC<ITaskEditorModalProps> = ({ isEditing = false }) => {
  return (
    <ModalBox title={isEditing ? EDIT_TASK : ADD_TASK_TITLE}>
      <TextInput label="Title" />
      <TextInput label="Description" isMultiline placeholder={PLACEHOLDER_TASK_TEXT_MULTILINE} />
      <DynamicInputList
        legend="Subtasks"
        placeholder={[PLACEHOLDER_TEXT_SUBTASK_1, PLACEHOLDER_TEXT_SUBTASK_2]}
        addButtonText="+ Add New Subtask"
        onChange={() => {}}
      />
      <Dropdown title="Status" selectedOption="Todo" options={['Todo', 'Doing', 'Done']} />
      <Button variantSize={buttonVariantsSize.MODAL}>Create Task</Button>
    </ModalBox>
  );
};
