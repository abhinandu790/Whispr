
// This component renders the main page for the SecureChat application.
const MainPage = () => {
    return (
        <div className="mainpage">
            <div className="center">
                <h1>Welcome to secureChat</h1>
                <p>Select a conversation from the sidebar to start chatting with <br /> end-to-end encryption.</p>
            </div>
            <div className="sidebar">
                <form action="">
                    <input type="searchbar" name="" id="" placeholder=" Search Conversations..." />
                </form>
                <hr />
                <div className="new2">
                <hr />
                    <button className="newchat">New Chat</button>
                </div>
            </div>
        </div>

    )
}

export default MainPage;