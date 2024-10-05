import clsx from 'clsx';
import itemFriendCss from './FriendListItem.module.css';

const FriendListItem = ({ friend }) => {
  return (
    <div className={itemFriendCss.card}>
      <img
        className={itemFriendCss.avatar}
        src={friend.avatar}
        alt="Avatar"
        width="48"
      />
      <p className={itemFriendCss.name}>{friend.name}</p>
      <p
        className={clsx(
          itemFriendCss.status,
          friend.isOnline ? itemFriendCss.isOnline : itemFriendCss.isOffline
        )}
      >
        {friend.isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;
