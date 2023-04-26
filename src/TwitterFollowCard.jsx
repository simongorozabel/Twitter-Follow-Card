import { useState } from "react"

export function TwitterFollowCard ({ userName = 'unknown', name, initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';

    const handleClick = () => {
        setIsFollowing(!isFollowing)
}

    return (
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
          <img
            src= {`https://unavatar.io/${userName}`}
            alt="simongorozabel" className='tw-followCard-avatar'
          />
          <div className="tw-followCard-info">
            <strong>{name}</strong>
            <span className="tw-followCard-infoUserName">@{userName}</span>
          </div>
        </header>
        <aside>
          <button 
          className={buttonClassName}
          onClick={handleClick}
          >
            {text}
            </button>
        </aside>
      </article>
    )
}