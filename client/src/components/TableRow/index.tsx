import TableCell from 'components/TableCell'
import React, { FC } from 'react'
import styles from './index.module.scss'

const TableRow = ({ starship }: any) => {
  const { cargo_capacity, cost_in_credits, max_atmosphering_speed, name } =
    starship

  return (
    <div className={styles.table__row}>
      <TableCell item={cargo_capacity} />
      <TableCell item={cost_in_credits} />
      <TableCell item={max_atmosphering_speed} />
      <TableCell item={name} />
    </div>
  )
}

export default TableRow
