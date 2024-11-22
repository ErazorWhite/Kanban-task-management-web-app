import { ModalBox } from '../ModalBox/ModalBox.tsx';
import { FC } from 'react';
import { Button } from '../../buttons/Button/Button.tsx';
import { buttonVariantsColor, buttonVariantsSize } from '../../../global/utilities/constants.ts';
import { DestructiveModalButtonsWrapper } from './Destructive.styled.ts';
import { Form, Formik } from 'formik';

interface IDestructiveModalProps {
  initialValues: IDestructiveModalFormValues;
  onSubmit: () => void;
  onCancel: () => void;
}

interface IDestructiveModalFormValues {
  title: string;
  message: string;
}

export const DestructiveModal: FC<IDestructiveModalProps> = ({
  initialValues,
  onSubmit,
  onCancel,
}) => {
  return (
    <ModalBox title={initialValues.title} isDestructive>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          {initialValues.message}
          <DestructiveModalButtonsWrapper>
            <Button
              variantSize={buttonVariantsSize.MODAL}
              variantColor={buttonVariantsColor.DESTRUCTIVE}
              type="submit"
            >
              Delete
            </Button>
            <Button
              variantSize={buttonVariantsSize.MODAL}
              variantColor={buttonVariantsColor.SECONDARY}
              type="button"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </DestructiveModalButtonsWrapper>
        </Form>
      </Formik>
    </ModalBox>
  );
};
