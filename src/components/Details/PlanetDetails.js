import DetailsNav from './DetailsNav';
import DetailsImg from './DetailsImg';
import DetailsBody from './DetailsBody';
import SubDetails from './SubDetails';
import { StyledPlanetDetails } from './PlanetDetails.styled';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const PlanetDetails = ({ planetsData }) => {
  const currentPlanet = useParams().planet;
  const [currentDetails, setCurrentDetails] = useState('overview');

  let details = {};
  let subDetails = {};
  let images = {};

  // look through planet to grab data for current planet
  planetsData.forEach((planet) => {
    if (planet.name === currentPlanet) {
      // get body details
      details.overview = planet.overview;
      details.structure = planet.structure;
      details.surface = planet.surface;

      // get images details
      images = planet.images;

      // get sub-details
      subDetails.rotation = planet.rotation;
      subDetails.revolution = planet.revolution;
      subDetails.radius = planet.radius;
      subDetails.temperature = planet.temperature;
    }
  });

  return (
    <StyledPlanetDetails>
      <DetailsNav setCurrentDetails={setCurrentDetails} />
      <DetailsImg images={images} />
      <DetailsBody currentPlanet={currentPlanet} details={details[currentDetails]} />
      <SubDetails subDetails={subDetails} />
    </StyledPlanetDetails>
  );
};

export default PlanetDetails;
