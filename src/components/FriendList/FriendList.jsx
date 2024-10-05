import FriendListItem from '../FriendListItem/FriendListItem';
import listFriendsCss from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={listFriendsCss.listCards}>
      {/* The number of li depends on the number of objects in the array */}

      {friends.map(friend => (
        <li className={listFriendsCss.listItem} key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
