import React, { useState } from 'react'

export const BtnProfile = ({ children, userImage, userName }) => {

    const [open, setOpen] = useState(false);
    return (
        <div className="navBtn-profile">
            <div
                title="Profile"
                className="profile-btn"
                onClick={() => setOpen(!open)}
            >
                <img
                        src={userImage} 
                        alt="Imagem"
                    />
                <button>
                    {userName}
                </button>
            </div>
            {open && children}
        </div>
    )
};