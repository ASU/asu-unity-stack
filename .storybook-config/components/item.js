import { WithTooltip, TabButton, TooltipLinkList } from '@storybook/components';
import PropTypes from 'prop-types';
import React from 'react';


/**
 * A single item of our Storybook toolbar.
 *
 * @param {String} name The name of the toolbar.
 * @param {String} title Title of the item.
 * @param {Function} links Generator of tooltip items
 * @returns {Component} The toolbar item.
 * @public
 */
export const Item = ({ name, title, links, active }) => {
  /**
   * Called when the toolbar item is cliecked on.
   *
   * @param {Function} onHide Closes the tooltip
   * @returns {TooltipLinkList} List of items that can be selected.
   * @private
   */
  function tooltip({ onHide }) {
    const list = links().map((data) => {
      const click = data.onClick;

      //
      // We want to override the onClick value so we can automatically close
      // the generated tooltip on click.
      //
      data.onClick = (value) => {
        if (click) click(value);
        onHide();
      };

      return data;
    });
    return <TooltipLinkList links={ list } />;
  }


  return (
    <WithTooltip placement='top' trigger='click' closeOnClick tooltip={ tooltip }>
      <TabButton active={active} title={ title || name }>
        { name }
      </TabButton>
    </WithTooltip>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  links: PropTypes.func.isRequired,
  title: PropTypes.string,
  active: PropTypes.bool,
};
