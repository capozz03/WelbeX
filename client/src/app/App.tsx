import { Table } from 'components'
import Pagination from 'components/Pagination'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import usePagination from '../hooks/usePagination'
import React, { useEffect } from 'react'
import { getRatingAsync } from '../store/slice/ratings'
import { RequestStatuses } from 'shared/helpers'

const App = () => {
  const dispatch = useAppDispatch()
  const ratings = useAppSelector((state) => state.rating.data)
  const requestStatus = useAppSelector((state) => state.rating.status)

  const isLoading = requestStatus === RequestStatuses.IDLE;

  const { offset, limit, nextPage, prevPage, page, gaps, setPage, totalPages } =
    usePagination({
      contentPerPage: 3,
      count: ratings.length,
    })

  const paginations = { offset, limit, nextPage, prevPage, page, gaps, setPage, totalPages }

  useEffect(() => {
    dispatch(getRatingAsync())
  }, [])

  return (
    <div className="App">
      {isLoading ? <div>Loading</div> : <Table ratings={ratings} paginations={paginations}/>}
      <Pagination paginations={paginations} />
    </div>
  )
}

export default App
