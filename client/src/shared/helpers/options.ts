export type TFilter = {
  value: string
  title: string
}

export const filterOptions: Array<TFilter> = [
  {
    value: '',
    title: 'Поле для фильтрации',
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

export const conditionOptions: Array<TFilter> = [
  {
    value: '',
    title: 'Выбор условия',
  },
  {
    value: '=',
    title: 'Равно',
  },
  {
    value: 'LIKE',
    title: 'Содержит',
  },
  {
    value: '>',
    title: 'Больше',
  },
  {
    value: '<',
    title: 'Меньше',
  },
]
