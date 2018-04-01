import React from 'react'
import PropTypes from 'prop-types'

const Cond = props => {
  let match, element

  React.Children.forEach(props.children, el => {
    if (!match && React.isValidElement(el) && el.props.equals === props.test) {
      match = true
      element = el
    }
  })
  return match ? React.cloneElement(element) : null
}

Cond.propTypes = {
  test: PropTypes.any,
  children: PropTypes.node
}

Cond.State = ({ equals, component, render, ...props }) => {
  if (render) {
    component = render
  }
  return React.createElement(component, props)
}

Cond.State.propTypes = {
  equals: PropTypes.any.isRequired,
  component: PropTypes.func,
  render: PropTypes.func
}

export default Cond
