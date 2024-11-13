import { ModalBox } from '../ModalBox/ModalBox.tsx';
import { FC } from 'react';
import { Button } from '../../buttons/Button/Button.tsx';
import { buttonVariantsColor, buttonVariantsSize } from '../../../global/constants.ts';
import { DestructiveModalButtonsWrapper } from './Destructive.styled.ts';

interface IDestructiveModalProps {
  title?: string;
  message: string;
}

export const DestructiveModal: FC<IDestructiveModalProps> = ({ title = 'Delete?', message }) => {
  return (
    <ModalBox title={title} isDestructive>
      {message}
      <DestructiveModalButtonsWrapper>
        <Button
          variantSize={buttonVariantsSize.MODAL}
          variantColor={buttonVariantsColor.DESTRUCTIVE}
        >
          Delete
        </Button>
        <Button variantSize={buttonVariantsSize.MODAL} variantColor={buttonVariantsColor.SECONDARY}>
          Cancel
        </Button>
      </DestructiveModalButtonsWrapper>
    </ModalBox>
  );
};
