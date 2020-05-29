import React from "react";

import LinkIcon from "../../SVG/LinkIcon.svg";
import MarkerIcon from "../../SVG/MarkerIcon.svg";

const ProfileDetails = ({ profile }) => {
  return (
    <div>
      <div>
        <img
          style={styles.avatar}
          src={profile.avatar_url}
          data-testid="profile-avatar"
          width="180"
          alt={profile.name}
        />
      </div>
      <h4>
        {profile.name}
        <div>
          <small>{profile.login}</small>
        </div>
      </h4>

      <div>{profile.bio}</div>
      <br />

      {!!profile.location && (
        <div>
          <MarkerIcon width="20" /> {profile.location}
        </div>
      )}

      {!!profile.email && (
        <div>
          <LinkIcon width="20" /> {profile.email}
        </div>
      )}

      {!!profile.blog && (
        <div style={styles.blogLink}>
          <a
            href={`https://${profile.blog}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkIcon width="20" /> {profile.blog}
          </a>
        </div>
      )}
      <br />
      <div>
        <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
          <button className="button button-outline">View On Github</button>
        </a>
      </div>
    </div>
  );
};

const styles = {
  blogLink: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  avatar: {
    margin: "0 auto",
    maxWidth: "50vw",
    marginBottom: "1em",
  },
};

export default React.memo(ProfileDetails);
