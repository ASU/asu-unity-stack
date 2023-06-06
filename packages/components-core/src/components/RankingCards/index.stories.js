import classNames from 'classnames';
import React from 'react';

import { RankingCard } from '.';

export default {
  title: 'UDS/Ranking Card',
};

const Template = args => (
  <div className="container">
    <div className={classNames('row', 'row-spaced', 'pt-2', 'pb-2')}>
      <div className={classNames('col', 'col-12', 'col-md-6', 'col-lg-4')}>
        <RankingCard {...args} />
      </div>
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  imageSrc: 'https://source.unsplash.com/WLUHO9A_xik/300x200',
};
