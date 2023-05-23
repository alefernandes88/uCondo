import { fetchAllAccounts } from '../account'

jest.mock('@react-native-async-storage/async-storage', () =>( {
  __esModule: true,
  default: {
    setItem: jest.fn().mockResolvedValue(true),
    getItem: jest.fn().mockResolvedValue('[{"code":"2.1"},{"code":"1"},{"code":"2.2.1"}, {"code":"2"},{"code":"2.1.9"}]')
  }
}))

describe('Utils -> Storage', () => {
  const mockAccounts = [
    {
      code: "1"
    },
    {
      code: "2"
    },
    {
      code: "2.1"
    },
    {
      code: "2.1.9"
    },
    {
      code: "2.2.1"
    },
  ]
  it('it should get all accounts', async () => {
    expect(await fetchAllAccounts()).toEqual(mockAccounts)
  })
})
