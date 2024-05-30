import React from 'react'

function UserData({ user }) {
    const { avatar_url, login, public_repos, name, created_at } = user;

    const createdDate = new Date(created_at);
  return (
    <div>
          <img
              src={avatar_url} alt="user-img" />
          <p>{login}</p>
          <p>Public repos {public_repos}</p>
          <a href={`https://github.com/${login}`}>{name || login}</a>
          <p>{name} Joined on {" "}
              {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
                  month:"short",
              })}`} {createdDate.getFullYear()}
          </p>
    </div>
  )
}

export default UserData
