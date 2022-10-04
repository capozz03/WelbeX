import TableHeader from 'components/TableHeader'
import TableRow from 'components/TableRow'
import React from 'react'
import styles from './index.module.scss'

export interface Starship {
  name: string
  cost_in_credits: string
  max_atmosphering_speed: string
  cargo_capacity: string
}

const Table = () => {
  const starships: Array<Starship> = Array(10).fill({
    name: 'Sand Crawler',
    cost_in_credits: '150000',
    max_atmosphering_speed: '30',
    cargo_capacity: '50000',
  })

  return starships ? (
    <div className={styles.wrapper}>
      <div className={styles.table}>
        <TableHeader />
        {starships.map((starship, idx) => (
          <TableRow key={idx} starship={starship} />
        ))}
      </div>
    </div>
  ) : (
    <div>loading...</div>
  )
}

export default Table
