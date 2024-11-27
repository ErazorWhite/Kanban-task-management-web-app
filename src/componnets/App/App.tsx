import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout.tsx';
import { BoardMain } from '../board/BoardMain/BoardMain.tsx';
import { useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import { boardsState } from '../../state/atoms/boardsState.ts';
import { IData } from '../../global/types/types.ts';
import rawData from '../../global/data/data.json';
import NotFoundPage from '../pages/NotFoundPage.tsx';
import { NoBoardsPage } from '../pages/NoBoardsPage/NoBoardsPage.tsx';
import { ViewTaskModal } from '../modals/ViewTaskModal/ViewTaskModal.tsx';
import { TaskProtectedRoute } from '../protectedRoutes/TaskProtectedRoute/TaskProtectedRoute.tsx';
import { BoardProtectedRoute } from '../protectedRoutes/BoardProtectedRoute/BoardProtectedRoute.tsx';
import { CreateTask } from '../actionHandlers/task/CreateTask/CreateTask.tsx';
import { EditTask } from '../actionHandlers/task/EditTask/EditTask.tsx';
import { DeleteTask } from '../actionHandlers/task/DeleteTask/DeleteTask.tsx';
import { CreateBoard } from '../actionHandlers/board/CreateBoard/CreateBoard.tsx';
import { EditBoard } from '../actionHandlers/board/EditBoard/EditBoard.tsx';
import { DeleteBoard } from '../actionHandlers/board/DeleteBoard/DeleteBoard.tsx';
import { useTheme } from '../../hooks/useTheme.ts';

export const App = () => {
  const data = rawData as IData;
  const setData = useSetRecoilState(boardsState);
  const [_, __] = useTheme();

  useEffect(() => {
    setData(data);
  }, [setData]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<NoBoardsPage />} />
        <Route path="create-board" element={<CreateBoard />} />

        <Route element={<BoardProtectedRoute />}>
          <Route path="board/:boardId" element={<BoardMain />}>
            <Route path="edit" element={<EditBoard />} />
            <Route path="delete" element={<DeleteBoard />} />
            <Route path="create-task" element={<CreateTask />} />

            <Route element={<TaskProtectedRoute />}>
              <Route path=":taskId" element={<ViewTaskModal />} />
              <Route path=":taskId/edit" element={<EditTask />} />
              <Route path=":taskId/delete" element={<DeleteTask />} />
            </Route>
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
