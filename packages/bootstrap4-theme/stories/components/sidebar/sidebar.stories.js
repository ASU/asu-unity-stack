import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

storiesOf('Components/Sidebar', module)
  .addParameters({
    happo: false,
  })

  .add('Sidebar Navigation', () => `

  <div class="container my-5">

    <div class="row mt-4">
      <div class="col-md-4">

        <nav id="sidebar-left" class="sidebar accordion" aria-label="Secondary">

          <a class="nav-link" href="#">Default Link</a>
          <a class="nav-link active" href="#">Active Link</a>

          <div class="card card-foldable">
            <div class="card-header">
              <h4>
                <a id="cardOne" class="collapsed" href="#cardBodyOne" data-toggle="collapse" data-target="#cardBodyOne" role="button" aria-expanded="false" aria-controls="cardBodyOne">Expandable link section
                  <span class="fas fa-chevron-up"></span>
                </a>
              </h4>
            </div><!-- end .card-header -->
            <div id="cardBodyOne" class="collapse card-body" aria-labelledby="cardOne" data-parent=".sidebar">
              <a href="#" class="nav-link">A Long Link Total that is two or more lines of text</a>
              <a href="https://espn.com" class="nav-link">Another link here</a>
              <a href="#" class="nav-link active">One more link</a>
            </div><!-- end .card-body -->
          </div><!-- end .card -->

          <div class="card card-foldable">
            <div class="card-header">
              <h4>
                <a id="cardTwo" class="collapsed" data-toggle="collapse" href="#cardBodyTwo" role="button" aria-expanded="false" aria-controls="cardBodyTwo">There should only be one open section at a time.
                  <span class="fas fa-chevron-up"></span>
                </a>
              </h4>
            </div>
            <div id="cardBodyTwo" class="collapse card-body" aria-labelledby="cardTwo" data-parent=".sidebar">
              <a href="#" class="nav-link">Work it harder</a>
              <a href="#" class="nav-link">Make it better</a>
              <a href="#" class="nav-link">Do it faster</a>
              <a href="#" class="nav-link active">Makes us stronger</a>
              <a href="#" class="nav-link">More than ever</a>
              <a href="#" class="nav-link">Hour after</a>
              <a href="#" class="nav-link">Our work is</a>
              <a href="#" class="nav-link">Never over</a>
            </div><!-- end .card-body -->
          </div><!-- end .card -->

          <a class="nav-link" href="#">Link between cards</a>

          <div class="card card-foldable">
            <div class="card-header">
              <h4>
                <a id="cardThree" class="collapsed" data-toggle="collapse" href="#cardBodyThree" role="button" aria-expanded="false" aria-controls="cardBodyThree">There be gold inside
                  <span class="fas fa-chevron-up"></span>
                </a>
              </h4>
            </div>
            <div id="cardBodyThree" class="collapse card-body" aria-labelledby="cardThree" data-parent=".sidebar">
              <a href="#" class="nav-link">Crow's nest square-rigged hands chase</a>
              <a href="#" class="nav-link">Davy Jones' Locker belaying pin Sail ho mizzen</a>
              <a href="#" class="nav-link">Lugger to go on account loaded to the gunwalls lad</a>
              <a href="#" class="nav-link active">Skysail fluke overhaul hardtack</a>
              <a href="#" class="nav-link">Sloop flogging chase guns lee</a>
            </div><!-- end .card-body -->
          </div><!-- end .card -->

          <a class="nav-link" href="#">Default Link</a>
          <a class="nav-link" href="#">Last Link</a>

        </nav><!-- end .sidebar -->

      </div><!-- end .col -->

      <div class="col-md-8">

        <h1>The page title</h1>
        <p>But this story isn't about the page content itself. Rather, you should focus your attention on the sidebar navigation element to the left.</p>
        <p>Foldable cards can be mixed in with static navigation links to create a section of content which behaves like an accordion and reveals navigation items which are nested two levels deep.</p>
        <h2>Launching Azog forsaken strike 890.</h2>
        <p>Seat accorded Longshanks. You cannot hide. I see you. There is no life in the void. Only death. Tough Narsil enchanted. Succumbed Rhosgobel raiding attached thirty-four tasty gangrel piece cutting athletic.</p>
        <h3>Approaching courteous Seeing-stones?</h3>
        <p>Backs hate advantage nine standing heirlooms Anduin stained appointed sunrise unleash. Elros within wall naked pointy you! Sam... I'm glad you are with me.</p>
        <h4>Day's thereof Westfold!</h4>
        <p>Safekeeping Andûril blue earned stole warmongering feast they'd. A wizard is never late, Frodo Baggins. Nor is he early. He arrives precisely when he means to. Thofin watch flatten ensnare saws marshland share. Hatched moves Gríma wealth watchful?</p>
        <h5>Lake-men seriously?</h5>
        <p>Problem Edge strengths hire. Fly, you fools! Haleth piety given dicky apothecary mood eating waged.</p>
        <h6>Keys Goblinses misery tubers.</h6>
        <p>Hear my voice. Come back to the light. Engage Balrog awoke brink nut commoners penalty.</p>
        <ul>
          <li>Garden Haradrim solid tact dignity fists reclaim.</li>
          <li>Troop visitors Sauron the White tail wish creamy deliberate may.</li>
          <li>Loves serious inferno begged changing Ligulas.</li>
          <li>Isildur plate corks bright weapon sordid hasty!</li>
          <li>Sires unhappy future holiday union approve Proudfeet.</li>
        </ul>
        <p>Words overflowing break nearly deposit insult portents she World. Hear my voice. Come back to the light.</p>
        <ol>
          <li>Nameless yes worms Noldorin bird unite.</li>
          <li>Niceties burns buy Tilda high pain.</li>
          <li>Beheading senses sight sacks Meriadoc still?</li>
          <li>Frodo hand swords worse scent ashamed.</li>
          <li>Apple patrol poisonous ruin into odd Gríma?</li>
        </ol>
        <p>Content whyfors bled behaving weapons swept l lower attending Shirelings waybread. Do not take me for some conjurer of cheap tricks. Credit Frodo cheated.</p>
        <p>Eluded belong particularly firm hello oversized industry underestimate tale Council nights bet. Allies melt watched sleeping letter Arwen Evenstar days invented. You shall be the Fellowship of the Ring. Kingsfoil later guess diminish lament firm announce funeral. Withdraw forgave stepped age moment interesting rubbish tingle Fili. Bestowing band negotiations foes spent without liege authority mother Understand counted trouble-making. Fill Kingsfoil nobody's further. Dung Wilds wonderful armies craft heirlooms defeats?</p>

      </div><!-- end .col -->
    </div><!-- end .row -->

  </div>

  `)
