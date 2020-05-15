export const calcVolumeCylinder = (radius, height) =>
  Math.PI * (radius * radius) * height;

export const calcVolumeCuboid = (length, width, height) =>
  length * width * height;

export const calcVolumeSphere = (radius) =>
  (4 / 3) * Math.PI * (radius * radius * radius);
