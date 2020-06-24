import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import blockquoteImage from './180x180.png';

storiesOf('Components/Blockquotes', module)
  .addParameters({
    happo: false,
  })

  .add('Blockquote (Default)', () => `
    <blockquote class="ws2-element-spacing-entity">
      <p>Blockquote default<br>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
      euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
      tation ullamcorper suscipit lobortis nisl ut <a href="some-link" title="Title!" class="class1">aliquip ex ea commodo
      consequat</a>. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum
      dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril
      delenit augue duis dolore te feugait nulla facilisi.</p>
      <p class="ws2-sig-title">Signature</p>
      <p class="ws2-sig-byline">Sig byline</p>
    </blockquote>
    <hr />
    <blockquote class="ws2-element-maroon ws2-element-style ws2-element-spacing-entity">
      <p>Blockquote maroon.<br>Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari
      quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan lingues.
      It va esser tam simplic quam Occidental: in fact, it va esser Occidental. A un Angleso it va semblar un simplificat
      Angles, quam un skeptic Cambridge amico dit me que Occidental es. END TESTIMONIAL</p>
      <p class="sig-title ws2-sig-title">Signature name</p>
      <p class="sig-byline ws2-sig-byline">Signature byline</p>
    </blockquote>
    <hr />
    <blockquote class="ws2-element-gold ws2-element-style ws2-element-spacing-entity">
      <p>Blockquote Gold.<br>Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam
      ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan lingues. It
      va esser tam simplic quam Occidental: in fact, it va esser Occidental. A un Angleso it va semblar un simplificat
      Angles, quam un skeptic Cambridge amico dit me que Occidental es.</p>
    </blockquote>
    <hr />
    <blockquote class="ws2-bq ws2-bq-image ws2-element-gray ws2-element-style ws2-element-spacing-entity">
      <p>
        <img alt="one eighty alt" title="one eighty title" class="media-element file-default panopoly-image-original"
        data-delta="1" src="${blockquoteImage}">
        Blockquote Image.<br>Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari
        quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan
        lingues. It va esser tam simplic quam Occidental: in fact, it va esser Occidental. A un Angleso it va semblar un
        simplificat Angles, quam un skeptic Cambridge amico dit me que Occidental es.</p>
      <p class="ws2-sig-title">Signature name</p>
      <p class="ws2-sig-byline">Signature byline</p>
    </blockquote>
  `)

  .add('Blockquote (Alt Gray)', () => `
    <blockquote class="ws2-element-alt ws2-element-alt-gray ws2-element-alt-no-padding ws2-element-spacing-entity-full">
      <p>Blockquote default<br>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
      euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
      tation ullamcorper suscipit lobortis nisl ut <a href="some-link" title="Title!" class="class1">aliquip ex ea commodo
      consequat</a>. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum
      dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril
      delenit augue duis dolore te feugait nulla facilisi.</p>
      <p class="ws2-sig-title">Signature</p>
      <p class="ws2-sig-byline">Sig byline</p>
    </blockquote>
    <hr />
    <blockquote class="ws2-element-maroon ws2-element-style ws2-element-alt ws2-element-alt-gray ws2-element-spacing-entity-full">
      <p>Blockquote maroon.<br>Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari
      quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan lingues.
      It va esser tam simplic quam Occidental: in fact, it va esser Occidental. A un Angleso it va semblar un simplificat
      Angles, quam un skeptic Cambridge amico dit me que Occidental es. END TESTIMONIAL</p>
      <p class="sig-title ws2-sig-title">Signature name</p>
      <p class="sig-byline ws2-sig-byline">Signature byline</p>
    </blockquote>
    <hr />
    <blockquote class="ws2-bq ws2-bq-image ws2-element-style ws2-element-gray ws2-element-alt ws2-element-alt-gray ws2-element-spacing-entity-full">
      <p>
        <img alt="one eighty alt" title="one eighty title" class="media-element file-default panopoly-image-original"
        data-delta="1" src="${blockquoteImage}">
        Blockquote Image.<br>Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari
        quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan
        lingues. It va esser tam simplic quam Occidental: in fact, it va esser Occidental. A un Angleso it va semblar un
        simplificat Angles, quam un skeptic Cambridge amico dit me que Occidental es.</p>
      <p class="ws2-sig-title">Signature name</p>
      <p class="ws2-sig-byline">Signature byline</p>
    </blockquote>
  `)

  .add('Blockquote (Alt Black)', () => `
    <blockquote class="ws2-element-alt ws2-element-alt-black ws2-element-style ws2-element-white ws2-element-spacing-inline">
      <p>Blockquote default<br>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
      euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
      tation ullamcorper suscipit lobortis nisl ut <a href="some-link" title="Title!" class="class1">aliquip ex ea commodo
      consequat</a>. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum
      dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril
      delenit augue duis dolore te feugait nulla facilisi.</p>
      <p class="ws2-sig-title">Signature</p>
      <p class="ws2-sig-byline">Sig byline</p>
    </blockquote>
    <blockquote class="ws2-element-gold ws2-element-style ws2-element-alt ws2-element-alt-black ws2-element-spacing-inline">
      <p>Blockquote Gold.<br>Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam
      ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan lingues. It
      va esser tam simplic quam Occidental: in fact, it va esser Occidental. A un Angleso it va semblar un simplificat
      Angles, quam un skeptic Cambridge amico dit me que Occidental es.</p>
    </blockquote>
    <blockquote class="ws2-bq ws2-bq-image ws2-element-style ws2-element-gray ws2-element-alt ws2-element-alt-black ws2-element-spacing-inline">
      <p>
        <img alt="one eighty alt" title="one eighty title" class="media-element file-default panopoly-image-original"
        data-delta="1" src="${blockquoteImage}">
        Blockquote Image.<br>Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari
        quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan
        lingues. It va esser tam simplic quam Occidental: in fact, it va esser Occidental. A un Angleso it va semblar un
        simplificat Angles, quam un skeptic Cambridge amico dit me que Occidental es.</p>
      <p class="ws2-sig-title">Signature name</p>
      <p class="ws2-sig-byline">Signature byline</p>
    </blockquote>
  `)

; //close
