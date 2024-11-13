import ReactDOM from 'react-dom';
import { ModalBox } from '../ModalBox/ModalBox.tsx';
import { CheckboxGroup } from '../../chexboxes/CheckboxGroup/CheckboxGroup.tsx';
import { Dropdown } from '../../Dropdown/Dropdown.tsx';

const tasks = [
  {
    title: 'Interview 10 customers',
    isCompleted: true,
  },
  {
    title: 'Review common customer pain points and suggestions',
    isCompleted: false,
  },
  {
    title: 'Outline next steps for our roadmap',
    isCompleted: false,
  },
];

export const ViewTaskModal = () => {
  const portalRoot = document.getElementById('modal-root');
  if (!portalRoot) return;
  return ReactDOM.createPortal(
    <ModalBox
      title="Research pricing points of various competitors and trial different business models"
      dropDownMenu={() => {
        console.log('Drop down clicked!');
      }}
    >
      <div>
        We know what we're planning to build for version one. Now we need to finalise the first
        pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error laboriosam nostrum pariatur
        placeat quam quia rerum, vitae. Aliquam amet architecto at, commodi culpa facere iusto
        pariatur perspiciatis quasi, quis unde?
      </div>
      <CheckboxGroup tasks={tasks} completedSubtasksCount={2} totalSubtasksCount={3} />
      <Dropdown title="Current status" selectedOption="Todo" options={['Todo', 'Doing', 'Done']} />
    </ModalBox>,
    portalRoot
  );
};
