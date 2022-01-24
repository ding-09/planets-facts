import { StyledDetailsImg } from './DetailsImg.styled';
const DetailsImg = ({ images }) => {
  return (
    <StyledDetailsImg>
      <img src={images.planet} alt='' />
    </StyledDetailsImg>
  );
};

export default DetailsImg;
