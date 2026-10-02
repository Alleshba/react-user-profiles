import "./App.css";
import UserProfile from "./component/UserProfile";

function App() {
  return (
    <div className="app-layout">
      <header className="header">
        <span className="team-tag">👥 Our Team</span>
        <h1>
          User <span className="gradient-text">Profiles</span>
        </h1>
        <p className="subtitle">Meet our amazing developers</p>
        <div className="header-line"></div>
      </header>

      <div className="cards">
        <UserProfile
          name="Sarah Jenkins"
          role="Frontend Engineer"
          age={28}
          isOnline={true}
          bio="Passionate about building responsive web applications and creating beautiful user experiences."
          socials={{ github: "@sarahj", twitter: "@sarah_dev" }}
        />

        <UserProfile
          name="Alex Rivera"
          role="UI/UX Designer"
          age={32}
          isOnline={false}
          bio="Designing clean interfaces and user experiences that make a difference."
          socials={{ github: "@arivera", twitter: "@arivera_design" }}
        />

        <UserProfile
          name="Chen Wei"
          role="Backend Developer"
          age={25}
          isOnline={true}
          bio="Node.js and database performance fanatic. Always exploring new technologies."
          socials={{ github: "@chenw", twitter: "@chen_codes" }}
        />
      </div>
    </div>
  );
}

export default App;