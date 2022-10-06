import TableCell from 'components/TableCell'
import React, { FC } from 'react'
import { TRating } from 'store/slice/entities'
import styles from './index.module.scss'

type TableRowProps = { rating: TRating }

const TableRow: FC<TableRowProps> = ({ rating }) => {
  const { date, name, count, distance } = rating
  const stringDate = new Date(date).toLocaleDateString()
  return (
    <div className={styles.table__row}>
      <TableCell item={stringDate}/>
      <TableCell item={name} />
      <TableCell item={count} />
      <TableCell item={distance} />
    </div>
  )
}

export default TableRow
