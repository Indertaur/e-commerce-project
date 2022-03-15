import React from 'react'
import ShopData from './ShopData'
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview'

const ShopPage = () => {
        const data = ShopData;
  return (
    <div>
        {data.map(({id, ...otherProps}) =>(
            <CollectionPreview key={id} {...otherProps} />
        ))}
    </div>
  )
}

export default ShopPage