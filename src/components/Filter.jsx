import React from 'react'

function Filter({sortBy, onChangeSortBy, showGreased, onChangeShowGreased}) {

    function handleChangeSortBy(event) {
        onChangeSortBy(event.target.value)
      }
      
      function handleToggleGreased(event) {
        onChangeShowGreased(event.target.checked)
      }

  return (
    <div>

    </div>
  )
}

export default Filter