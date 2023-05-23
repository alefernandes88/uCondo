import { getLastItem } from '../index'

describe('Utils -> List', () => {
  it('should get the last item from array', () => {
    const lastItem = 4;
    const arrayMock = [1, 2, 3, lastItem]
    expect(getLastItem(arrayMock)).toBe(lastItem)
  })
})
