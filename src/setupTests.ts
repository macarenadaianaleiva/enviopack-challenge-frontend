import '@testing-library/jest-dom'
import { TextEncoder, TextDecoder } from 'util'

if (global.TextEncoder === undefined) {
  // @ts-ignore
  global.TextEncoder = TextEncoder
}

if (global.TextDecoder === undefined) {
  // @ts-ignore
  global.TextDecoder = TextDecoder
}
