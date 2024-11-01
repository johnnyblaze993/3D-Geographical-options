import React from 'react'
import BackButton from '../components/BackButton'

const Nvidia = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            gap: 2,
        }}>
            <BackButton />
            <h1>  Nvidia  </h1>
            {/* Add your content here */}
        </div>
    )
}

export default Nvidia