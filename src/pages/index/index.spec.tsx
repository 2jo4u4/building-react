import React from 'react'
import App from './index'
import renderer from 'react-test-renderer'

test('Index App', () => {
  const component = renderer.create(<App />)
  const tree = component.toJSON() as renderer.ReactTestRendererJSON
  expect(tree).toMatchSnapshot()
})
