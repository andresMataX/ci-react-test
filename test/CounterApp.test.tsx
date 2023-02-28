/** @jest-environment jsdom */
import React from 'react'
import { describe, test, expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import { CounterApp } from '../src/CounterApp'

describe('Testing in <CounterApp.test />', () => {
  const value = 100

  test('debe de hacer match con el snapshot', () => {
    const { container } = render(<CounterApp value={value} />)
    expect(container).toMatchSnapshot()
  })

  test('debe de mostrar el valor inicial de 100', () => {
    render(<CounterApp value={value} />)
    expect(screen.findByText(value)).toBeTruthy()
  })
})
