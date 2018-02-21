import { css } from 'styled-components'

export const sizes = {
  giant: 1200,
  desktop: 992,
  phone: 812
}

export const mediaBuilder = (...and) => Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) ${ and ? 'and ' + and.join('and') : '' } {
      ${css(...args)}
    }
  `
  return accumulator
}, {})

export const size = mediaBuilder()

export const landscape = mediaBuilder('(orientation: landscape)')

export const portrait = mediaBuilder('(orientation: portrait)')

export default {
  size,
  landscape,
  portrait
}
