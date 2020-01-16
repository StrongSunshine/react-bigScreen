import React, { memo, useState, useEffect } from 'react'
import { moment } from '@/utils/util'
import SvgIcon from '@/components/svgIcon'

SvgIcon.createFromIconfontCN(
  '//at.alicdn.com/t/font_624956_br6r8nb9msp.js'
)

const Header = memo(() => {
  const {time, setTime} = useState(new Date())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeout(new Date())
    }, 1000)
    return () => clearTimeout(timer)
  })
})