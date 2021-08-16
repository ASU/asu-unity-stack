import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js'
export default createComponent('Accordions');


export const FoldableCardComponent = createStory(
  <div class="container my-5">

    <div class="row">
      <div class="col-md-12 px-4">
        <h4>Foldable Card</h4>
        <p>The <code>.card-foldable</code> class is a wrapper for a generic card which creates a single section that expands and contracts independently of other surrounding foldable cards.</p>
        <ul>
          <li>The cards will conform to the width of the surrounding container.</li>
          <li>There is a recommended character limit of 75 characters for the text within the header of a foldable card.</li>
        </ul>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-md-4 px-0">

        <div class="card card-foldable mt-3">
          <div class="card-header">
            <h4>
              <a id="example-header-1" class="collapsed" data-toggle="collapse" href="#example-content-1" role="button" aria-expanded="false" aria-controls="example-content-1">This card unfolds.
                <span class="fas fa-chevron-up"></span>
              </a>
            </h4>
          </div>
          <div id="example-content-1" class="collapse card-body" aria-labelledby="example-header-1">
            <h4>This is a quaternary headline</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
            <h5>This is a level five headline. There's a fancy word for that too.</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          </div>
        </div>

      </div>
    </div>

    <div class="row mt-4">
      <div class="col-md-6  px-0">

        <div class="card card-foldable mt-3">
          <div class="card-header">
            <h4>
              <a id="example-header-2" class="collapsed" data-toggle="collapse" href="#example-content-2" role="button" aria-expanded="false" aria-controls="example-content-2">This starts off folded and has a really long title which wraps to a second line.
                <span class="fas fa-chevron-up"></span>
              </a>
            </h4>
          </div>
          <div id="example-content-2" class="collapse card-body" aria-labelledby="example-header-2">
            <h4>This is a quaternary headline</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
            <h5>This is a level five headline. There's a fancy word for that too.</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          </div>
        </div>

      </div>
    </div>

    <div class="row mt-4">
      <div class="col-md-9 px-0">

        <div class="card card-foldable mt-3">
          <div class="card-header">
            <h4>
              <a id="example-header-3" data-toggle="collapse" href="#example-content-3" role="button" aria-expanded="true" aria-controls="example-content-3">This card starts off in an unfolded state.
                <span class="fas fa-chevron-up"></span>
              </a>
            </h4>
          </div>
          <div id="example-content-3" class="collapse show card-body" aria-labelledby="example-header-3">
            <h4>This is a quaternary headline</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
            <h5>This is a level five headline. There's a fancy word for that too.</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          </div>
        </div>

      </div>
    </div>

  </div>
);



export const AccordionComponent = createStory(
  <div class="container my-5">

    <div class="row mt-4">
      <div class="col-md-10 px-0">
        <div class="px-4">
          <h4>Accordion</h4>
          <p>With some small modifications of the <strong>foldable card</strong> code, a series of foldable cards can be connected together to form an accordion.</p>
          <ul style={{padding:'1rem 3rem'}}>
            <li>Wrap the collection of foldable cards with an element containing the class of <code>.accordion</code> and a unique ID.</li>
            <li>Include the <code>data-parent</code> attribute within the card body element to properly toggle the folded/expanded state.</li>
          </ul>
        </div>
        <div class="accordion" id="accordionExample">

          <div class="card card-foldable mt-3">
            <div class="card-header">
              <h4>
                <a id="cardOne" class="collapsed" href="#cardBodyOne" data-toggle="collapse" data-target="#cardBodyOne" role="button" aria-expanded="false" aria-controls="cardBodyOne">These are sections within an accordion.
                  <span class="fas fa-chevron-up"></span>
                </a>
              </h4>
            </div>{/* end .card-header */}
            <div id="cardBodyOne" class="collapse card-body" aria-labelledby="cardOne" data-parent="#accordionExample">
              <h4>Quatrenary Headline</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
              <h5>This is a level five headline. There's a fancy word for that too.</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
            </div>{/* end .card-body */}
          </div>{/* end .card */}

          <div class="card card-foldable mt-3">
            <div class="card-header">
              <h4>
                <a id="cardTwo" class="collapsed" data-toggle="collapse" href="#cardBodyTwo" role="button" aria-expanded="false" aria-controls="cardBodyTwo">There should only be one open section at a time.
                  <span class="fas fa-chevron-up"></span>
                </a>
              </h4>
            </div>
            <div id="cardBodyTwo" class="collapse card-body" aria-labelledby="cardTwo" data-parent="#accordionExample">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
              <h5>This is a level five headline. There's a fancy word for that too.</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            </div>{/* end .card-body */}
          </div>{/* end .card */}

          <div class="card card-foldable mt-3">
            <div class="card-header">
              <h4>
                <a id="cardThree" class="collapsed" data-toggle="collapse" href="#cardBodyThree" role="button" aria-expanded="false" aria-controls="cardBodyThree">The inactive panels should collapse while the active one expands.
                  <span class="fas fa-chevron-up"></span>
                </a>
              </h4>
            </div>
            <div id="cardBodyThree" class="collapse card-body" aria-labelledby="cardThree" data-parent="#accordionExample">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
              <h5>This is a level five headline. There's a fancy word for that too.</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
            </div>{/* end .card-body */}
          </div>{/* end .card */}

        </div>{/* end .accordion */}

      </div>
    </div>

  </div>
);


export const AccordionWithColorCombinationsComponent = createStory(
  <div class="container my-5">
    <div class="row mt-4">
      <div class="col-md-10 px-0">
        <div class="px-4">
          <h4>Accordion with color combinations</h4>
          <p>With some small modifications of the <strong>foldable card</strong> code, different color styles can be applied.</p>

          <p>
            Identify the element wich has the class <code>.card-foldable</code>
          </p>
          <ul style={{padding:'0 3rem'}}>
            <li>Gold is the default style no change needed</li>
            <li>To set the marron color add the class <code>.card-maroon</code></li>
            <li>To set the gray color add the class <code>.card-gray</code></li>
            <li>To set the dark color add the class <code>.card-dark</code></li>
          </ul>
        </div>
        <div class="accordion" id="accordionExample">

          <div class="card card-foldable mt-3">
            <div class="card-header">
              <h4>
                <a id="cardOne" class="collapsed" href="#cardBodyOne" data-toggle="collapse" data-target="#cardBodyOne" role="button" aria-expanded="false" aria-controls="cardBodyOne">
                  Accordion gold color (default).
                  <span class="fas fa-chevron-up"></span>
                </a>
              </h4>
            </div>{/* end .card-header */}
            <div id="cardBodyOne" class="collapse card-body" aria-labelledby="cardOne" data-parent="#accordionExample">
              <h4>Quatrenary Headline</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
              <h5>This is a level five headline. There's a fancy word for that too.</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
            </div>{/* end .card-body */}
          </div>{/* end .card */}

          <div class="card card-foldable mt-3 card-maroon">
            <div class="card-header">
              <h4>
                <a id="cardTwo" class="collapsed" data-toggle="collapse" href="#cardBodyTwo" role="button" aria-expanded="false" aria-controls="cardBodyTwo">
                  Accordion maroon color.
                  <span class="fas fa-chevron-up"></span>
                </a>
              </h4>
            </div>
            <div id="cardBodyTwo" class="collapse card-body" aria-labelledby="cardTwo" data-parent="#accordionExample">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
              <h5>This is a level five headline. There's a fancy word for that too.</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            </div>{/* end .card-body */}
          </div>{/* end .card */}

          <div class="card card-foldable mt-3 card-gray">
            <div class="card-header">
              <h4>
                <a id="cardThree" class="collapsed" data-toggle="collapse" href="#cardBodyThree" role="button" aria-expanded="false" aria-controls="cardBodyThree">
                  Accordion gray color.
                  <span class="fas fa-chevron-up"></span>
                </a>
              </h4>
            </div>
            <div id="cardBodyThree" class="collapse card-body" aria-labelledby="cardThree" data-parent="#accordionExample">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
              <h5>This is a level five headline. There's a fancy word for that too.</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
            </div>{/* end .card-body */}
          </div>{/* end .card */}

          <div class="card card-foldable mt-3 card-dark">
            <div class="card-header">
              <h4>
                <a id="cardFour" class="collapsed" href="#cardBodyFour" data-toggle="collapse" data-target="#cardBodyFour" role="button" aria-expanded="false" aria-controls="cardBodyFour">
                  Accordion dark color.
                  <span class="fas fa-chevron-up"></span>
                </a>
              </h4>
            </div>{/* end .card-header */}
            <div id="cardBodyFour" class="collapse card-body" aria-labelledby="cardFour" data-parent="#accordionExample">
              <h4>Quatrenary Headline</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
              <h5>This is a level five headline. There's a fancy word for that too.</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
            </div>{/* end .card-body */}
          </div>{/* end .card */}

        </div>{/* end .accordion */}
      </div>
    </div>
  </div>
);


export const AccordionWithIconsComponent = createStory(
  <div class="container my-5">
    <div class="row mt-4">
      <div class="col-md-10 px-0">
        <div class="px-4">
          <h4>Accordion with icons</h4>
          <p>With some small modifications of the <strong>foldable card</strong> code, different icons can be inserted.</p>

          <ul style={{padding:'0 3rem'}}>
            <li>Identify the card which you want to add the icon</li>
            <li>Identify element header with class <code>.card-header</code>
              and add the class <code>.card-header-icon</code>
            </li>
            <li>
              Wrap the cart title content into a new
              <code>
                &lt;span class=&quot;card-icon&quot;&gt; ...content  &lt;/span&gt;
              </code> tag
              <br/> Example:
              <br/>

              <code style={{background: '#e3e1e1', display: 'block', padding: '5px', border: '1px solid gray'}}>
              <pre>
                &lt;div class=&quot;card card-foldable mt-3&quot;&gt;
                  &lt;div class=&quot;card-header card-header-icon&quot;&gt;
                    &lt;h4&gt;
                      &lt;a
                        id=&quot;cardOne&quot;
                        class=&quot;collapsed&quot;
                        href=&quot;#cardBodyOne&quot;
                        data-toggle=&quot;collapse&quot;
                        data-target=&quot;#cardBodyOne&quot;
                        role=&quot;button&quot;
                        aria-expanded=&quot;false&quot;
                        aria-controls=&quot;cardBodyOne&quot;&gt;

                        &lt;span class=&quot;card-icon&quot;&gt;
                            &lt;i class=&quot;fas fa-dog mr-2&quot; role=&quot;img&quot; aria-label=&quot;...&quot;&gt;&lt;/i&gt;
                            Accordion with icon and gold color.
                        &lt;/span&gt;

                        &lt;span class=&quot;fas fa-chevron-up&quot;&gt;&lt;/span&gt;

                      &lt;/a&gt;
                    &lt;/h4&gt;
                  &lt;/div&gt;
                  </pre>
                  </code>
            </li>
          </ul>
        </div>
        <div class="accordion" id="accordionExample">

          <div class="card card-foldable mt-3">
            <div class="card-header card-header-icon">
              <h4>
                <a id="cardOne" class="collapsed" href="#cardBodyOne" data-toggle="collapse" data-target="#cardBodyOne" role="button" aria-expanded="false" aria-controls="cardBodyOne">
                  <span class="card-icon">
                      <i class="fas fa-dog mr-2" role="img" aria-label="..."></i>
                      Accordion with icon and gold color.
                  </span>
                  <span class="fas fa-chevron-up"></span>
                </a>
              </h4>
            </div>{/* end .card-header */}
            <div id="cardBodyOne" class="collapse card-body" aria-labelledby="cardOne" data-parent="#accordionExample">
              <h4>Quatrenary Headline</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
              <h5>This is a level five headline. There's a fancy word for that too.</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
            </div>{/* end .card-body */}
          </div>{/* end .card */}

          <div class="card card-foldable mt-3 card-maroon">
            <div class="card-header card-header-icon">
              <h4>
                <a id="cardTwo" class="collapsed" data-toggle="collapse" href="#cardBodyTwo" role="button" aria-expanded="false" aria-controls="cardBodyTwo">
                  <span class="card-icon">
                      <i class="fas fa-cat mr-2" role="img" aria-label="..."></i>
                      Accordion with icon and maroon color.
                  </span>
                  <span class="fas fa-chevron-up"></span>
                </a>
              </h4>
            </div>
            <div id="cardBodyTwo" class="collapse card-body" aria-labelledby="cardTwo" data-parent="#accordionExample">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
              <h5>This is a level five headline. There's a fancy word for that too.</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            </div>{/* end .card-body */}
          </div>{/* end .card */}

        </div>{/* end .accordion */}
      </div>
    </div>
  </div>
);


export const DisableFoldAtBreakpointComponent = createStory(
  <div class="container my-5">

    <div class="row">
      <div class="col px-4">

        <h4>Foldable cards, disabled at breakpoints</h4>
        <p>Several utility class were created to allow an foldable card to display as a fully expanded normal card upon reaching a screen size of a specific breakpoint.</p>

        <p>Use a variant of the <code>.desktop-disable</code> along with a <code>.card-foldable</code> class to enable the functionality.</p>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-md-7 px-0 mb-4">
        <div class="card card-foldable desktop-disable-md">
          <div class="card-header">
            <h4>
              <a id="example-header-1" data-toggle="collapse" href="#example-content-1" role="button" aria-expanded="false" aria-controls="example-content-1">This should look like a normal card until the md breakpoint
                <span class="fas fa-chevron-up"></span>
              </a>
            </h4>
          </div>
          <div id="example-content-1" class="collapse card-body" aria-labelledby="example-header-1">
          <p>This uses the <code>.desktop-disable-md</code> class.</p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
            elit. Aenean commodo ligula eget dolor. Aenean massa.
            Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem.</p>
          </div>
        </div>
      </div>{/* end .col */}

      <div class="col-md-7 px-0 mb-4">
        <div class="card card-foldable desktop-disable-lg">
          <div class="card-header">
            <h4>
              <a id="example-header-2" data-toggle="collapse" href="#example-content-2" role="button" aria-expanded="false" aria-controls="example-content-2">This will become an accordion at the lg breakpoint.
                <span class="fas fa-chevron-up"></span>
              </a>
            </h4>
          </div>
          <div id="example-content-2" class="collapse card-body" aria-labelledby="example-header-2">
            <p>This uses the <code>.desktop-disable-lg</code> class.</p>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
            elit. Aenean commodo ligula eget dolor. Aenean massa.
            Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem.</p>
          </div>
        </div>
      </div>{/* end .col */}

      <div class="col-md-7 px-0 mb-4">
        <div class="card card-foldable desktop-disable-xl">
          <div class="card-header">
            <h4>
              <a id="example-header-3" data-toggle="collapse" href="#example-content-3" role="button" aria-expanded="false" aria-controls="example-content-3">Collapses to an accordion at the xl breakpoint
                <span class="fas fa-chevron-up"></span>
              </a>
            </h4>
          </div>
          <div id="example-content-3" class="collapse card-body" aria-labelledby="example-header-3">
          <p>This uses the <code>.desktop-disable-xl</code> class.</p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
            elit. Aenean commodo ligula eget dolor. Aenean massa.
            Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem.</p>
          </div>
        </div>

      </div>
    </div>
  </div>
);

