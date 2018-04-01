import expect from 'expect'
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'

import Cond from 'src/'

describe('Component', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('displays a welcome message', () => {
    render(
      <Cond test={true}>
        <Cond.State equals={true} render={() => <div>Hello World</div>} />
      </Cond>,
      node,
      () => {
        expect(node.innerHTML).toContain('Hello World')
      }
    )
  })
})
