import { act, renderHook, waitFor } from '@testing-library/react-native'
import { NavigationContainer } from '@react-navigation/native'
import { useAccountChildren, useAccountParents, useAllAccounts } from '../account'
import { fetchChildren } from '../../../utils/storage/account'

jest.mock('../../../utils/storage/account', () => ({
  fetchAllAccounts: jest.fn().mockResolvedValueOnce([{ name: 'test' }, { name: 'test 2' }]).mockResolvedValue([{ name: 'test' }, { name: 'test 2' }, { name: 'test 3' }]),
  fetchChildren: jest.fn().mockResolvedValue([{ name: 'test' }, { name: 'test 2' }]),
  fetchParents: jest.fn().mockResolvedValue([{ name: 'test' }, { name: 'test 2' }])
}))

const wrapper = ({ children }: { children: JSX.Element }) => (
  <NavigationContainer>{children}</NavigationContainer>
)

describe('Hooks -> Accounts', () => {
  describe('useAllAccounts', () => {
    beforeEach(() => {
      jest.clearAllMocks()
    })

    it('should fetch all users when refetch is fired', async () => {
      const { result } = renderHook(() => useAllAccounts(), { wrapper })
      expect(result.current.accounts).toEqual([])
      await waitFor(() => {
        expect(result.current.accounts).toEqual([{ name: 'test' }, { name: 'test 2' }])
      })

      act(() => {
        result.current.refetch()
      })

      await waitFor(() => {
        expect(result.current.accounts).toEqual([{ name: 'test' }, { name: 'test 2' }, { name: 'test 3' }])
      })
    })

    it('should fetch all users on first render', async () => {
      const { result } = renderHook(() => useAllAccounts(), { wrapper })
      expect(result.current.accounts).toEqual([])
      await waitFor(() => {
        expect(result.current.accounts).toEqual([{ name: 'test' }, { name: 'test 2' }, { name: 'test 3' }])
      })
    })
  })

  describe('useAccountParents', () => {
    it('should fetch all users on first render', async () => {
      const { result } = renderHook(() => useAccountParents())
      expect(result.current).toEqual([])
      await waitFor(() => {
        expect(result.current).toEqual([{ name: 'test' }, { name: 'test 2' }])
      })
    })
  })

  describe('useAccountChildren', () => {
    it('should fetch all users on first render', async () => {
      const parentAccountMock = '1.1'
      const { result } = renderHook(() => useAccountChildren(parentAccountMock))
      expect(result.current).toEqual([])
      await waitFor(() => {
        expect(fetchChildren).toBeCalledWith(parentAccountMock)
        expect(result.current).toEqual([{ name: 'test' }, { name: 'test 2' }])
      })
    })
  })
})
