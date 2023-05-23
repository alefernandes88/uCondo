export const getLastItem = <T>(list: T[]) => {
  const lastItemIndex = list.length - 1
  return list[lastItemIndex]
}
