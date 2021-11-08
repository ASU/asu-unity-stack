import PropTypes from "prop-types";
import React from "react";

import { ProfileCard } from "../ProfileCard";
import { profileCardType } from "../ProfileCard/models";
import { ProfileCardList } from "./index.styles";

const ASUProfileCardList = ({ profiles }) => {
  return (
    <ProfileCardList>
      {profiles.map(c => (
        <ProfileCard {...c} key={c.id} />
      ))}
    </ProfileCardList>
  );
};

ASUProfileCardList.propTypes = {
  profiles: PropTypes.arrayOf(profileCardType).isRequired,
};

export { ASUProfileCardList };
