import * as Yup from 'yup';

export const TaskEditorValidationSchema = Yup.object().shape({
  title: Yup.string().required('Task name is required'),
  description: Yup.string(),
  subtasks: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required('Subtask name is required'),
    })
  ),
  status: Yup.string().required('Task status is required'),
});

export const BoardEditorValidationSchema = Yup.object().shape({
  name: Yup.string().required('BoardMain name is required'),
  columns: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().required('Column name is required'),
      })
    )
    .min(1, 'At least one column is required'),
});
