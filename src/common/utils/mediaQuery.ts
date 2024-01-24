export const mq = (breakpoint: number, type: string) => {
  return `(${type}-width: ${breakpoint}px)`;
}