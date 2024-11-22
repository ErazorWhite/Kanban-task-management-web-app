import { ModalBox } from '../ModalBox/ModalBox.tsx';
import {
  ADD_BOARD_TITLE,
  buttonVariantsSize,
  CREATE_BOARD_BUTTON,
  EDIT_BOARD,
  EDIT_BOARD_BUTTON,
  PLACEHOLDER_COLUMN_TEXT,
} from '../../../global/utilities/constants.ts';
import { FC } from 'react';
import { TextInput } from '../../TextInput/TextInput.tsx';
import { DynamicInputList } from '../../DynamicInputList/DynamicInputList.tsx';
import { Button } from '../../buttons/Button/Button.tsx';
import { FieldArray, Form, Formik } from 'formik';
import { BoardEditorValidationSchema } from '../../../global/utilities/validationSchemas.ts';

interface IBoardEditorFormValues {
  name: string;
  columns: { name: string }[];
}

interface IBoardEditorModalProps {
  initialValues: IBoardEditorFormValues;
  onSubmit: (values: IBoardEditorFormValues) => void;
  isEditing: boolean;
}

export const BoardEditorModal: FC<IBoardEditorModalProps> = ({
  initialValues,
  onSubmit,
  isEditing,
}) => {
  return (
    <ModalBox title={isEditing ? EDIT_BOARD : ADD_BOARD_TITLE}>
      <Formik
        initialValues={initialValues}
        validationSchema={BoardEditorValidationSchema}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          setFieldValue,
          setFieldTouched,
        }) => (
          <Form>
            <TextInput
              label="BoardMain name"
              name="name"
              placeholder={PLACEHOLDER_COLUMN_TEXT}
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && errors.name ? errors.name : undefined}
            />

            <FieldArray name="columns">
              {({ push, remove }) => (
                <DynamicInputList
                  legend="BoardMain columns"
                  fieldName="columns"
                  values={values.columns}
                  errors={errors.columns as Array<{ name?: string }>}
                  touched={touched.columns as Array<{ name?: boolean }>}
                  addButtonText="+ Add New Column"
                  onAdd={() => push({ name: '' })}
                  onRemove={(index) => remove(index)}
                  onChange={(index, value) => setFieldValue(`columns[${index}].name`, value)}
                  onBlur={(index) => setFieldTouched(`columns[${index}].name`, true)}
                />
              )}
            </FieldArray>

            <Button type="submit" variantSize={buttonVariantsSize.MODAL}>
              {isEditing ? EDIT_BOARD_BUTTON : CREATE_BOARD_BUTTON}
            </Button>
          </Form>
        )}
      </Formik>
    </ModalBox>
  );
};
