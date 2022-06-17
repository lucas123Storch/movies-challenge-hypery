export type MovieItem = {
  id: string;
  text: string;
  done: boolean;
  color: string;
};

export enum View {
  all,
  active,
  completed,
}

export enum Colors {
  red,
  pink,
  purple,
  indigo,
  blue,
  cyan,
  amber,
  orange,
}
