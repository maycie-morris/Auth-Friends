import React from 'react';
import { useHistory } from 'react-router-dom';

// Wanted a landing page for Home

export const Home = () => {
    const history = useHistory();

    return (
        <div className="home-container">
            
            <img 
                className="home-image"
                src="https://scontent-bos3-1.xx.fbcdn.net/v/t1.0-9/75594546_10157034599274576_962512483250077696_n.png?_nc_cat=106&_nc_sid=dd9801&_nc_ohc=YNIMep7nTrYAX8aH4dF&_nc_ht=scontent-bos3-1.xx&oh=b054cde181f47a7d60a9c3e8069274eb&oe=5F88EC72"
                alt="Image of characters from tv show 'Friends'"
            />
            <div className="home-button">
            <button
                className="home-button"
                onClick={() => {
                    history.push('/login')
                }}
            >
                Login to View Friends!
            </button>
            </div>
        </div>
    )
}