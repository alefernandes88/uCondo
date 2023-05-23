import { getLastItem } from '../../utils/list'
import { MAX_CODE_NUMBER } from './constraints'

export const isValidCode = (code: string, isSubmit: boolean = false) => {
  const regex = new RegExp(`^(\\d+\\.)*(\\d+)${isSubmit ? '+' : '?'}$`, 'g')
  return regex.test(code)
}

export const bumpCode = (code: string): string => {
  if (code.length === 0) {
    console.warn("Can't bump account code, limit reached")
    return ''
  }

  const codes = code.split('.')
  const lastCode = +getLastItem(codes) + 1
  codes.pop()

  if (lastCode > MAX_CODE_NUMBER) {
    return bumpCode(codes.join('.'))
  }

  codes.push(lastCode.toString())
  return codes.join('.')
}
