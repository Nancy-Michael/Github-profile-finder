import React, { useEffect, useState,useRef } from 'react'
import UserData from './UserData';
import './style.css'

function GithubProfileFinder() {

    const [userName, setUserName] = useState('Nancy-Michael')
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);

    const effctRan = useRef(false);

    async function fetchGithubUserData() {

        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${userName}`)
        const data =await response.json();
        if (data) {
            setUserData(data)
            setLoading(false)
            setUserName('')
        }
        console.log(data);
    }
    function handleSubmit() {
           fetchGithubUserData()
    }

    useEffect(() => {
        if (effctRan.current === false) {
            fetchGithubUserData()
        }
        return () => {
            effctRan.current = true;
        }
    }, [])

    if (loading) {
        <div>data are Loading,please wait....</div>
    }

  return (
      <div className='github-finder-wrapper'>
          <div className='input-wrapper'>
              <input
                  onChange={(event)=>setUserName(event.target.value)}
                  type="text"
                  name='user-name'
                  placeholder='Enter User Name ....'
                  value={userName}
              />
              <button onClick={handleSubmit}>Search</button>
          </div>
          <div>
              {
                  userData !== null ?
                      <UserData user={userData}/>
                  : null
              }
          </div>

    </div>
  )
}

export default GithubProfileFinder
