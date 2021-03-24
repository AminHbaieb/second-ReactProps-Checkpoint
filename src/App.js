import imageInSrc from "./Components/Profile/imageInSrc.jpg";
import Profile from "./Components/Profile/Profile";
import "./App.css";

function App() {
    const handleAlert = (name) => {
        alert(name);
    };
    return (
        <div className="App">
            <Profile
                fullName="amin hbaieb"
                bio="Single"
                profession="student"
                handleAlert={handleAlert}
            >
                <img
                    className="myimg"
                    src={imageInSrc}
                    alt="my_pic"
                    style={{ width: 200 }}
                />
            </Profile>
        </div>
    );
}

export default App;
