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
        }}>
            <BackButton />
            <div>MapBoxGlJS</div>
            {/* Add your content here */}
        </div>

    )
}

export default MapBoxGlJS