import React from 'react'

const Header = (props) => {
  
    const bringStud=()=>{
        fetch('https://reqres.in/api/users?page=1')
        .then((res)=>{
                return res.json()
        })
        .then((json)=>{
            props.parentCallback(json);
        })
    }

    // const bringStud=()=>{
    //     fetch('https://reqres.in/api/users?page=1')
    //     .then((res) => res.json())
    //     .then((json) => {
    //         console.log(json);
    //     })
    // }

    return (
        <div className='Header'>
        <button onClick={bringStud}>Fetch Users</button>
        </div>
    )
}

export default Header
