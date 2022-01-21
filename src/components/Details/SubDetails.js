import { StyledSubDetails } from './SubDetails.styled';

const SubDetails = ({ subDetails }) => {
  const { rotation, revolution, radius, temperature } = subDetails;
  return (
    <StyledSubDetails className='sub-details'>
      <div className='details-container'>
        <p>Rotation Time</p>
        <p>{rotation}</p>
      </div>
      <div className='details-container'>
        <p>Revolution Time</p>
        <p>{revolution}</p>
      </div>
      <div className='details-container'>
        <p>Radius</p>
        <p>{radius}</p>
      </div>
      <div className='details-container'>
        <p>Average Temp.</p>
        <p>{temperature}</p>
      </div>
    </StyledSubDetails>
  );
};

export default SubDetails;
