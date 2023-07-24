import { ImSpinner } from 'react-icons/im';
import { Spinner } from './Loader.styled';
import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Spinner>
      <ImSpinner size="32" />
      <p>Loading...</p>
    </Spinner>
  );
};

export const DeleteLoader = () => {

  return (
    <ThreeDots
      height="15"
      width="26"
      radius="9"
      color="orangered"
      ariaLabel="three-dots-loading"
      wrapperStyle={{ paddingLeft: '10px', paddingRight: '10px' }}
      wrapperClassName=""
      visible={true}
    />
  );
}