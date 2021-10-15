import React from 'react'
import Other from './index'
import { fireEvent, render } from '@testing-library/react'
import renderer from 'react-test-renderer'

it('Test', () => {
  const { queryByLabelText, getByLabelText } = render(<Other labelOn="On" labelOff="Off" />)

  expect(queryByLabelText(/off/i)).toBeTruthy()

  fireEvent.click(getByLabelText(/off/i))

  expect(queryByLabelText(/on/i)).toBeTruthy()

  const component = renderer.create(<Other labelOn="On" labelOff="Off" />)
  const tree = component.toJSON() as renderer.ReactTestRendererJSON
  expect(tree).toMatchSnapshot()
})
