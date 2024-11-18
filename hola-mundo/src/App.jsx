import "./App.css"
export function App() {
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" alt="Avatar" src="https://avatars.githubusercontent.com/u/96399138?v=4"/>
                    <div className="tw-followCard-info">
                        <strong>
                            Mateo Congo
                        </strong>
                        <span className="tw-followCard-infoUserName">
                            @Einarr07
                        </span>
                    </div>
            </header>

            <aside>
                <button className="tw-followCard-button">
                    Seguir
                </button>
            </aside>
        </article>
    )
}