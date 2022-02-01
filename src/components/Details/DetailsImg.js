import { StyledDetailsImg } from './DetailsImg.styled';
const DetailsImg = ({ images }) => {
  return (
    <StyledDetailsImg>
      <img src={images.planet} alt='Planet' />
    </StyledDetailsImg>
  );
};

export default DetailsImg;
