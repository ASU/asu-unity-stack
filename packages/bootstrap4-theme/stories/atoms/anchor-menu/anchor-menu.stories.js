import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';
export default createComponent('Anchor Menu', 'Atoms');
import { initializeAnchorMenu } from './anchor-menu';
import { Basic } from '../../organisms/global-header/global-header.components.js';

export const AnchorMenu = createStory(
  <div>
    <div class="container-fluid">
      {Basic}

      <div class="uds-hero-lg has-btn-row">
        <img
          class="hero"
          src="https://source.unsplash.com/random/1920x1200"
          alt="Sample placeholder image."
        />
        <h1>
          <span class="highlight-gold">Gettysburg Address</span>
        </h1>
        <div class="content">
          <p class="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div class="btn-row">
          <a href="#" class="btn btn-default btn-gold">
            Read the 13th Amendment
          </a>
        </div>
      </div>

      <div
        id="uds-anchor-menu"
        class="uds-anchor-menu uds-anchor-menu-expanded-lg"
      >
        <div class="container-xl">
          <div class="uds-anchor-menu-wrapper">
            <h4
              data-toggle="collapse"
              data-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              On This Page: <span class="fas fa-chevron-down"></span>
            </h4>
            <div id="collapseExample" class="card card-body collapse">
              <nav class="nav" aria-label="Same Page">
                <a class="nav-link" href="#first">
                  <span class="fas fa-link"></span>Anchor item
                </a>
                <a class="nav-link" href="#second">
                  <span class="fas fa-link"></span>Anchor item
                </a>
                <a class="nav-link" href="#third">
                  <span class="fa fa-link"></span>Anchor item
                </a>
                <a class="nav-link" href="#fourth">
                  <span class="fa fa-link"></span>Anchor item
                </a>
                <a class="nav-link" href="#fifth">
                  <span class="fa fa-link"></span>Anchor item
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12 pb-5">
          <div class="py-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            consectetur lectus nec laoreet elementum. Mauris ut sapien nibh.
            Aenean consequat pellentesque rutrum. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Aliquam sollicitudin neque vel risus volutpat, nec hendrerit nisl
            tempus. Etiam suscipit purus imperdiet, ultrices enim et, maximus
            lectus. Aenean hendrerit, nibh eget vehicula sollicitudin, nulla
            tellus accumsan justo, quis gravida sapien quam ultricies magna.
            Nulla ullamcorper odio id risus pretium, sed ornare turpis luctus.
            Integer ac semper ex, ac convallis lorem. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            In eleifend lobortis lacus sed efficitur. Ut rhoncus consectetur
            accumsan. Nulla massa lorem, maximus eu venenatis in, ultrices sit
            amet purus. Duis et rutrum mi, id dictum risus. Fusce suscipit metus
            congue, fermentum sem non, molestie sem. Donec tortor quam,
            imperdiet vel dui at, finibus vestibulum neque. Nulla facilisi. Sed
            fermentum vulputate enim, at aliquam diam tincidunt vitae. Nunc
            eleifend volutpat pellentesque. Aliquam consectetur enim ac lectus
            dapibus bibendum. Cras eget erat magna. Donec turpis quam, efficitur
            in leo in, elementum interdum lorem. Duis tempor tempor nulla, at
            faucibus leo commodo vel. Nunc in tincidunt diam, ac ultrices
            mauris. Nunc quis vehicula tellus. Mauris vehicula gravida eros,
            eget facilisis elit viverra faucibus. Sed viverra rhoncus erat, eget
            dignissim orci tincidunt et. Nullam sodales elit eu metus lobortis,
            ut posuere lectus convallis. Maecenas id lectus id ligula bibendum
            congue ac ut risus. Integer eget neque volutpat, mollis nisi sed,
            lobortis mauris. In est metus, rhoncus in tristique nec, blandit sed
            mauris. Maecenas non risus mauris. Nunc pretium urna sit amet sapien
            venenatis mollis. Sed facilisis libero nisi, fermentum malesuada
            magna commodo at. Phasellus sed hendrerit ipsum. Donec ultrices
            sodales posuere. Proin a finibus mauris, non ornare arcu. Donec eget
            cursus augue. Nulla vel porta massa. Ut hendrerit mauris a suscipit
            ullamcorper. Donec sagittis tellus non ultrices feugiat. Mauris
            sodales, eros id vulputate porttitor, nunc augue aliquet tortor,
            eget mattis turpis mauris nec enim. Proin ac rhoncus lacus. Aliquam
            venenatis lorem ac arcu commodo tristique id eget dolor. Nam gravida
            nisi vel purus interdum, faucibus suscipit arcu placerat. Phasellus
            congue velit et quam elementum, a fermentum velit efficitur. Nunc
            lobortis, lacus at faucibus vestibulum, mauris nisl facilisis odio,
            at elementum nisi mauris nec tortor. Nullam commodo pellentesque
            ante ac porttitor. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed feugiat neque magna. Suspendisse potenti. Duis
            dictum ac elit at elementum. In sit amet hendrerit lacus.
          </div>

          <div id="first" class="py-2">
            First. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus consectetur lectus nec laoreet elementum. Mauris ut sapien
            nibh. Aenean consequat pellentesque rutrum. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Aliquam sollicitudin neque vel risus volutpat, nec
            hendrerit nisl tempus. Etiam suscipit purus imperdiet, ultrices enim
            et, maximus lectus. Aenean hendrerit, nibh eget vehicula
            sollicitudin, nulla tellus accumsan justo, quis gravida sapien quam
            ultricies magna. Nulla ullamcorper odio id risus pretium, sed ornare
            turpis luctus. Integer ac semper ex, ac convallis lorem. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. In eleifend lobortis lacus sed efficitur. Ut rhoncus
            consectetur accumsan. Nulla massa lorem, maximus eu venenatis in,
            ultrices sit amet purus. Duis et rutrum mi, id dictum risus. Fusce
            suscipit metus congue, fermentum sem non, molestie sem. Donec tortor
            quam, imperdiet vel dui at, finibus vestibulum neque. Nulla
            facilisi. Sed fermentum vulputate enim, at aliquam diam tincidunt
            vitae. Nunc eleifend volutpat pellentesque. Aliquam consectetur enim
            ac lectus dapibus bibendum. Cras eget erat magna. Donec turpis quam,
            efficitur in leo in, elementum interdum lorem. Duis tempor tempor
            nulla, at faucibus leo commodo vel. Nunc in tincidunt diam, ac
            ultrices mauris. Nunc quis vehicula tellus. Mauris vehicula gravida
            eros, eget facilisis elit viverra faucibus. Sed viverra rhoncus
            erat, eget dignissim orci tincidunt et. Nullam sodales elit eu metus
            lobortis, ut posuere lectus convallis. Maecenas id lectus id ligula
            bibendum congue ac ut risus. Integer eget neque volutpat, mollis
            nisi sed, lobortis mauris. In est metus, rhoncus in tristique nec,
            blandit sed mauris. Maecenas non risus mauris. Nunc pretium urna sit
            amet sapien venenatis mollis. Sed facilisis libero nisi, fermentum
            malesuada magna commodo at. Phasellus sed hendrerit ipsum. Donec
            ultrices sodales posuere. Proin a finibus mauris, non ornare arcu.
            Donec eget cursus augue. Nulla vel porta massa. Ut hendrerit mauris
            a suscipit ullamcorper. Donec sagittis tellus non ultrices feugiat.
            Mauris sodales, eros id vulputate porttitor, nunc augue aliquet
            tortor, eget mattis turpis mauris nec enim. Proin ac rhoncus lacus.
            Aliquam venenatis lorem ac arcu commodo tristique id eget dolor. Nam
            gravida nisi vel purus interdum, faucibus suscipit arcu placerat.
            Phasellus congue velit et quam elementum, a fermentum velit
            efficitur. Nunc lobortis, lacus at faucibus vestibulum, mauris nisl
            facilisis odio, at elementum nisi mauris nec tortor. Nullam commodo
            pellentesque ante ac porttitor. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed feugiat neque magna. Suspendisse
            potenti. Duis dictum ac elit at elementum. In sit amet hendrerit
            lacus.
          </div>

          <div id="second" class="py-2">
            Second. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus consectetur lectus nec laoreet elementum. Mauris ut sapien
            nibh. Aenean consequat pellentesque rutrum. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Aliquam sollicitudin neque vel risus volutpat, nec
            hendrerit nisl tempus. Etiam suscipit purus imperdiet, ultrices enim
            et, maximus lectus. Aenean hendrerit, nibh eget vehicula
            sollicitudin, nulla tellus accumsan justo, quis gravida sapien quam
            ultricies magna. Nulla ullamcorper odio id risus pretium, sed ornare
            turpis luctus. Integer ac semper ex, ac convallis lorem. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. In eleifend lobortis lacus sed efficitur. Ut rhoncus
            consectetur accumsan. Nulla massa lorem, maximus eu venenatis in,
            ultrices sit amet purus. Duis et rutrum mi, id dictum risus. Fusce
            suscipit metus congue, fermentum sem non, molestie sem. Donec tortor
            quam, imperdiet vel dui at, finibus vestibulum neque. Nulla
            facilisi. Sed fermentum vulputate enim, at aliquam diam tincidunt
            vitae. Nunc eleifend volutpat pellentesque. Aliquam consectetur enim
            ac lectus dapibus bibendum. Cras eget erat magna. Donec turpis quam,
            efficitur in leo in, elementum interdum lorem. Duis tempor tempor
            nulla, at faucibus leo commodo vel. Nunc in tincidunt diam, ac
            ultrices mauris. Nunc quis vehicula tellus. Mauris vehicula gravida
            eros, eget facilisis elit viverra faucibus. Sed viverra rhoncus
            erat, eget dignissim orci tincidunt et. Nullam sodales elit eu metus
            lobortis, ut posuere lectus convallis. Maecenas id lectus id ligula
            bibendum congue ac ut risus. Integer eget neque volutpat, mollis
            nisi sed, lobortis mauris. In est metus, rhoncus in tristique nec,
            blandit sed mauris. Maecenas non risus mauris. Nunc pretium urna sit
            amet sapien venenatis mollis. Sed facilisis libero nisi, fermentum
            malesuada magna commodo at. Phasellus sed hendrerit ipsum. Donec
            ultrices sodales posuere. Proin a finibus mauris, non ornare arcu.
            Donec eget cursus augue. Nulla vel porta massa. Ut hendrerit mauris
            a suscipit ullamcorper. Donec sagittis tellus non ultrices feugiat.
            Mauris sodales, eros id vulputate porttitor, nunc augue aliquet
            tortor, eget mattis turpis mauris nec enim. Proin ac rhoncus lacus.
            Aliquam venenatis lorem ac arcu commodo tristique id eget dolor. Nam
            gravida nisi vel purus interdum, faucibus suscipit arcu placerat.
            Phasellus congue velit et quam elementum, a fermentum velit
            efficitur. Nunc lobortis, lacus at faucibus vestibulum, mauris nisl
            facilisis odio, at elementum nisi mauris nec tortor. Nullam commodo
            pellentesque ante ac porttitor. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed feugiat neque magna. Suspendisse
            potenti. Duis dictum ac elit at elementum. In sit amet hendrerit
            lacus.
          </div>

          <div id="third" class="py-2">
            Third. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus consectetur lectus nec laoreet elementum. Mauris ut sapien
            nibh. Aenean consequat pellentesque rutrum. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Aliquam sollicitudin neque vel risus volutpat, nec
            hendrerit nisl tempus. Etiam suscipit purus imperdiet, ultrices enim
            et, maximus lectus. Aenean hendrerit, nibh eget vehicula
            sollicitudin, nulla tellus accumsan justo, quis gravida sapien quam
            ultricies magna. Nulla ullamcorper odio id risus pretium, sed ornare
            turpis luctus. Integer ac semper ex, ac convallis lorem. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. In eleifend lobortis lacus sed efficitur. Ut rhoncus
            consectetur accumsan. Nulla massa lorem, maximus eu venenatis in,
            ultrices sit amet purus. Duis et rutrum mi, id dictum risus. Fusce
            suscipit metus congue, fermentum sem non, molestie sem. Donec tortor
            quam, imperdiet vel dui at, finibus vestibulum neque. Nulla
            facilisi. Sed fermentum vulputate enim, at aliquam diam tincidunt
            vitae. Nunc eleifend volutpat pellentesque. Aliquam consectetur enim
            ac lectus dapibus bibendum. Cras eget erat magna. Donec turpis quam,
            efficitur in leo in, elementum interdum lorem. Duis tempor tempor
            nulla, at faucibus leo commodo vel. Nunc in tincidunt diam, ac
            ultrices mauris. Nunc quis vehicula tellus. Mauris vehicula gravida
            eros, eget facilisis elit viverra faucibus. Sed viverra rhoncus
            erat, eget dignissim orci tincidunt et. Nullam sodales elit eu metus
            lobortis, ut posuere lectus convallis. Maecenas id lectus id ligula
            bibendum congue ac ut risus. Integer eget neque volutpat, mollis
            nisi sed, lobortis mauris. In est metus, rhoncus in tristique nec,
            blandit sed mauris. Maecenas non risus mauris. Nunc pretium urna sit
            amet sapien venenatis mollis. Sed facilisis libero nisi, fermentum
            malesuada magna commodo at. Phasellus sed hendrerit ipsum. Donec
            ultrices sodales posuere. Proin a finibus mauris, non ornare arcu.
            Donec eget cursus augue. Nulla vel porta massa. Ut hendrerit mauris
            a suscipit ullamcorper. Donec sagittis tellus non ultrices feugiat.
            Mauris sodales, eros id vulputate porttitor, nunc augue aliquet
            tortor, eget mattis turpis mauris nec enim. Proin ac rhoncus lacus.
            Aliquam venenatis lorem ac arcu commodo tristique id eget dolor. Nam
            gravida nisi vel purus interdum, faucibus suscipit arcu placerat.
            Phasellus congue velit et quam elementum, a fermentum velit
            efficitur. Nunc lobortis, lacus at faucibus vestibulum, mauris nisl
            facilisis odio, at elementum nisi mauris nec tortor. Nullam commodo
            pellentesque ante ac porttitor. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed feugiat neque magna. Suspendisse
            potenti. Duis dictum ac elit at elementum. In sit amet hendrerit
            lacus.
          </div>

          <div id="fourth" class="py-2">
            Fourth. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus consectetur lectus nec laoreet elementum. Mauris ut sapien
            nibh. Aenean consequat pellentesque rutrum. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Aliquam sollicitudin neque vel risus volutpat, nec
            hendrerit nisl tempus. Etiam suscipit purus imperdiet, ultrices enim
            et, maximus lectus. Aenean hendrerit, nibh eget vehicula
            sollicitudin, nulla tellus accumsan justo, quis gravida sapien quam
            ultricies magna. Nulla ullamcorper odio id risus pretium, sed ornare
            turpis luctus. Integer ac semper ex, ac convallis lorem. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. In eleifend lobortis lacus sed efficitur. Ut rhoncus
            consectetur accumsan. Nulla massa lorem, maximus eu venenatis in,
            ultrices sit amet purus. Duis et rutrum mi, id dictum risus. Fusce
            suscipit metus congue, fermentum sem non, molestie sem. Donec tortor
            quam, imperdiet vel dui at, finibus vestibulum neque. Nulla
            facilisi. Sed fermentum vulputate enim, at aliquam diam tincidunt
            vitae. Nunc eleifend volutpat pellentesque. Aliquam consectetur enim
            ac lectus dapibus bibendum. Cras eget erat magna. Donec turpis quam,
            efficitur in leo in, elementum interdum lorem. Duis tempor tempor
            nulla, at faucibus leo commodo vel. Nunc in tincidunt diam, ac
            ultrices mauris. Nunc quis vehicula tellus. Mauris vehicula gravida
            eros, eget facilisis elit viverra faucibus. Sed viverra rhoncus
            erat, eget dignissim orci tincidunt et. Nullam sodales elit eu metus
            lobortis, ut posuere lectus convallis. Maecenas id lectus id ligula
            bibendum congue ac ut risus. Integer eget neque volutpat, mollis
            nisi sed, lobortis mauris. In est metus, rhoncus in tristique nec,
            blandit sed mauris. Maecenas non risus mauris. Nunc pretium urna sit
            amet sapien venenatis mollis. Sed facilisis libero nisi, fermentum
            malesuada magna commodo at. Phasellus sed hendrerit ipsum. Donec
            ultrices sodales posuere. Proin a finibus mauris, non ornare arcu.
            Donec eget cursus augue. Nulla vel porta massa. Ut hendrerit mauris
            a suscipit ullamcorper. Donec sagittis tellus non ultrices feugiat.
            Mauris sodales, eros id vulputate porttitor, nunc augue aliquet
            tortor, eget mattis turpis mauris nec enim. Proin ac rhoncus lacus.
            Aliquam venenatis lorem ac arcu commodo tristique id eget dolor. Nam
            gravida nisi vel purus interdum, faucibus suscipit arcu placerat.
            Phasellus congue velit et quam elementum, a fermentum velit
            efficitur. Nunc lobortis, lacus at faucibus vestibulum, mauris nisl
            facilisis odio, at elementum nisi mauris nec tortor. Nullam commodo
            pellentesque ante ac porttitor. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed feugiat neque magna. Suspendisse
            potenti. Duis dictum ac elit at elementum. In sit amet hendrerit
            lacus.
          </div>
        </div>
        <div id="fifth" class="py-2">
          Fifth. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus consectetur lectus nec laoreet elementum. Mauris ut sapien
          nibh. Aenean consequat pellentesque rutrum. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. Aliquam sollicitudin neque vel risus volutpat, nec hendrerit
          nisl tempus. Etiam suscipit purus imperdiet, ultrices enim et, maximus
          lectus. Aenean hendrerit, nibh eget vehicula sollicitudin, nulla
          tellus accumsan justo, quis gravida sapien quam ultricies magna. Nulla
          ullamcorper odio id risus pretium, sed ornare turpis luctus. Integer
          ac semper ex, ac convallis lorem. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. In eleifend
          lobortis lacus sed efficitur. Ut rhoncus consectetur accumsan. Nulla
          massa lorem, maximus eu venenatis in, ultrices sit amet purus. Duis et
          rutrum mi, id dictum risus. Fusce suscipit metus congue, fermentum sem
          non, molestie sem. Donec tortor quam, imperdiet vel dui at, finibus
          vestibulum neque. Nulla facilisi. Sed fermentum vulputate enim, at
          aliquam diam tincidunt vitae. Nunc eleifend volutpat pellentesque.
          Aliquam consectetur enim ac lectus dapibus bibendum. Cras eget erat
          magna. Donec turpis quam, efficitur in leo in, elementum interdum
          lorem. Duis tempor tempor nulla, at faucibus leo commodo vel. Nunc in
          tincidunt diam, ac ultrices mauris. Nunc quis vehicula tellus. Mauris
          vehicula gravida eros, eget facilisis elit viverra faucibus. Sed
          viverra rhoncus erat, eget dignissim orci tincidunt et. Nullam sodales
          elit eu metus lobortis, ut posuere lectus convallis. Maecenas id
          lectus id ligula bibendum congue ac ut risus. Integer eget neque
          volutpat, mollis nisi sed, lobortis mauris. In est metus, rhoncus in
          tristique nec, blandit sed mauris. Maecenas non risus mauris. Nunc
          pretium urna sit amet sapien venenatis mollis. Sed facilisis libero
          nisi, fermentum malesuada magna commodo at. Phasellus sed hendrerit
          ipsum. Donec ultrices sodales posuere. Proin a finibus mauris, non
          ornare arcu. Donec eget cursus augue. Nulla vel porta massa. Ut
          hendrerit mauris a suscipit ullamcorper. Donec sagittis tellus non
          ultrices feugiat. Mauris sodales, eros id vulputate porttitor, nunc
          augue aliquet tortor, eget mattis turpis mauris nec enim. Proin ac
          rhoncus lacus. Aliquam venenatis lorem ac arcu commodo tristique id
          eget dolor. Nam gravida nisi vel purus interdum, faucibus suscipit
          arcu placerat. Phasellus congue velit et quam elementum, a fermentum
          velit efficitur. Nunc lobortis, lacus at faucibus vestibulum, mauris
          nisl facilisis odio, at elementum nisi mauris nec tortor. Nullam
          commodo pellentesque ante ac porttitor. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed feugiat neque magna. Suspendisse
          potenti. Duis dictum ac elit at elementum. In sit amet hendrerit
          lacus.
        </div>
      </div>
    </div>

    <div style={{ height: '1000px' }}></div>
  </div>,
  {
    initFunc: initializeAnchorMenu,
    omitTemplate: true
  }
);
