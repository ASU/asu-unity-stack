import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';
export default createComponent('Sidebar', 'Atoms', 'Templates');

export const Default = createStory(
  <div class="col-md-4">
    <h3>Lorem ipsum</h3>
    <div
      class="sidebar-toggler"
      data-toggle="collapse"
      data-target="#sidebar-left"
      aria-expanded="false"
      aria-controls="sidebar-left"
    >
      <p>Select Section</p>
      <span class="fas fa-chevron-up" />
    </div>
    <nav id="sidebar-left" class="sidebar collapse" aria-label="Secondary">
      <div class="nav-link-container">
        <a class="nav-link" href="#">
          Default Link
        </a>
      </div>
      <div class="nav-link-container">
        <a class="nav-link is-active" href="#">
          Active Link
        </a>
      </div>
      <div class="card card-foldable">
        <div class="card-header">
          <a
            id="cardOne"
            class="collapsed nav-link"
            href="#cardBodyOne"
            data-toggle="collapse"
            data-target="#cardBodyOne"
            aria-expanded="false"
            aria-controls="cardBodyOne"
          >
            Expandable link sections
            <span class="fas fa-chevron-down ml-1"></span>
          </a>
        </div>
        {/* end .card-header */}
        <div
          id="cardBodyOne"
          class="collapse card-body"
          aria-labelledby="cardOne"
          data-parent=".sidebar"
        >
          <a href="#" class="nav-link">
            A Long Link Total that is two or more lines of text
          </a>
          <a href="#" class="nav-link">
            Another link here
          </a>
          <a href="#" class="nav-link is-active">
            One more link
          </a>
        </div>
        {/* end .card-body */}
      </div>
      {/* end .card */}
      <div class="card card-foldable">
        <div class="card-header">
          <a
            id="cardTwo"
            class="collapsed nav-link"
            data-toggle="collapse"
            href="#cardBodyTwo"
            role="button"
            aria-expanded="false"
            aria-controls="cardBodyTwo"
          >
            There should only be one open section at a time.
            <span class="fas fa-chevron-down ml-1"></span>
          </a>
        </div>
        <div
          id="cardBodyTwo"
          class="collapse card-body"
          aria-labelledby="cardTwo"
          data-parent=".sidebar"
        >
          <a href="#" class="nav-link">
            Work it harder
          </a>
          <a href="#" class="nav-link">
            Make it better
          </a>
          <a href="#" class="nav-link">
            Do it faster
          </a>
          <a href="#" class="nav-link is-active">
            Makes us stronger
          </a>
          <a href="#" class="nav-link">
            More than ever
          </a>
          <a href="#" class="nav-link">
            Hour after
          </a>
          <a href="#" class="nav-link">
            Our work is
          </a>
          <a href="#" class="nav-link">
            Never over
          </a>
        </div>
        {/* end .card-body */}
      </div>
      {/* end .card */}
      <div class="nav-link-container">
        <a class="nav-link" href="#">
          Link between cards
        </a>
      </div>
      <div class="card card-foldable">
        <div class="card-header">
          <a
            id="cardThree"
            class="collapsed nav-link"
            data-toggle="collapse"
            href="#cardBodyThree"
            role="button"
            aria-expanded="false"
            aria-controls="cardBodyThree"
          >
            There be gold inside
            <span class="fas fa-chevron-down ml-1"></span>
          </a>
        </div>
        <div
          id="cardBodyThree"
          class="collapse card-body"
          aria-labelledby="cardThree"
          data-parent=".sidebar"
        >
          <a href="#" class="nav-link">
            Crow's nest square-rigged hands chase
          </a>
          <a href="#" class="nav-link">
            Davy Jones' Locker belaying pin Sail ho mizzen
          </a>
          <a href="#" class="nav-link">
            Lugger to go on account loaded to the gunwalls lad
          </a>
          <a href="#" class="nav-link is-active">
            Skysail fluke overhaul hardtack
          </a>
          <a href="#" class="nav-link">
            Sloop flogging chase guns lee
          </a>
        </div>
        {/* end .card-body */}
      </div>
      {/* end .card */}
      <div class="nav-link-container">
        <a class="nav-link" href="#">
          Default Link
        </a>
      </div>
      <div class="nav-link-container">
        <a class="nav-link" href="#">
          Last Link
        </a>
      </div>
    </nav>
    {/* end .sidebar */}
  </div>
);
