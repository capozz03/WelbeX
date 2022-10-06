import React, { ReactNode } from 'react'
import classNames from 'classnames'
import { useFormField } from '../../hooks/useFormField'
import { conditionOptions, filterOptions } from 'shared/helpers/options'
import { useAppDispatch } from '../../hooks/redux'
import { getRatingAsync, getRatingFilterAsync } from '../../store/slice/ratings'
import { setOptions } from 'shared/helpers/setOptions'
import styles from './index.module.scss'

const TableHeader = () => {
  const filteringField = useFormField()
  const conditionField = useFormField()
  const argumentField = useFormField()

  const dispatch = useAppDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const params = {
      field: filteringField.value,
      condition: conditionField.value,
      value: argumentField.value,
    }
    dispatch(getRatingFilterAsync(params))
  }

  const resetHandler = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(getRatingAsync())
  }

  return (
    <div>
      <div className={styles.searchBar}>
        <form className={styles.searchBar__form} onSubmit={handleSubmit}>
          <select name="filtering" required {...filteringField}>
            {setOptions(filterOptions)}
          </select>
          <select name="condition" required {...conditionField}>
            {setOptions(conditionOptions)}
          </select>
          <input
            name="argument"
            type="text"
            placeholder="Значение"
            required
            {...argumentField}
          />
          <button type="submit">
            Применить фильтр
          </button>
          <button type="reset" onClick={resetHandler}>
            Очистить фильтры
          </button>
        </form>
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
