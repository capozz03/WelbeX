import React, { useState } from 'react'
import styles from './index.module.scss'

const TableCell = ({ item }: any) => {
  const [state, setState] = useState(item)

  return (
    <div className={styles.table__cell}>
      <input
        value={state}
        onChange={({ target }) => setState(target.value)}
        type="text"
      />
    </div>
  )
}

export default TableCell
