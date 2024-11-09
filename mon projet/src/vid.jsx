import React from 'react';

const Vid = () => {
    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh', 
            textAlign: 'center', 
            overflow: 'hidden' 
        }}>
            <video controls style={{ 
                width: '100%',  
                height: '100%', 
                objectFit: 'cover' 
            }}>
                <source src="./HydroOil + HydroLotion - ISDIN (1080p, h264, youtube).mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la vidéo.
            </video>
            <h1>ISDIN</h1>
            <p>LOVE YOUR SKIN</p>
        </div>
    );
}

export default Vid;
