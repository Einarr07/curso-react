import {useState} from "react";

export function TwitterFollowCard({userName, name, codigo, formatUserName}) {
    // una prop children es una prop especial que permite renderisar lo que este dentro en este caso el componente
    /*
    * <TwitterFollowCard
                Hola, son un children
            </TwitterFollowCard>*/

    const [isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing ? "Following" : "Follow";
    const buttonClassName = isFollowing ? "tw-followCard-button is-following" : "tw-followCard-button";

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" alt="Avatar"
                     src={`https://avatars.githubusercontent.com/u/${codigo}`}/>
                <div className="tw-followCard-info">
                    <strong>
                        {name}
                    </strong>
                    <span className="tw-followCard-infoUserName">
                            {formatUserName(userName)}
                        </span>
                </div>
            </header>

            <aside>
                <button
                    className={buttonClassName}
                    onClick={handleClick}
                >
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">UnFollow</span>
                </button>
            </aside>
        </article>
    )
}