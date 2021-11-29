import PropTypes from "prop-types";
import React from "react";

import { ProfileCardTemplate } from "../ProfileCard";
import { profileCardType } from "../ProfileCard/models";
import { ProfileCardList } from "./index.styles";

const ASUProfileCardList = ({ profiles }) => {
  return (
    <ProfileCardList>
      {profiles.map(c => (
        <ProfileCardTemplate {...c} size="large" key={c.id} />
      ))}
    </ProfileCardList>
  );
};

ASUProfileCardList.propTypes = {
  profiles: PropTypes.arrayOf(profileCardType),
};

export { ASUProfileCardList };
