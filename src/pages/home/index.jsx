import React, { PureComponent } from 'react'
import ReactParticleLine from 'react-particle-line'

import Header from '@/pages/header'

import style from './index.scss'

export default class Home extends PureComponent {
  render() {
    return (
      <ReactParticleLine>
        <div className={style.homeBox}>
          <Header />
        </div>
      </ReactParticleLine>
    )
  }
}