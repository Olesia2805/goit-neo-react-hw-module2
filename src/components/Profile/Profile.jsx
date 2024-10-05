import profileCss from './Profile.module.css';

const Profile = ({ image, name, tag, location, stats }) => {
  return (
    <div className={profileCss.card}>
      <div className={profileCss.titleContent}>
        <img src={image} alt="User avatar" />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={profileCss.listAttributes}>
        <li className={profileCss.attribute}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>

        <li className={profileCss.attribute}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>

        <li className={profileCss.attribute}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
