import React from 'react'


function Profile(props) {
    return(
        <div>
            <img src={props.Src} alt=""/>
            <h1>{props.Name}</h1>
            <button onClick={props.onClick1}>{props.Facebook}</button>
           { props.isShown && <button onClick={props.onClick2}>{props.LinkedIn}</button>} 

        </div>
    )
}
export default Profile 