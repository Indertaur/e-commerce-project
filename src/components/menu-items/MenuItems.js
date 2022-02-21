import React from 'react'
import { withRouter } from 'react-router-dom'
import './MenuItems.styles.scss'

const MenuItems = ({ title, imageUrl, size, history, match, linkUrl }) => {
    return (
        <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className='background-image' style = {{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className="content">
                <div className="title"> {title.toUpperCase()} </div>
                <div className="subtitle"> Shop Now </div>
            </div>
        </div>
    )
}

export default withRouter(MenuItems);