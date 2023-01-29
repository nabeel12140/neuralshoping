import React from 'react'
import { useFilterContext } from '../context/filter_context'

const FilterSection = () => {
  const {filter_products}=useFilterContext();
  console.log(filter_products)
  return (
    <div>FilterSection</div>
  )
}

export default FilterSection