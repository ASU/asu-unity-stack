import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';
export default createComponent('List');

export const UnorderedList = createStory(
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        {/* Component start */}
        <ul class="uds-list">
          <li>Lorem ipsum dolor sit amet</li>
          <li>
            Consectetur adipiscing lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </li>
          <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>
            Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet
          </li>
        </ul>
        {/* Component end */}
      </div>
    </div>
  </div>
);

export const UnorderedListMaroonBullet = createStory(<div class="container">
    <div class="row">
      <div class="col-md-12">
        {/* Component start */}
  <ul class="uds-list maroon">
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </li>
    <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
    <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
  </ul>
  {/* Component end */}
      </div>
    </div>
  </div>
);

export const UnorderedListGray2Background = createStory(
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        {/* Component start */}
  <ul class="uds-list smokemode">
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </li>
    <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
    <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
  </ul>
  {/* Component end */}
      </div>
    </div>
  </div>
);

export const UnorderedListGray1Background = createStory(
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        {/* Component start */}
  <ul class="uds-list light-smokemode">
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </li>
    <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
    <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
  </ul>
  {/* Component end */}
      </div>
    </div>
  </div>
);

export const UnorderedListGray7Background = createStory(
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        {/* Component start */}
  <ul class="uds-list darkmode">
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </li>
    <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
    <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
  </ul>
  {/* Component end */}
      </div>
    </div>
  </div>
);

export const UnorderedListGoldBulletGray7Background = createStory(
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        {/* Component start */}
  <ul class="uds-list darkmode gold">
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </li>
    <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
    <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
  </ul>
  {/* Component end */}
      </div>
    </div>
  </div>
);

export const UnorderedListMultiLevel = createStory(
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        {/* Component start */}
  <ul class="uds-list">
    <li>
      Lorem ipsum dolor sit amet
      <ul class="uds-list">
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <ul class="uds-list">
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <ul class="uds-list">
                <li>
                  Lorem ipsum dolor sit amet
                  <ul class="uds-list">
                    <li>
                      Lorem ipsum dolor sit amet
                      <ul class="uds-list">
                        <li>
                          Lorem ipsum dolor sit amet
                          <ul class="uds-list">
                            <li>
                              Lorem ipsum dolor sit amet
                              <ul class="uds-list">
                                <li>
                                  Lorem ipsum dolor sit amet
                                  <ul class="uds-list">
                                    <li>
                                      Lorem ipsum dolor sit amet
                                      <ul class="uds-list">
                                        <li>Lorem ipsum dolor sit amet</li>
                                        <li>Lorem ipsum dolor sit amet</li>
                                      </ul>
                                    </li>
                                    <li>Lorem ipsum dolor sit amet</li>
                                  </ul>
                                </li>
                                <li>Lorem ipsum dolor sit amet</li>
                              </ul>
                            </li>
                            <li>Lorem ipsum dolor sit amet</li>
                          </ul>
                        </li>
                        <li>Lorem ipsum dolor sit amet</li>
                      </ul>
                    </li>
                    <li>Lorem ipsum dolor sit amet</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>Lorem ipsum dolor sit amet</li>
          </ul>
        </li>
      </ul>
    </li>
    <li>Lorem ipsum dolor sit amet</li>
  </ul>
  {/* Component end */}
      </div>
    </div>
  </div>
);

export const OrderedList = createStory(
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        {/* Component start */}
  <ol class="uds-list">
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </li>
    <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
    <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Eiusmod tempor lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </li>
    <li>Ipsum dolor sit amet</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </li>
    <li>Dolor sit amet, consectetur adipiscing elit.</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </li>
    <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
    <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Eiusmod tempor lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </li>
    <li>Ipsum dolor sit amet</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </li>
    <li>Dolor sit amet, consectetur adipiscing elit.</li>
    <li>
      Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </li>
    <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
    <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Eiusmod tempor lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </li>
    <li>Ipsum dolor sit amet</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </li>
    <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
    <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Eiusmod tempor lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </li>
    <li>Ipsum dolor sit amet</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </li>
    <li>Dolor sit amet, consectetur adipiscing elit.</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </li>
    <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
    <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Eiusmod tempor lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </li>
    <li>Ipsum dolor sit amet</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </li>
    <li>Dolor sit amet, consectetur adipiscing elit.</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </li>
    <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
    <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Eiusmod tempor lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </li>
    <li>Ipsum dolor sit amet</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </li>
    <li>Dolor sit amet, consectetur adipiscing elit.</li>
    <li>Dolor sit amet, consectetur adipiscing elit.</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </li>
    <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
    <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Eiusmod tempor lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </li>
    <li>Ipsum dolor sit amet</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </li>
    <li>Dolor sit amet, consectetur adipiscing elit.</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </li>
    <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
    <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Eiusmod tempor lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </li>
    <li>Ipsum dolor sit amet</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </li>
    <li>Dolor sit amet, consectetur adipiscing elit.</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </li>
    <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
    <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Eiusmod tempor lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </li>
    <li>Ipsum dolor sit amet</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </li>
    <li>Dolor sit amet, consectetur adipiscing elit.</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </li>
    <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
    <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Eiusmod tempor lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </li>
    <li>Ipsum dolor sit amet</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </li>
    <li>Dolor sit amet, consectetur adipiscing elit.</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </li>
    <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
    <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Eiusmod tempor lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </li>
    <li>Ipsum dolor sit amet</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </li>
    <li>Dolor sit amet, consectetur adipiscing elit.</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </li>
    <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
    <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Eiusmod tempor lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </li>
    <li>Ipsum dolor sit amet</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </li>
    <li>Dolor sit amet, consectetur adipiscing elit.</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </li>
    <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
    <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Eiusmod tempor lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </li>
    <li>Ipsum dolor sit amet</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </li>
    <li>Dolor sit amet, consectetur adipiscing elit.</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </li>
    <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
    <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Eiusmod tempor lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </li>
    <li>Ipsum dolor sit amet</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </li>
    <li>Dolor sit amet, consectetur adipiscing elit.</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </li>
    <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
    <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Eiusmod tempor lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </li>
    <li>Ipsum dolor sit amet</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </li>
    <li>Dolor sit amet, consectetur adipiscing elit.</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </li>
    <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
    <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Eiusmod tempor lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </li>
    <li>Ipsum dolor sit amet</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </li>
    <li>Dolor sit amet, consectetur adipiscing elit.</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </li>
    <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
    <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Eiusmod tempor lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </li>
    <li>Ipsum dolor sit amet</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </li>
    <li>Dolor sit amet, consectetur adipiscing elit.</li>
  </ol>
  {/* Component end */}
      </div>
    </div>
  </div>
);

export const OrderedListMaroonCounter = createStory(
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        {/* Component start */}
  <ol class="uds-list maroon">
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </li>
    <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
    <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
  </ol>
  {/* Component end */}
      </div>
    </div>
  </div>
);

export const OrderedListGray2Background = createStory(
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        {/* Component start */}
  <ol class="uds-list smokemode">
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </li>
    <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
    <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
  </ol>
  {/* Component end */}
      </div>
    </div>
  </div>
);

export const OrderedListGray1Background = createStory(
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        {/* Component start */}
  <ol class="uds-list light-smokemode">
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </li>
    <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
    <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
  </ol>
  {/* Component end */}
      </div>
    </div>
  </div>
);

export const OrderedListGray7Background = createStory(
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        {/* Component start */}
  <ol class="uds-list darkmode">
    <li>Lorem ipsum dolor sit amet</li>
    <li>
      Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </li>
    <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
    <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
  </ol>
  {/* Component end */}
      </div>
    </div>
  </div>
);

export const OrderedListMultiLevel = createStory(
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        {/* Component start */}
  <ol class="uds-list">
    <li>
      Lorem ipsum dolor sit amet
      <ol class="uds-list">
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <ol class="uds-list">
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <ol class="uds-list">
                <li>
                  Lorem ipsum dolor sit amet
                  <ol class="uds-list">
                    <li>
                      Lorem ipsum dolor sit amet
                      <ol class="uds-list">
                        <li>
                          Lorem ipsum dolor sit amet
                          <ol class="uds-list">
                            <li>
                              Lorem ipsum dolor sit amet
                              <ol class="uds-list">
                                <li>
                                  Lorem ipsum dolor sit amet
                                  <ol class="uds-list">
                                    <li>
                                      Lorem ipsum dolor sit amet
                                      <ol class="uds-list">
                                        <li>Lorem ipsum dolor sit amet</li>
                                        <li>Lorem ipsum dolor sit amet</li>
                                      </ol>
                                    </li>
                                    <li>Lorem ipsum dolor sit amet</li>
                                  </ol>
                                </li>
                                <li>Lorem ipsum dolor sit amet</li>
                              </ol>
                            </li>
                            <li>Lorem ipsum dolor sit amet</li>
                          </ol>
                        </li>
                        <li>Lorem ipsum dolor sit amet</li>
                      </ol>
                    </li>
                    <li>Lorem ipsum dolor sit amet</li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>Lorem ipsum dolor sit amet</li>
          </ol>
        </li>
      </ol>
    </li>
    <li>Lorem ipsum dolor sit amet</li>
  </ol>
  {/* Component end */}
      </div>
    </div>
  </div>
);

export const IconList = createStory(
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        {/* Component start */}
  <ul class="uds-list fa-ul">
    <li>
      <span class="fa-li fas fa-rocket"></span>Lorem ipsum dolor sit amet
    </li>
    <li>
      <span class="fa-li fas fa-bus"></span>Consectetur adipiscing lorem ipsum
      dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua.
    </li>
    <li>
      <span class="fa-li fas fa-car"></span>Ipsum dolor sit amet, consectetur
      adipiscing elit.
    </li>
    <li>
      <span class="fa-li fas fa-bicycle"></span>We hide icons from assistive
      technology in these examples, but whether to hide using aria-hidden="true"
      or not should be determined by the developer based on whether the icons
      are intended as decoration only or are intended to convey meaning. See{' '}
      <a href="https://fontawesome.com/v4.7.0/accessibility/">
        Font Awesome Accessibility
      </a>{' '}
      for guidelines.
    </li>
  </ul>
  {/* Component end */}
      </div>
    </div>
  </div>
);

export const IconListMaroonIcon = createStory(
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        {/* Component start */}
  <ul class="uds-list fa-ul maroon">
    <li>
      <span class="fa-li fas fa-rocket"></span>Lorem ipsum dolor sit amet
    </li>
    <li>
      <span class="fa-li fas fa-bus"></span>Consectetur adipiscing lorem ipsum
      dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua.
    </li>
    <li>
      <span class="fa-li fas fa-car"></span>Ipsum dolor sit amet, consectetur
      adipiscing elit.
    </li>
    <li>
      <span class="fa-li fas fa-bicycle"></span>Sed do eiusmod tempor incididunt
      ut lorem ipsum dolor sit amet
    </li>
  </ul>
  {/* Component end */}
      </div>
    </div>
  </div>
);

export const IconListGray7Background = createStory(
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        {/* Component start */}
  <ul class="uds-list fa-ul darkmode">
    <li>
      <span class="fa-li fas fa-rocket"></span>Lorem ipsum dolor sit amet
    </li>
    <li>
      <span class="fa-li fas fa-bus"></span>Consectetur adipiscing lorem ipsum
      dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua.
    </li>
    <li>
      <span class="fa-li fas fa-car"></span>Ipsum dolor sit amet, consectetur
      adipiscing elit.
    </li>
    <li>
      <span class="fa-li fas fa-bicycle"></span>Sed do eiusmod tempor incididunt
      ut lorem ipsum dolor sit amet
    </li>
  </ul>
  {/* Component end */}
      </div>
    </div>
  </div>
);

export const IconListGoldIconGray7Background = createStory(
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        {/* Component start */}
  <ul class="uds-list fa-ul darkmode gold">
    <li>
      <span class="fa-li fas fa-rocket"></span>Lorem ipsum dolor sit amet
    </li>
    <li>
      <span class="fa-li fas fa-bus"></span>Consectetur adipiscing lorem ipsum
      dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua.
    </li>
    <li>
      <span class="fa-li fas fa-car"></span>Ipsum dolor sit amet, consectetur
      adipiscing elit.
    </li>
    <li>
      <span class="fa-li fas fa-bicycle"></span>Sed do eiusmod tempor incididunt
      ut lorem ipsum dolor sit amet
    </li>
  </ul>
  {/* Component end */}
      </div>
    </div>
  </div>
);

export const StepList = createStory(
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        {/* Component start */}
  <ol class="uds-list uds-steplist">
    <li>
      This is a quintenary headline
      <br />
      <span>
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </span>
    </li>
    <li>
      This is a quintenary headline
      <br />
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </span>
    </li>
    <li>
      This is a quintenary headline
      <br />
      <span>
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </span>
    </li>
  </ol>
  {/* Component end */}
      </div>
    </div>
  </div>
);

export const StepListGoldCounter = createStory(
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        {/* Component start */}
  <ol class="uds-list uds-steplist uds-steplist-gold">
    <li>
      This is a quintenary headline
      <br />
      <span>
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </span>
    </li>
    <li>
      This is a quintenary headline
      <br />
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </span>
    </li>
    <li>
      This is a quintenary headline
      <br />
      <span>
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </span>
    </li>
  </ol>
  {/* Component end */}
      </div>
    </div>
  </div>
);

export const StepListMaroonCounter = createStory(
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        {/* Component start */}
  <ol class="uds-list uds-steplist uds-steplist-maroon">
    <li>
      This is a quintenary headline
      <br />
      <span>
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </span>
    </li>
    <li>
      This is a quintenary headline
      <br />
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </span>
    </li>
    <li>
      This is a quintenary headline
      <br />
      <span>
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </span>
    </li>
  </ol>
  {/* Component end */}
      </div>
    </div>
  </div>
);

export const StepListGray2Background = createStory(
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        {/* Component start */}
  <ol class="uds-list uds-steplist smokemode">
    <li>
      This is a quintenary headline
      <br />
      <span>
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </span>
    </li>
    <li>
      This is a quintenary headline
      <br />
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </span>
    </li>
    <li>
      This is a quintenary headline
      <br />
      <span>
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </span>
    </li>
  </ol>
  {/* Component end */}
      </div>
    </div>
  </div>
);

export const StepListGoldCounterGray2Background = createStory(
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        {/* Component start */}
  <ol class="uds-list uds-steplist smokemode uds-steplist-gold">
    <li>
      This is a quintenary headline
      <br />
      <span>
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </span>
    </li>
    <li>
      This is a quintenary headline
      <br />
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </span>
    </li>
    <li>
      This is a quintenary headline
      <br />
      <span>
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </span>
    </li>
  </ol>
  {/* Component end */}
      </div>
    </div>
  </div>
);

export const StepListMaroonCounterGray2Background = createStory(
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        {/* Component start */}
  <ol class="uds-list uds-steplist smokemode uds-steplist-maroon">
    <li>
      This is a quintenary headline
      <br />
      <span>
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </span>
    </li>
    <li>
      This is a quintenary headline
      <br />
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </span>
    </li>
    <li>
      This is a quintenary headline
      <br />
      <span>
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </span>
    </li>
  </ol>
  {/* Component end */}
      </div>
    </div>
  </div>
);

export const StepListGray1Background = createStory(
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        {/* Component start */}
  <ol class="uds-list uds-steplist light-smokemode">
    <li>
      This is a quintenary headline
      <br />
      <span>
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </span>
    </li>
    <li>
      This is a quintenary headline
      <br />
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </span>
    </li>
    <li>
      This is a quintenary headline
      <br />
      <span>
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </span>
    </li>
  </ol>
  {/* Component end */}
      </div>
    </div>
  </div>
);

export const StepListGoldCounterGray1Background = createStory(
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        {/* Component start */}
  <ol class="uds-list uds-steplist light-smokemode uds-steplist-gold">
    <li>
      This is a quintenary headline
      <br />
      <span>
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </span>
    </li>
    <li>
      This is a quintenary headline
      <br />
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </span>
    </li>
    <li>
      This is a quintenary headline
      <br />
      <span>
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </span>
    </li>
  </ol>
  {/* Component end */}
      </div>
    </div>
  </div>
);

export const StepListMaroonCounterGray1Background = createStory(
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        {/* Component start */}
  <ol class="uds-list uds-steplist light-smokemode uds-steplist-maroon">
    <li>
      This is a quintenary headline
      <br />
      <span>
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </span>
    </li>
    <li>
      This is a quintenary headline
      <br />
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </span>
    </li>
    <li>
      This is a quintenary headline
      <br />
      <span>
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </span>
    </li>
  </ol>
  {/* Component end */}
      </div>
    </div>
  </div>
);

export const StepListGray7Background = createStory(
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        {/* Component start */}
  <ol class="uds-list uds-steplist darkmode">
    <li>
      This is a quintenary headline
      <br />
      <span>
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </span>
    </li>
    <li>
      This is a quintenary headline
      <br />
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </span>
    </li>
    <li>
      This is a quintenary headline
      <br />
      <span>
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </span>
    </li>
  </ol>
  {/* Component end */}
      </div>
    </div>
  </div>
);

export const StepListGoldCounterGray7Background = createStory(
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        {/* Component start */}
        <ol class="uds-list uds-steplist darkmode uds-steplist-gold">
          <li>
            This is a quintenary headline
            <br />
            <span>
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </span>
          </li>
          <li>
            This is a quintenary headline
            <br />
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt.
            </span>
          </li>
          <li>
            This is a quintenary headline
            <br />
            <span>
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </span>
          </li>
        </ol>
        {/* Component end */}
      </div>
    </div>
  </div>
);
