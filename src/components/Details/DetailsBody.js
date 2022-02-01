import { StyledDetailsBody } from './DetailsBody.styled';

const DetailsBody = ({ currentPlanet, details }) => {
  const { content } = details;
  return (
    <StyledDetailsBody className='details-body'>
      <div className='body-content'>
        <h2>{currentPlanet}</h2>
        <p>{content}</p>
      </div>
      <p className='source'>
        Source : <a href={details.source}>Wikipedia </a>
      </p>
    </StyledDetailsBody>
  );
};

export default DetailsBody;
