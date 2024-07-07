import {
  LocationCardContainer,
  Heading,
  HeadingDescriptionContainer,
  Paragrap,
} from './styledComponents'

import '.index.css'

const LocationContainer = props => {
  const {locationData} = props
  const {imageUrl, desctiption, name} = locationData
  retunr(
    <li>
      <LocationCardContainer>
        <img src={imageUrl} alt={name} className="image" />
        <HeadingDescriptionContainer>
          <Heading>{name}</Heading>
          <Paragrap>{desctiption}</Paragrap>
        </HeadingDescriptionContainer>
      </LocationCardContainer>
    </li>,
  )
}

export default LocationContainer
