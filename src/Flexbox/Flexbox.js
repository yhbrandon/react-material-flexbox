import classnames from 'classnames'
import React, { PropTypes } from 'react'
import { forEach } from 'lodash'

import theme from './Flexbox.scss'

const configureClasses = (props) => {
  const classes = {}

  forEach(props, (value, key) => {
    if (key === 'children') return

    let className

    if (typeof value === 'boolean') {
      className = theme[key]
      classes[className] = true
    } else if (typeof value === 'string' || typeof value === 'number') {
      className = typeof value === 'string' && value.indexOf(' ') >= 0
      ? theme[key + '__' + value.replace(/ /g, '__')]
      : theme[key + '__' + value]

      classes[className] = true
    }
  })

  return classnames(props.className, classes)
}

const Flexbox = (props) => (
  <div className={ configureClasses(props) }>
    { props.children }
  </div>
)

Flexbox.propTypes = {
  align: PropTypes.string,
  children: PropTypes.node,
  flex: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),
  layout: PropTypes.string
}

export default Flexbox
