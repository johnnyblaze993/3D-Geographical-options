import React from 'react'
import BackButton from '../components/BackButton'

const MapBoxGlJS = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            gap: 2,
            backgroundColor: 'black',
            color: 'white'
        }}>
            <BackButton />
            <h1>MapBoxGlJS</h1>
            <p style={{
                color: 'red'
            }}>Requires we sign up with credit card info for a free trial, No thanks</p>
            {/* Add your content here */}
        </div>

    )
}

export default MapBoxGlJS