import { renderHook } from '@testing-library/react-native'
import { usePluralize } from '../index'

describe('Hooks -> usePluralize', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should show in singular', () => {
    const { result } = renderHook(() => usePluralize(1, 'Test', 's'))
    expect(result.current).toBe('Test')
  })

  it('should show in plural', () => {
    const { result } = renderHook(() => usePluralize(2, 'Test', 's'))
    expect(result.current).toBe('Tests')
  })
})
