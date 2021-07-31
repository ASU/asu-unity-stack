import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js'
export default createComponent('Sidebar');


export const UnorderedList = createStory(
  <div class="container my-5">
    <div class="row mt-4">
      <div class="col-md-12 pb-4"><h1>Take a look at the sidebar</h1></div>
      <div class="col-md-4">
        <h3>Lorem ipsum</h3>
        <div class="sidebar-toggler" data-toggle="collapse" data-target="#sidebar-left" aria-expanded="false" aria-controls="sidebar-left">
          <p>Select Section</p>
          <span class="fas fa-chevron-up"/>
        </div>
        <nav id="sidebar-left" class="sidebar collapse" aria-label="Secondary">
          <div class="nav-link-container">
            <a class="nav-link" href="#">Default Link</a>
          </div>
          <div class="nav-link-container">
            <a class="nav-link is-active" href="#">Active Link</a>
          </div>
          <div class="card card-foldable">
            <div class="card-header">
                <a id="cardOne" class="collapsed nav-link" href="#cardBodyOne" data-toggle="collapse" data-target="#cardBodyOne" aria-expanded="false" aria-controls="cardBodyOne">Expandable link sections
                  <span class="fas fa-chevron-down ml-1"></span>
                </a>
            </div>{ /* end .card-header */ }
            <div id="cardBodyOne" class="collapse card-body" aria-labelledby="cardOne" data-parent=".sidebar">
              <a href="#" class="nav-link">A Long Link Total that is two or more lines of text</a>
              <a href="#" class="nav-link">Another link here</a>
              <a href="#" class="nav-link is-active">One more link</a>
            </div>{ /* end .card-body */ }
          </div>{ /* end .card */ }
          <div class="card card-foldable">
            <div class="card-header">
                  <a id="cardTwo" class="collapsed nav-link" data-toggle="collapse" href="#cardBodyTwo" role="button" aria-expanded="false" aria-controls="cardBodyTwo">There should only be one open section at a time.
                    <span class="fas fa-chevron-down ml-1"></span>
                  </a>
            </div>
            <div id="cardBodyTwo" class="collapse card-body" aria-labelledby="cardTwo" data-parent=".sidebar">
              <a href="#" class="nav-link">Work it harder</a>
              <a href="#" class="nav-link">Make it better</a>
              <a href="#" class="nav-link">Do it faster</a>
              <a href="#" class="nav-link is-active">Makes us stronger</a>
              <a href="#" class="nav-link">More than ever</a>
              <a href="#" class="nav-link">Hour after</a>
              <a href="#" class="nav-link">Our work is</a>
              <a href="#" class="nav-link">Never over</a>
            </div>{ /* end .card-body */ }
          </div>{ /* end .card */ }
          <div class="nav-link-container">
            <a class="nav-link" href="#">Link between cards</a>
          </div>
          <div class="card card-foldable">
            <div class="card-header">
                  <a id="cardThree" class="collapsed nav-link" data-toggle="collapse" href="#cardBodyThree" role="button" aria-expanded="false" aria-controls="cardBodyThree">There be gold inside
                  <span class="fas fa-chevron-down ml-1"></span>
                </a>
            </div>
            <div id="cardBodyThree" class="collapse card-body" aria-labelledby="cardThree" data-parent=".sidebar">
              <a href="#" class="nav-link">Crow's nest square-rigged hands chase</a>
              <a href="#" class="nav-link">Davy Jones' Locker belaying pin Sail ho mizzen</a>
              <a href="#" class="nav-link">Lugger to go on account loaded to the gunwalls lad</a>
              <a href="#" class="nav-link is-active">Skysail fluke overhaul hardtack</a>
              <a href="#" class="nav-link">Sloop flogging chase guns lee</a>
            </div>{ /* end .card-body */ }
          </div>{ /* end .card */ }
          <div class="nav-link-container">
            <a class="nav-link" href="#">Default Link</a>
          </div>
          <div class="nav-link-container">
            <a class="nav-link" href="#">Last Link</a>
          </div>
        </nav>{ /* end .sidebar */ }
      </div>{ /* end .col */ }
      <div class="col-md-8 mt-2">
        <p>This story isn't about the page content itself. Rather, you should focus your attention on the sidebar navigation element to the left.</p>
        <p>Foldable cards can be mixed in with static navigation links to create a section of content which behaves like an accordion and reveals navigation items which are nested two levels deep.</p>
        <h2>Ligula aenean leo porttitor eu conseq</h2>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
        elit. Aenean commodo ligula eget dolor. Aenean massa
        <strong>strong</strong>. Cum sociis natoque penatibus
        et magnis dis parturient montes, nascetur ridiculus
        mus. Donec quam felis, ultricies nec, pellentesque
        eu, pretium quis, sem. Nulla consequat massa quis
        enim. Donec pede justo, fringilla vel, aliquet nec,
        vulputate eget, arcu. In enim justo, rhoncus ut,
        imperdiet a, venenatis vitae, justo. Nullam dictum
        felis eu pede <a class="external ext" href="#">link</a>
        mollis pretium. Integer tincidunt. Cras dapibus.
        Vivamus elementum semper nisi. Aenean vulputate
        eleifend tellus. Aenean leo ligula, porttitor eu,
        consequat vitae, eleifend ac, enim. Aliquam lorem ante,
        dapibus in, viverra quis, feugiat a, tellus. Phasellus
        viverra nulla ut metus varius laoreet. Quisque rutrum.
        Aenean imperdiet. Etiam ultricies nisi vel augue.
        Curabitur ullamcorper ultricies nisi.</p>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
        elit. Aenean commodo ligula eget dolor. Aenean massa.
        Cum sociis natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem.</p>
        <h2>Aenean commodo ligula eget dolor aenean massa</h2>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
        elit. Aenean commodo ligula eget dolor. Aenean massa.
        Cum sociis natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem.</p>
        <ul class="uds-list">
          <li>Lorem ipsum dolor sit amet consectetuer.</li>
          <li>Aenean commodo ligula eget dolor.</li>
          <li>Aenean massa cum sociis natoque penatibus.</li>
        </ul>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
        elit. Aenean commodo ligula eget dolor. Aenean massa.
        Cum sociis natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem.</p>
        <blockquote>
        Lorem ipsum dolor sit amet, consectetuer
        adipiscing elit. Aenean commodo ligula eget dolor.
        Aenean massa <strong>strong</strong>. Cum sociis
        natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Donec quam felis, ultricies
        nec, pellentesque eu, pretium quis, sem. Nulla consequat
        massa quis enim. Donec pede justo, fringilla vel,
        aliquet nec, vulputate eget, arcu. In <em>em</em>
        enim justo, rhoncus ut, imperdiet a, venenatis vitae,
        justo. Nullam <a class="external ext" href="#">link</a>
        dictum felis eu pede mollis pretium.
        </blockquote>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
        elit. Aenean commodo ligula eget dolor. Aenean massa.
        Cum sociis natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem.</p>
      </div>{ /* end .col */ }
    </div>{ /* end .row */ }
  </div>
);
