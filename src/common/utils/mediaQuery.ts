export const mq = (breakpoint: number, type:string='min') => {
  return `(${type}-width: ${breakpoint}px)`;
}