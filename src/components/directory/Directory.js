import React from 'react'
import './Directory.styles.scss'
import MenuItems from '../Menu-items/MenuItems'
const sections = [
    {
        title: 'hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        id: 1,
        linkUrl: 'hats'
    },
    {
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        id: 2,
        linkUrl: 'jackets'
    },
    {
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        id: 3,
        linkUrl: 'sneakers'
    },
    {
        title: 'Women',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        id: 4,
        size: 'large',
        linkUrl: ''
    },
    {
        title: 'Men',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        id: 5,
        size: 'large',
        linkUrl: ''
    },

]
// /**
//  * @return {boolean}
//  * @param {string}
//  * 
//  * 
//  * 
//  */
const Directory = () => {
    // const [data, setdata] = useState(sections)

    return (
        <div className="directory-menu">
            {sections.map(({ id, ...otherSectionProps }) => (
                <MenuItems key={id} {...otherSectionProps} />
            ))}
        </div>
    )
}

export default Directory