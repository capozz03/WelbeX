import TableHeader from 'components/TableHeader'
import TableRow from 'components/TableRow'
import React, { FC } from 'react'
import styles from './index.module.scss'
import  { UsePaginationReturn } from '../../hooks/usePagination'
import { TRating } from '../../store/slice/entities'


type TTableProps = {
  ratings: TRating[],
  paginations: UsePaginationReturn
}

const Table: FC<TTableProps> = ({ ratings, paginations }) => {  
  const {
    offset,
    limit,
  } = paginations

  return ratings ? (
    <div className={styles.wrapper}>
      <div className={styles.table}>
        <TableHeader />
        {ratings
          .slice(offset, limit)
          .map((rating) => (
          <TableRow key={rating.id} rating={rating} />
        ))}
      </div>
    </div>
  ) : (
    <div className={styles.wrapper}>
      <div>loading...</div>
    </div>
  )
}

export default Table
