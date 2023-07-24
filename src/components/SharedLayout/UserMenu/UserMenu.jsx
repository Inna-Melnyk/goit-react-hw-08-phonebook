import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/authOperations';
import { Wrapper, Button } from './UserMenu.styled';
import { LuLogOut } from 'react-icons/lu';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);
  return (
    <Wrapper>
      <p>
        Welcome, <span> {name}</span>
      </p>
      <Button
        type="button"
        onClick={() =>
          dispatch(logOut())
            .unwrap()
            .then(() => console.log('Logout successful'))
            .catch(() => console.log('no logout'))
        }
      >
        <LuLogOut />
      </Button>
    </Wrapper>
  );
};
