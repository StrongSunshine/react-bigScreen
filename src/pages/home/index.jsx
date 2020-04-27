import React, { PureComponent } from 'react'
import ReactParticleLine from 'react-particle-line'
import animate from 'animate.css'
import Header from '@/pages/header'
import Equipment from '@/pages/Equipment'

import styles from './index.scss'

export default class Home extends PureComponent {
  render() {
    return (
      <ReactParticleLine>
        <div className={styles.homeBox}>
          <div className={styles.header}>
            <Header />
          </div>
          <div className={styles.topLeft}>
            <Equipment />
          </div>
        </div>
      </ReactParticleLine>
    )
  }
}