# Kanban Task Management Web App Solution

This is a solution to the Kanban Task Management Web App challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents
- [Overview](#overview)
    - [Features](#features)
    - [Demo](#demo)
    - [Screenshots](#screenshots)
    - [Technologies Used](#technologies-used)
    - [What I Learned](#what-i-learned)
    - [Useful resources](#useful-resources)
    - [Installation](#installation)
- [Acknowledgments](#acknowledgments)
- [Designed By](#designed-by)
- [Author](#author)

## Overview
### Features
- Responsive Layout: Optimized for mobile, tablet, and desktop devices.
- Interactive Elements: Hover and focus states for enhanced user interaction.
- Board Management: Create, edit, and delete boards with ease.
- Task Management: Add, update, and delete tasks within boards.
- Subtask Handling: Mark subtasks as complete and move tasks between columns.
- Drag and Drop: Seamlessly drag and drop tasks to change status and reorder.
- Theme Toggle: Switch between light and dark modes.
- Persistent Data: Data is saved in localStorage, preserving state between sessions.
- Form Validation: Real-time validation with user-friendly error messages.

## Demo
[Live site available here](https://erazorwhite.github.io/kanban-task-management-web-app/board/Platform%20Launch_board-1)

## Screenshots

Desktop View:

![desktop view light theme](/docs/img/desktop_main_light.png)

Desktop task editor dark theme:
![desktop edit task dark theme](/docs/img/desktop_edit-task_dark.png)

Mobile View:

![mobile view light theme](/docs/img/mobile_main_light.png)

Mobile sidebar dark theme:

![mobile sidebar dark theme](/docs/img/mobile_sidebar_dark.png)

Drag and Drop Feature:

![Drag and drop](/docs/img/desktop_dnd.gif)

## Technologies Used
- **React** - JavaScript library for building user interfaces.
- **TypeScript** - Typed superset of JavaScript.
- **React Router** - Declarative routing for React applications.
- **Recoil** - State management library for React.
- **Formik** - Library for building forms in React.
- **Yup** - JavaScript schema builder for value parsing and validation.
- **React DnD** - Drag and drop for React.
- **Styled Components** - Visual primitives for the component age.
- **Vite** - Next Generation Frontend Tooling.
- **pnpm** - Fast, disk-space-efficient package manager for JavaScript.

## What I Learned

Working on this project allowed me to enhance my skills in several areas:
- **State Management with Recoil**: Implemented global state management, making it easier to manage and share state across components.
- **Drag and Drop Functionality**: Learned to implement complex drag-and-drop interactions using react-dnd, improving user experience in task management. 
- **Form Handling with Formik and Yup**: Streamlined form creation and validation, providing real-time feedback and ensuring data integrity.
- **React Router Mastery**: Gained a deep understanding of React Router, including nested routes, dynamic route parameters, and managing protected routes for a seamless user experience.
- **Responsive UI Design**: Created a responsive layout accommodating different devices, ensuring usability across desktops, tablets, and mobile screens.

Here's an example of implementing drag-and-drop with `react-dnd`:

`BoardTask` as drag-and-drop source: 
```js
export const BoardTask: FC<IBoardTaskProps> = ({ task }) => {
// ... 
  const [{ isDragging }, drag] = useDrag(
          () => ({
            type: 'TASK',
            item: { id: task.id, status: task.status },
            collect: (monitor) => ({
              isDragging: monitor.isDragging(),
            }),
          }),
          [task]
  );

  return (
          <BoardTaskContainer
            ref={drag}
            isDragging={isDragging}
            to={`${task.id}`}
            state={{
              backgroundLocation: {
                pathname: location.pathname.replace(BASENAME, '/'),
              },
            }}
          >
            // ...
          </BoardTaskContainer>
          );
};
```
And `BoardColumn` as drag-and-drop target:
```js
export const BoardColumn: FC<IColumnProps> = ({ title, tasks }) => {
  const { moveTask } = useTaskManager();

  const [{ isOver }, drop] = useDrop(
          () => ({
            accept: 'TASK',
            drop: (item: { id: string; status: string }) => {
              if (item.status !== title) {
                moveTask({ taskId: item.id, newStatus: title });
              }
            },
            collect: (monitor) => ({
              isOver: monitor.isOver(),
            }),
          }),
          [title]
  );

  return (
          <StyledBoardContainer ref={drop} isOver={isOver}>
            <BoardColumnLabel count={tasks?.length}>{title}</BoardColumnLabel>
            <BoardColumContent>
              {tasks?.length > 0 && tasks.map((task) => <BoardTask key={task.id} task={task} />)}
            </BoardColumContent>
          </StyledBoardContainer>
        );
};
```

## Useful Resources

- [Recoil Documentation](https://recoiljs.org/) - Helped me understand and implement state management.
- [React DnD Documentation](https://react-dnd.github.io/react-dnd/examples) - Provided practical examples for drag-and-drop implementation.
- [Formik and Yup Guide](https://formik.org/docs/guides/validation) - Assisted in setting up form validation.

## Installation

To run this project locally:

1. Clone the repository:
```bash
git clone https://github.com/your-username/kanban-task-management-app.git
```
2. Navigate to the project directory:
```bash
cd kanban-task-management-app
```
3. Install dependencies:
```bash
pnpm install
```
_**Note**: This project uses pnpm as the package manager. If you don't have it installed, you can install it globally using:_
```bash
npm install -g pnpm
```
4. Start the development server:
```bash
pnpm run dev
```
5. Open the application:
```bash
pnpm run dev
```

## Acknowledgments

Special thanks to [Alex Fitiskin](https://github.com/afitiskin) for mentorship and guidance throughout this project.

## Designed By

This project was designed by [Frontend Mentor](https://www.frontendmentor.io/challenges/kanban-task-management-web-app-wgQLt-HlbB).

## Author

[Oleksii Husak](https://www.linkedin.com/in/oleksii-husak/)