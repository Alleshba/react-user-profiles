function GitHubIcon() {
  return (
    <svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.65 2.4-2.65z" />
    </svg>
  );
}

function UserProfile(props) {
  const initials = props.name
    .split(" ")
    .map((word) => word[0])
    .join("");

  return (
    <div className="card">
      <div className="card-top">
        <div className="avatar">{initials}</div>
        <span className={props.isOnline ? "status online" : "status offline"}>
          <span className="dot"></span>
          {props.isOnline ? "Online" : "Offline"}
        </span>
      </div>

      <h2 className="name">{props.name}</h2>
      <span className="role-pill">{props.role}</span>

      <p className="bio">{props.bio}</p>

      <div className="info-row">
        <div className="info-item">
          <span className="info-icon">📅</span>
          <div>
            <p className="info-label">Age</p>
            <p className="info-value">{props.age}</p>
          </div>
        </div>

        <div className="info-divider"></div>

        <div className="info-item">
          <span className="info-icon">❤️</span>
          <div>
            <p className="info-label">Role</p>
            <p className="info-value">{props.role}</p>
          </div>
        </div>
      </div>

      <p className="socials-title">🔗 Socials</p>

      <div className="socials">
        <div className="social-btn github">
          <GitHubIcon />
          <div>
            <p className="social-name">GitHub</p>
            <p className="social-handle">{props.socials.github}</p>
          </div>
        </div>

        <div className="social-btn twitter">
          <TwitterIcon />
          <div>
            <p className="social-name">Twitter</p>
            <p className="social-handle">{props.socials.twitter}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;