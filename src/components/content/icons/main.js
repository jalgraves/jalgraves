import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faUserCircle,
  faComment,
  faInfo,
  faUsers,
  faHome,
  faCamera,
  faEnvelope,
  faUtensils
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Icon = (props) => {
  const icons = {
    "faUsers": faUsers,
    "faUserCircle": faUserCircle,
    "faComment": faComment,
    "faInfo": faInfo,
    "faCamera": faCamera,
    "faHome": faHome,
    "faEnvelope": faEnvelope,
    "faGithub": faGithub,
    "faUtensils": faUtensils
  }
  return (
      <FontAwesomeIcon icon={icons[props.iconName]} style={props.style} fixedWidth />
  )
}
