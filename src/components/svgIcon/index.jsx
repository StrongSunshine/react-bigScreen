import React, { memo } from 'react'
import styles from './index.scss'

const customCache = new Set()

const SvgIcon = memo(props => {
  const { className, icon } = props
  return (
    <svg className={className + ' ' + styles.icon}>
      <use xlinkHref={'#' + icon} />
    </svg>
  )
})

SvgIcon.createFromIconfontCN = url => {
  if (
    typeof url === 'string' &&
    url.length &&
    !customCache.has(url)
  ) {
    const script = document.createElement('script')
    script.setAttribute('src', url)
    script.setAttribute('data-namespace', url)
    customCache.add(url)
    document.body.appendChild(url)
  }
}

export default SvgIcon