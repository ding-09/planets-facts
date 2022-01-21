import { StyledDetailsImg } from './DetailsImg.styled';
const DetailsImg = ({ images }) => {
  return (
    <StyledDetailsImg>
      <img src={images.planet} alt='Mercury' />
    </StyledDetailsImg>
  );
};

export default DetailsImg;
