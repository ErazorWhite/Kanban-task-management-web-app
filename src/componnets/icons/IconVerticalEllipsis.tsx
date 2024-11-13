import { FC } from 'react';
import { sizes } from '../../global/constants.ts';

interface IIconVerticalEllipsisProps {
  size?: sizes;
}

const ellipsisSizes = {
  small: {
    width: 3.69,
    height: 16,
    circleRadius: 1.845,
    circlePositions: [2, 8, 14],
  },
  medium: {
    width: 4.62,
    height: 20,
    circleRadius: 2.31,
    circlePositions: [2.5, 10, 17.5],
  },
} as const;

export const IconVerticalEllipsis: FC<IIconVerticalEllipsisProps> = ({ size = sizes.SMALL }) => {
  const { width, height, circleRadius, circlePositions } = ellipsisSizes[size];

  const cx = width / 2;

  return (
    <svg
      width={`${width}px`}
      height={`${height}px`}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="#828FA3">
        {circlePositions.map((cy) => (
          <circle key={cy} cx={cx} cy={cy} r={circleRadius} />
        ))}
      </g>
    </svg>
  );
};
