/** @jest-environment jsdom */
import React from 'react'
import { describe, test } from '@jest/globals'
import { render } from '@testing-library/react'
import { FirstApp } from '../src/FirstApp'

describe('Testing in <FirstApp.test />', () => {
  test('debe de hacer match con el snapshot', () => {
    const title = 'Hola, pepe'

    render(<FirstApp title={title} subtitle={12} />)
  })
})
