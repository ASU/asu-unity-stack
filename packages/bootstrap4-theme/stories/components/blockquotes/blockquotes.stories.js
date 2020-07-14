import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import blockquoteImage from './180x180.png';

/* Blockquotes */

storiesOf('Components/Blockquotes', module)
  .addParameters({
    happo: false,
  })

  .add('Blockquote (Default)', () => `
    <blockquote class="uds-element-spacing-entity">
      <p>Blockquote default<br>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
      euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
      tation ullamcorper suscipit lobortis nisl ut <a href="some-link" title="Title!" class="class1">aliquip ex ea commodo
      consequat</a>. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum
      dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril
      delenit augue duis dolore te feugait nulla facilisi.</p>
      <cite class="uds-sig-title">Signature</cite>
      <cite class="uds-sig-byline">Sig byline</cite>
    </blockquote>
    <hr />
    <blockquote class="uds-element-maroon uds-element-style uds-element-spacing-entity">
      <p>Blockquote maroon.<br>Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari
      quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan lingues.
      It va esser tam simplic quam Occidental: in fact, it va esser Occidental. A un Angleso it va semblar un simplificat
      Angles, quam un skeptic Cambridge amico dit me que Occidental es. END TESTIMONIAL</p>
      <cite class="sig-title uds-sig-title">Signature name</cite>
      <cite class="sig-byline uds-sig-byline">Signature byline</cite>
    </blockquote>
    <hr />
    <blockquote class="uds-element-gold uds-element-style uds-element-spacing-entity">
      <p>Blockquote Gold.<br>Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam
      ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan lingues. It
      va esser tam simplic quam Occidental: in fact, it va esser Occidental. A un Angleso it va semblar un simplificat
      Angles, quam un skeptic Cambridge amico dit me que Occidental es.</p>
    </blockquote>
    <hr />
    <blockquote class="uds-bq uds-bq-image uds-element-gray uds-element-style uds-element-spacing-entity">
      <p>
        <img alt="one eighty alt" title="one eighty title" class="media-element file-default panopoly-image-original"
        data-delta="1" src="${blockquoteImage}">
        Blockquote Image.<br>Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari
        quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan
        lingues. It va esser tam simplic quam Occidental: in fact, it va esser Occidental. A un Angleso it va semblar un
        simplificat Angles, quam un skeptic Cambridge amico dit me que Occidental es.</p>
      <cite class="uds-sig-title">Signature name</cite>
      <cite class="uds-sig-byline">Signature byline</cite>
    </blockquote>
  `)

  .add('Blockquote (Alt Gray)', () => `
    <blockquote class="uds-element-alt uds-element-alt-gray uds-element-alt-no-padding uds-element-spacing-entity-full">
      <p>Blockquote default<br>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
      euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
      tation ullamcorper suscipit lobortis nisl ut <a href="some-link" title="Title!" class="class1">aliquip ex ea commodo
      consequat</a>. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum
      dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril
      delenit augue duis dolore te feugait nulla facilisi.</p>
      <cite class="uds-sig-title">Signature</cite>
      <cite class="uds-sig-byline">Sig byline</cite>
    </blockquote>
    <hr />
    <blockquote class="uds-element-maroon uds-element-style uds-element-alt uds-element-alt-gray uds-element-spacing-entity-full">
      <p>Blockquote maroon.<br>Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari
      quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan lingues.
      It va esser tam simplic quam Occidental: in fact, it va esser Occidental. A un Angleso it va semblar un simplificat
      Angles, quam un skeptic Cambridge amico dit me que Occidental es. END TESTIMONIAL</p>
      <cite class="sig-title uds-sig-title">Signature name</cite>
      <cite class="sig-byline uds-sig-byline">Signature byline</cite>
    </blockquote>
    <hr />
    <blockquote class="uds-bq uds-bq-image uds-element-style uds-element-gray uds-element-alt uds-element-alt-gray uds-element-spacing-entity-full">
      <p>
        <img alt="one eighty alt" title="one eighty title" class="media-element file-default panopoly-image-original"
        data-delta="1" src="${blockquoteImage}">
        Blockquote Image.<br>Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari
        quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan
        lingues. It va esser tam simplic quam Occidental: in fact, it va esser Occidental. A un Angleso it va semblar un
        simplificat Angles, quam un skeptic Cambridge amico dit me que Occidental es.</p>
      <cite class="uds-sig-title">Signature name</cite>
      <cite class="uds-sig-byline">Signature byline</cite>
    </blockquote>
  `)

  .add('Blockquote (Alt Black)', () => `
    <blockquote class="uds-element-alt uds-element-alt-black uds-element-style uds-element-white uds-element-spacing-inline">
      <p>Blockquote default<br>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
      euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
      tation ullamcorper suscipit lobortis nisl ut <a href="some-link" title="Title!" class="class1">aliquip ex ea commodo
      consequat</a>. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum
      dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril
      delenit augue duis dolore te feugait nulla facilisi.</p>
      <cite class="uds-sig-title">Signature</cite>
      <cite class="uds-sig-byline">Sig byline</cite>
    </blockquote>
    <blockquote class="uds-element-gold uds-element-style uds-element-alt uds-element-alt-black uds-element-spacing-inline">
      <p>Blockquote Gold.<br>Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam
      ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan lingues. It
      va esser tam simplic quam Occidental: in fact, it va esser Occidental. A un Angleso it va semblar un simplificat
      Angles, quam un skeptic Cambridge amico dit me que Occidental es.</p>
    </blockquote>
    <blockquote class="uds-bq uds-bq-image uds-element-style uds-element-gray uds-element-alt uds-element-alt-black uds-element-spacing-inline">
      <p>
        <img alt="one eighty alt" title="one eighty title" class="media-element file-default panopoly-image-original"
        data-delta="1" src="${blockquoteImage}">
        Blockquote Image.<br>Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari
        quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan
        lingues. It va esser tam simplic quam Occidental: in fact, it va esser Occidental. A un Angleso it va semblar un
        simplificat Angles, quam un skeptic Cambridge amico dit me que Occidental es.</p>
      <cite class="uds-sig-title">Signature name</cite>
      <cite class="uds-sig-byline">Signature byline</cite>
    </blockquote>
  `)

; //close
