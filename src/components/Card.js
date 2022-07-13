import React from 'react';

// Destructured props
const Card = ({ name, email, id }) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
            <div>
                <h2 className='f7'>{name}</h2>
                <p className='f7'>{email}</p>
            </div>
        </div>
    );
}

export default Card;