/** @jest-environment jsdom */
import React from 'react'
import { describe, test, expect } from '@jest/globals'
import { render } from '@testing-library/react'
import { FirstApp } from '../src/FirstApp'

describe('Testing in <FirstApp.test />', () => {
  // test('debe de hacer match con el snapshot', () => {
  //   const title = 'Hola, pepe'

  //   const { container } = render(<FirstApp title={title} subtitle={12} />)

  //   expect(container).toMatchSnapshot()
  // })

  test('should de mostrar el título en un h1', () => {
    const title = 'Hola, pepe'
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} subtitle={'Soy un sub'} />
    )
    expect(getByText(title)).toBeTruthy()

    // const h1 = container.querySelector('h1')
    // expect(h1?.innerHTML).toContain(title)

    expect(getByTestId('test-title').innerHTML).toContain(title)
  })

  test('debe de mostrar el subtítulo enviado por props', () => {
    const title = 'Hola, pepe'
    const subtitle = 'Soy un sub'
    const { getByText, getAllByText } = render(
      <FirstApp title={title} subtitle={subtitle} />
    )

    // expect(getByText(subtitle)).toBeTruthy()
    expect(getAllByText(subtitle).length).toBe(2)
  })
})
