import { StyledDetailsBody } from './DetailsBody.styled';

const DetailsBody = ({ currentPlanet, details }) => {
  let overview = details.overview;
  
  return (
    <StyledDetailsBody className='details-body'>
      <div className='body-content'>
        <h2>{currentPlanet}</h2>
        <p>{overview.content}</p>
      </div>
      <p className='source'>
        Source : <a href={overview.source}>Wikipedia </a>
      </p>
    </StyledDetailsBody>
  );
};

export default DetailsBody;
