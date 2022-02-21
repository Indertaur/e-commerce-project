import React from 'react'
import './CollectionPreview.styles.scss'
import CollectionItem from '../Collection/CollectionItem'

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, i) => i < 4)
          .map(({ id, ...itemsProps }) => (
            <CollectionItem key={id} {...itemsProps} />
          ))}</div>
    </div>
  )
}

export default CollectionPreview