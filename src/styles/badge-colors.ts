export enum EColors {
  red = '#F9C6C6',
  green = '#C3FFE5',
  yellow = '#FFE7CC',
  purple = '#E8D1FF',
  cyan = '#BEEBFF',
  blue = '#8DADFF',
  grey = '#D6D6D6',
}

export function getRandomColor(): EColors {
  const colors = Object.values(EColors);
  const randomIndex = Math.floor(Math.random() * colors.length);
  console.log(colors[randomIndex])
  return colors[randomIndex] as EColors;
}