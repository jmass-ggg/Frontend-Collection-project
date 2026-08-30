import React from 'react'
import cowImage from '../img/image.png'

const Card= (props) =>{
    console.log(props)
    return (

        <div className='container'>
            <img src={cowImage} alt='Cow' />
            <h2>{props.user}</h2>
            <p>this is mee and my cow</p>
            <button>Click me</button>
        </div>
    )
}

export default Card