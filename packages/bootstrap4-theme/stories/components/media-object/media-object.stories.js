import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
/*
storiesOf('Components/Media object', module)
  .addParameters({
    happo: false,
  })

.add('Example', () => `
<div class="media">
  <img src="https://via.placeholder.com/200x200" class="mr-3" alt="...">
  <div class="media-body">
    <h5 class="mt-0">Media heading</h5>
    Flexbug #12: Inline elements aren’t treated as flex items
Internet Explorer 10-11 do not render inline elements like links or images (or ::before and ::after pseudo-elements) as flex items. The only workaround is to set a non-inline display value (e.g., block, inline-block, or flex). We suggest using .d-flex, one of our display utilities, as an easy fix.
  </div>
</div>
`)

.add('With paragraph content', () => `
<div class="media">
  <img src="https://via.placeholder.com/60x60" class="mr-3" alt="...">
  <div class="media-body">
    <h5 class="mt-0">Media heading</h5>
    <p>Flexbug #12: Inline elements aren’t treated as flex items
    Internet Explorer 10-11 do not render inline elements like links or images (or ::before and ::after pseudo-elements) as flex items. The only workaround is to set a non-inline display value (e.g., block, inline-block, or flex). We suggest using .d-flex, one of our display utilities, as an easy fix.</p>
  </div>
</div>
`)

.add('Nesting', () => `
<div class="media">
  <img src="https://via.placeholder.com/60x60" class="mr-3" alt="...">
  <div class="media-body">
    <h5 class="mt-0">Media heading</h5>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.

    <div class="media mt-3">
      <a class="mr-3" href="#">
        <img src="https://via.placeholder.com/60x60" class="mr-3" alt="...">
      </a>
      <div class="media-body">
        <h5 class="mt-0">Media heading</h5>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </div>
    </div>
  </div>
</div>
`)

.add('Media Alignment', () => `
<div class="media">
  <img src="https://via.placeholder.com/60x60" class="align-self-start mr-3" alt="...">
  <div class="media-body">
    <h5 class="mt-0">Top-aligned media</h5>
    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
    <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
  </div>
</div>
<hr>
<div class="media">
  <img src="https://via.placeholder.com/60x60" class="align-self-center mr-3" alt="...">
  <div class="media-body">
    <h5 class="mt-0">Center-aligned media</h5>
    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
    <p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
  </div>
</div>
<hr>
<div class="media">
  <img src="https://via.placeholder.com/60x60" class="align-self-end mr-3" alt="...">
  <div class="media-body">
    <h5 class="mt-0">Bottom-aligned media</h5>
    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
    <p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
  </div>
</div>
`)

.add('Order', () => `
<div class="media">
  <div class="media-body">
    <h5 class="mt-0 mb-1">Media object</h5>
    Change the order of content in media objects by modifying the HTML itself, or by adding some custom flexbox CSS to set the order property (to an integer of your choosing).
  </div>
  <img src="https://via.placeholder.com/60x60" class="ml-3" alt="...">
</div>
`)

.add('Media list', () => `
<ul class="list-unstyled">
  <li class="media">
    <img src="https://via.placeholder.com/60x60" class="mr-3" alt="...">
    <div class="media-body">
      <h5 class="mt-0 mb-1">List-based media object</h5>
      Because the media object has so few structural requirements, you can also use these classes on list HTML elements. On your ul or ol, add the .list-unstyled to remove any browser default list styles, and then apply .media to your lis. As always, use spacing utilities wherever needed to fine tune.
    </div>
  </li>
  <li class="media my-4">
    <img src="https://via.placeholder.com/60x60" class="mr-3" alt="...">
    <div class="media-body">
      <h5 class="mt-0 mb-1">List-based media object</h5>
      Because the media object has so few structural requirements, you can also use these classes on list HTML elements. On your ul or ol, add the .list-unstyled to remove any browser default list styles, and then apply .media to your li s. As always, use spacing utilities wherever needed to fine tune.
    </div>
  </li>
  <li class="media">
    <img src="https://via.placeholder.com/60x60" class="mr-3" alt="...">
    <div class="media-body">
      <h5 class="mt-0 mb-1">List-based media object</h5>
      Because the media object has so few structural requirements, you can also use these classes on list HTML elements. On your ul or ol, add the .list-unstyled to remove any browser default list styles, and then apply .media to your li s. As always, use spacing utilities wherever needed to fine tune.
    </div>
  </li>
</ul>
`)

; //close
*/
