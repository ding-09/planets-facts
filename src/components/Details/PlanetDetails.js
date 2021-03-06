import DetailsNav from './DetailsNav';
import DetailsImg from './DetailsImg';
import DetailsBody from './DetailsBody';
import SubDetails from './SubDetails';
import { StyledPlanetDetails } from './PlanetDetails.styled';

const PlanetDetails = ({
  planetsData,
  currentScreen,
  currentPlanet,
  currentDetails,
  setCurrentDetails,
}) => {
  let details = {};
  let images = {};
  let subDetails = {};

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
      <DetailsNav
        currentScreen={currentScreen}
        currentPlanet={currentPlanet}
        setCurrentDetails={setCurrentDetails}
      />
      <DetailsImg images={images} currentDetails={currentDetails} />
      <DetailsBody
        currentPlanet={currentPlanet}
        details={details[currentDetails]}
      />
      <SubDetails subDetails={subDetails} />
    </StyledPlanetDetails>
  );
};

export default PlanetDetails;
