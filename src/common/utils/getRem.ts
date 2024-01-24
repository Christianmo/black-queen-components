export const getRem = (pixels: string) => {
  const size = Number(pixels.split("px").shift());
  const remSize = size / 16;
  return `${remSize}rem`;
}