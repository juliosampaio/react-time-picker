import { css } from 'styled-components'

export const sizes = {
  giant: 1200,
  desktop: 992,
  phone: 800
}

const landscape = (...args) => css`
  @media (orientation: landscape) {
    ${css(...args)}
  }
`

const portrait = (...args) => css`
  @media (orientation: portrait) {
    ${css(...args)}
  }
`

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `
  return accumulator
}, { landscape, portrait })
