<div class="row">
  <div class="col-md-12">

    <!-- NavBar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown" id="navbar-dropdown-test">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" id="nav-hidden" href="#">HiddenAction</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>

    <!-- Breadcrumbs -->
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item"><a href="#">Library</a></li>
      <li class="breadcrumb-item active" aria-current="page">Data</li>
    </ol>

    <!-- Carousel -->
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" class=""></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1" class="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2" class=""></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item">
          <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&amp;bg=777&amp;fg=555&amp;text=First slide"
            alt="First slide [800x400]"
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16cbfb01bed%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16cbfb01bed%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.9140625%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            data-holder-rendered="true">
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
        <div class="carousel-item active">
          <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&amp;bg=666&amp;fg=444&amp;text=Second slide"
            alt="Second slide [800x400]"
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16cbfb01bee%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16cbfb01bee%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            data-holder-rendered="true">
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&amp;bg=555&amp;fg=333&amp;text=Third slide"
            alt="Third slide [800x400]"
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16cbfb01bef%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16cbfb01bef%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22276.9921875%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            data-holder-rendered="true">
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <!-- Jumbotron -->
    <div class="jumbotron">
      <h1 class="display-4">Hello, world!</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
        featured content or information.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>

    <!-- Accordion -->
    <div id="accordion">



      <div class="card">
        <div class="card-header" id="headingOne">
          <h5 class="mb-0">
            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne"
              aria-expanded="false" aria-controls="collapseOne">
              Collapsible Group Item #1
            </button>
          </h5>
        </div>

        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion" style="">
          <div class="card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon
            officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3
            wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
            Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
            excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
            you probably haven't heard of them accusamus labore sustainable VHS.
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingTwo">
          <h5 class="mb-0">
            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
              aria-expanded="false" aria-controls="collapseTwo">
              Collapsible Group Item #2
            </button>
          </h5>
        </div>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
          <div class="card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon
            officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3
            wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
            Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
            excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
            you probably haven't heard of them accusamus labore sustainable VHS.
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingThree">
          <h5 class="mb-0">
            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree"
              aria-expanded="false" aria-controls="collapseThree">
              Collapsible Group Item #3
            </button>
          </h5>
        </div>
        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
          <div class="card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon
            officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3
            wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
            Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
            excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
            you probably haven't heard of them accusamus labore sustainable VHS.
            <!-- Spinners -->
            <div id="spinner-wrapper">
              <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-border text-secondary" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-border text-success" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-border text-danger" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-border text-warning" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-border text-info" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-border text-light" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-border text-dark" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="row">
  <!-- Buttons -->
  <div class="col-md-4">
    <button class="btn btn-primary">Default Button</button>
    <button class="btn btn-info">Info Button</button>
    <button class="btn btn-danger">Danger Button</button>

    <!-- Badges -->
    <div id="badge-wrapper">
      <span class="badge badge-primary">Primary</span>
      <span class="badge badge-pill badge-secondary">Secondary</span>
      <span class="badge badge-pill badge-rfi">Request Info</span>
      <span class="badge badge-pill badge-program">Programs</span>
      <hr>
      <span class="badge badge-pill badge-success">Success</span>
      <span class="badge badge-pill badge-danger">Danger</span>
      <span class="badge badge-pill badge-warning">Warning</span>
      <span class="badge badge-pill badge-info">Info</span>
      <span class="badge badge-pill badge-light">Light</span>
      <span class="badge badge-pill badge-dark">Dark</span>
    </div>


  </div>
  <div class="col-md-4">
    <!-- Button Groups -->
    <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
      <button type="button" class="btn btn-secondary">1</button>
      <button type="button" class="btn btn-secondary">2</button>

      <div class="btn-group" role="group">
        <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown"
          aria-expanded="false">
          Dropdown
        </button>
        <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
          <a class="dropdown-item" href="#">Dropdown link</a>
          <a class="dropdown-item" href="#">Dropdown link</a>
        </div>
      </div>
    </div>

    <div class="bd-example">
      <div class="btn-group">
        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown"
          aria-expanded="false">Primary</button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li>
            <hr class="dropdown-divider">
          </li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div><!-- /btn-group -->
      <div class="btn-group">
        <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown"
          aria-expanded="false">Secondary</button>
        <ul class="dropdown-menu" style="">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li>
            <hr class="dropdown-divider">
          </li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div><!-- /btn-group -->
      <div class="btn-group">
        <button type="button" class="btn btn-rfi dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Request
          Info</button>
        <ul class="dropdown-menu" style="">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li>
            <hr class="dropdown-divider">
          </li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div><!-- /btn-group -->
      <div class="btn-group">
        <button type="button" class="btn btn-program dropdown-toggle" data-toggle="dropdown"
          aria-expanded="false">Program</button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li>
            <hr class="dropdown-divider">
          </li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div><!-- /btn-group -->
      <div class="btn-group">
        <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown"
          aria-expanded="false">Success</button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li>
            <hr class="dropdown-divider">
          </li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div><!-- /btn-group -->
      <div class="btn-group">
        <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown"
          aria-expanded="false">Info</button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li>
            <hr class="dropdown-divider">
          </li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div><!-- /btn-group -->
      <div class="btn-group">
        <button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown"
          aria-expanded="false">Warning</button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li>
            <hr class="dropdown-divider">
          </li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div><!-- /btn-group -->
      <div class="btn-group">
        <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown"
          aria-expanded="false">Danger</button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li>
            <hr class="dropdown-divider">
          </li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div><!-- /btn-group -->
    </div>
  </div>
  <div class="col-md-4">
    <!-- Cards -->
    <div class="card" style="width: 100%;">
      <img class="card-img-top"
        src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16cbb157524%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16cbb157524%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.1953125%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
        alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Card default title</h5>
        <p class="card-text">Basic card with mixed content and a fixed width. Cards have no margin and no fixed width by
          default (they’ll naturally fill the full width of its parent), so use 'spacing utilities'.
        </p>
        <a href="#" class="btn btn-primary">Button link here</a>
      </div>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-md-12">
    <!-- Forms and inputs -->
    <form _lpchecked="1">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
          placeholder="Enter email" autocomplete="off"
          style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAkCAYAAADo6zjiAAAAAXNSR0IArs4c6QAAAoRJREFUWAndV8vOIVEQPm4hNixYTCZ/ghcwGyt7l62NCTZi6RE8go2NJbGR+VmJB7DwCMITiOnNzFiIECE1Vf3POXG6W9MXv2QqKXXOqTr1fefSupqxD/mKZoi6QQWXlXJSbsIwFHL8QnUbWJuPMAxJEDtt8LP6hKUT2qJnAWrzEpYkHuxR0GcKYQrxitaLGv83gVKpxDabDSNrJtqL4lp/NBoBCVkkwFXi8tQj8Hg+7hu3EvK/zlMJGAFqxyQCkUiE5XI5lkqltHHMrk+XyGBAPZtkMgmKoqhndj6foV6v8zMDu77xeKzmI4u4XHUUVEen01GD+Q/eXj4B7PoeISAdgY7aJw2oK7W7zWbzHtkBWqPYarxogJcQ8BKKMe438/GYB+1PjPuB+obKXvEyIlySP6jfXkmASLy/moDiylOQSCRYu91mq9WK7XY7tl6v2WQyYYVCgVZpJl/IqbtwVsZqtRrs93v+9yHZy+UCzWbzXn5nBPr9vgR6Op2k/uFwAHqCTBbljEAgEIDZbAaLxQKy2Sz4fD5otVoSiXQ6bUrAcVFKKwyFQgKkXC5LBOLxuPAZ7IT60WAWYMkXDocBL6MgMJ/P781XPxZc+TDx+/0wnU4F+PF4hEwmc5cA7opKgj4abB+H1+uF4XAowOkJqFar98DJb1l0SQl8MBgIcHoSKpWKLg6RjMacEcB6D3q9ngCn/4RisWgEdGvMGYFutyvAqbHdbmG5XEraaDRugYPfMrxmQj6fl0ai0SgjvZZYLHbdldp23gWKlMFZR6G3oVWhYuI7nxQMBplZ3U9xWOSqyudc2fer9sNNqmR+o9481wd9lEOtitBaFppIO0HllVUiUkn2FxFcd0XayEddAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" autocomplete="off"
          style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAkCAYAAADo6zjiAAAAAXNSR0IArs4c6QAAAx9JREFUWAndV79LY0EQnjySSAQ1OUG4OxvxR5BALggBi0BEIYUYtLC43v8ghZVgY3V9/oUjpMovEBvRSsGAHrY2Yi7BwlgEREXNzffMLnnP91bzkiDcQNjdmdlvvt3ZnbdxEcvOzs73p6enX9xdaDab36DrlbhcripjHbjd7s2tra2/ZlxXK/gfDjxqNvZyzERumMQPMwkNK+93cCwEMVq7bFiXxqMFg6a/gzextF7nXMXfKhZ24FPl/yYwOztLqVSK0NpJX3cgFArR8PAwobWTvhLgu6/HFa0Vib4SsApo1hkIDAwM0OTkJAUCAbMfObW9ATIp3GLs9/tpY2ODhoaG6OXlhQqFAp2dnelmpzaBrWrlDszPz+vB4axpGi0uLsp5Tm0SQNGRBBQ+fTVJAsfHx9RoNPRgSMH+/r4M7NQmARQd1/b2dlPYcdDGx8epXq/T7e2tUOutymZwfGfAV7LGLoet98GVgcA7c3tqZiJ1JhGRKegp+gfA+Mv4Be+DTyPQ4hiXdeADpG1dUCei0ShNT0/TyMgI3d/fU61Wo3K5TBcXF7bzeBe+dk0gHA7TysoKeb1eGQgHFkRmZmZod3eXTk5OpM3c6ToFExMThuDPz88yBgpaIpHQy7hUmjpd70CxWCSkYHBwkEqlElUqFYrFYrS0tKSH8ng8uv36+toU+nXo5utQtXqrWXpbKFG0MpkMYeV8qnUP1JF2EQWuXSf6SMGBGDhtHx4eZHCsOB6PS6jLy0u6u7uTY3NHQ0XiXbgxG5yMkfP19XUaGxvTp2NH9vb2lFAa/qngHwuT+I10KL0VRp5La2trFAwGdS+kJp/PU7Wqhnx9MymAzab2b4ewIfjq6ipFIhFdhfOQy+Xo/PxcuNi2Xd8CICeTSRn88fGRstmssgC1s+mawPLyMs3NzUlMrB53Hz8hR0dHdHp6KoaGtmsCU1NTBkCfz0f4tQtqhJ10XAk53/ie90SA5WQHDjn6T8EgnU4TDqFKcCNs5LBjAqgbfL8T+J4DtL322wSxVDNpPEg2O04B140rnhhhgAy20BJdocQczAUGsP4BPJYni4VMj2AAAAAASUVORK5CYII=&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;">
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>


    <div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">@</span>
        </div>
        <input type="text" class="form-control" placeholder="Username" aria-label="Username"
          aria-describedby="basic-addon1">
      </div>

      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username"
          aria-describedby="basic-addon2">
        <div class="input-group-append">
          <span class="input-group-text" id="basic-addon2">@example.com</span>
        </div>
      </div>

      <label for="basic-url">Your vanity URL</label>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
        </div>
        <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">$</span>
        </div>
        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
        <div class="input-group-append">
          <span class="input-group-text">.00</span>
        </div>
      </div>

      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">With textarea</span>
        </div>
        <textarea class="form-control" aria-label="With textarea"></textarea>
      </div>
    </div>


    <!-- Modals -->
    <div id="modal-wrapper" style="display:block;">
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
        data-whatever="@mdo">Open modal for @mdo</button>
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
        data-whatever="@fat">Open modal for @fat</button>
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
        data-whatever="@getbootstrap">Open modal for @getbootstrap</button>

      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        style="display: none;" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">New message</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">Recipient:</label>
                  <input type="text" class="form-control" id="recipient-name">
                </div>
                <div class="form-group">
                  <label for="message-text" class="col-form-label">Message:</label>
                  <textarea class="form-control" id="message-text"></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Send message</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- List Group -->
    <div>
      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Cras justo odio
          <span class="badge badge-primary badge-pill">14</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Dapibus ac facilisis in
          <span class="badge badge-primary badge-pill">2</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Morbi leo risus
          <span class="badge badge-primary badge-pill">1</span>
        </li>
      </ul>
    </div>


    <!-- Pagination -->
    <div id="pagination-wrapper">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">«</span>
            </a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">»</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
