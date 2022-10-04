import React, { ReactNode } from 'react'
import styles from './index.module.scss'
import classNames from 'classnames'

export type TFilter = {
  value: string
  title: string
}

const TableHeader = () => {
  const filterOptions: Array<TFilter> = [
    {
      value: 'date',
      title: 'Дата',
    },
    {
      value: 'name',
      title: 'Название',
    },
    {
      value: 'count',
      title: 'Количество',
    },
    {
      value: 'distance',
      title: 'Расстояние',
    },
  ]

  const conditionOptions: Array<TFilter> = [
    {
      value: 'equal',
      title: 'Равно',
    },
    {
      value: 'contain',
      title: 'Содержит',
    },
    {
      value: 'greater',
      title: 'Больше',
    },
    {
      value: 'less',
      title: 'Меньше',
    },
  ]

  function setOptions<T extends Array<TFilter>>(options: T): ReactNode {
    return options.map((option) => {
      return <option value={option.value}>{option.title}</option>
    })
  }

  return (
    <div>
      <div className={styles.seacrhBar}>
        <select className={styles.seacrhBar__filter}>
          <option selected>Поле для фильтрации</option>
          {setOptions(filterOptions)}
        </select>
        <select className={styles.seacrhBar__condition}>
          <option selected>Выбор условия</option>
          {setOptions(conditionOptions)}
        </select>
        <input name="argument" type="text" placeholder="Значение" required />
        <button className="table-form__button" type="submit">
          Применить фильтр
        </button>
      </div>
      <div className={classNames(styles.table__row, styles.table__row__header)}>
        <div className={styles.table__cell}>Дата</div>
        <div className={styles.table__cell}>Название</div>
        <div className={styles.table__cell}>Количество</div>
        <div className={styles.table__cell}>Расстояние</div>
      </div>
    </div>
  )
}

export default TableHeader
