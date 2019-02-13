import React from 'react'

export const Audio = ({ audioItem: { title, description, googleLink}} ) => (
    <div className="audio-item">
        <h1 className="title">{title}</h1>
        <p>{description}</p>
        <iframe
            frameborder="0"
            width="650"
            height="160"
            src={googleLink}>
        </iframe>
    </div>
);