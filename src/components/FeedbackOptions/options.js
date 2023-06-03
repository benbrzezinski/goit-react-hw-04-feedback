import { nanoid } from 'nanoid';

const options = [
  { type: 'good', id: nanoid() },
  { type: 'neutral', id: nanoid() },
  { type: 'bad', id: nanoid() },
];

export default options;
