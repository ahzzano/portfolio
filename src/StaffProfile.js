import React from 'react'

function StaffProfile(props) {
    return (
        <div style={{
            display: 'flex',
            gap: '35px',
            alignItems: 'center'
        }}>
            <img src={props.image} class="profile-picture" style={{width:'100px', height:'100px'}}/>
            <div>
                <h3>{props.profileName}</h3>
                <p>
                    {props.roles}
                </p>
            </div>
        </div>
    )
}

export default StaffProfile