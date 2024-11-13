import { ModalBox } from '../ModalBox/ModalBox.tsx';
import {
  ADD_BOARD_TITLE,
  buttonVariantsSize,
  CREATE_BOARD_BUTTON,
  EDIT_BOARD,
  EDIT_BOARD_BUTTON,
  PLACEHOLDER_COLUMN_TEXT,
} from '../../../global/constants.ts';
import { FC } from 'react';
import { TextInput } from '../../TextInput/TextInput.tsx';
import { DynamicInputList } from '../../DynamicInputList/DynamicInputList.tsx';
import { Button } from '../../buttons/Button/Button.tsx';

interface IBoardEditorModalProps {
  isEditing?: boolean;
}

export const BoardEditorModal: FC<IBoardEditorModalProps> = ({ isEditing = false }) => {
  return (
    <ModalBox title={isEditing ? EDIT_BOARD : ADD_BOARD_TITLE}>
      <TextInput label="Board name" placeholder={PLACEHOLDER_COLUMN_TEXT} />
      <DynamicInputList
        legend="Board columns"
        placeholder={['Todo', 'Doing']}
        addButtonText="+ Add New Column"
        onChange={() => {}}
      />
      <Button variantSize={buttonVariantsSize.MODAL}>
        {isEditing ? EDIT_BOARD_BUTTON : CREATE_BOARD_BUTTON}
      </Button>
    </ModalBox>
  );
};
