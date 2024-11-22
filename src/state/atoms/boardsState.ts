import { atom } from 'recoil';
import { BOARDS_STATE } from '../../global/utilities/constants.ts';
import { IData } from '../../global/types/types.ts';

export const boardsState = atom<IData>({
  key: BOARDS_STATE,
  default: {
    boards: [],
  },
});
