import React, { FC } from 'react'
import styles from './index.module.scss'

type TTableCellProps = {
  item: string | number
}

const TableCell: FC<TTableCellProps> = ({ item }) => {
  return (
    <div className={styles.table__cell}>
      <p>{item}</p>
    </div>
  )
}

export default TableCell
