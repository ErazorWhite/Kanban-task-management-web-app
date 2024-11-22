import { ModalBox } from '../ModalBox/ModalBox.tsx';
import { TextInput } from '../../TextInput/TextInput.tsx';
import {
  ADD_TASK_TITLE,
  buttonVariantsSize,
  CREATE_TASK_BUTTON,
  EDIT_TASK,
  EDIT_TASK_BUTTON,
  PLACEHOLDER_TASK_TEXT_MULTILINE,
  PLACEHOLDER_TEXT_SUBTASK_1,
  PLACEHOLDER_TEXT_SUBTASK_2,
} from '../../../global/utilities/constants.ts';
import { DynamicInputList } from '../../DynamicInputList/DynamicInputList.tsx';
import { FC } from 'react';
import { DropdownSelect } from '../../dropdown/DropdownSelect/DropdownSelect.tsx';
import { Button } from '../../buttons/Button/Button.tsx';
import { FieldArray, Form, Formik } from 'formik';
import { TaskEditorValidationSchema } from '../../../global/utilities/validationSchemas.ts';

interface ITaskEditorModalProps {
  initialValues: ITaskEditorFormValues;
  onSubmit: (values: ITaskEditorFormValues) => void;
  isEditing?: boolean;
  columnNames: string[];
}

interface ITaskEditorFormValues {
  title: string;
  description?: string;
  subtasks: { name: string }[];
  status: string;
}

export const TaskEditorModal: FC<ITaskEditorModalProps> = ({
  initialValues,
  onSubmit,
  isEditing,
  columnNames,
}) => {
  return (
    <ModalBox title={isEditing ? EDIT_TASK : ADD_TASK_TITLE}>
      <Formik
        initialValues={initialValues}
        validationSchema={TaskEditorValidationSchema}
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
              label="Title"
              name="title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.title && errors.title ? errors.title : undefined}
            />
            <TextInput
              label="Description"
              name="description"
              value={values.description}
              isMultiline
              placeholder={PLACEHOLDER_TASK_TEXT_MULTILINE}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <FieldArray name="subtasks">
              {({ push, remove }) => (
                <DynamicInputList
                  legend="Subtasks"
                  fieldName="subtasks"
                  values={values.subtasks}
                  errors={errors.subtasks as Array<{ name?: string }>}
                  touched={touched.subtasks as Array<{ name?: boolean }>}
                  addButtonText="+ Add New Subtask"
                  onAdd={() => push({ name: '' })}
                  placeholder={[PLACEHOLDER_TEXT_SUBTASK_1, PLACEHOLDER_TEXT_SUBTASK_2]}
                  onRemove={(index) => remove(index)}
                  onChange={(index, value) => setFieldValue(`subtasks[${index}].name`, value)}
                  onBlur={(index) => setFieldTouched(`subtasks[${index}].name`, true)}
                />
              )}
            </FieldArray>
            <DropdownSelect
              title="Status"
              value={values.status}
              options={columnNames}
              onChange={(value) => {
                void setFieldValue('status', value);
              }}
              onBlur={handleBlur}
              error={touched.status && errors.status ? errors.status : undefined}
            />
            <Button variantSize={buttonVariantsSize.MODAL}>
              {isEditing ? EDIT_TASK_BUTTON : CREATE_TASK_BUTTON}
            </Button>
          </Form>
        )}
      </Formik>
    </ModalBox>
  );
};
