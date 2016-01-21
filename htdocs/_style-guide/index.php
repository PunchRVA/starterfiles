<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>Style Guide</title>
  <meta name="description" content="Site Name">
  <meta name="author" content="Punch">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link rel="stylesheet" href="/assets/css/style_guide.css">

  <script src="/assets/js/modernizr.js"></script>

  <!--[if lt IE 9]>
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
</head>

<body>


  <h1>Style guide</h1>

  <h2>Grid</h2>
  <div class="grid">
    <div class="grid__item" data-grid="1/12">
      <div class="demo__item">
        <div class="demo__fraction">
          <sup>1</sup>⁄<sub>12</sub>
        </div>
      </div>
    </div>
    <div class="grid__item" data-grid="11/12">
      <div class="demo__item">
        <div class="demo__fraction">
          <sup>11</sup>⁄<sub>12</sub>
        </div>
      </div>
    </div>
    <div class="grid__item" data-grid="2/12">
      <div class="demo__item">
        <div class="demo__fraction">
          <sup>2</sup>⁄<sub>12</sub>
        </div>
      </div>
    </div>
    <div class="grid__item" data-grid="10/12">
      <div class="demo__item">
        <div class="demo__fraction">
          <sup>10</sup>⁄<sub>12</sub>
        </div>
      </div>
    </div>
    <div class="grid__item" data-grid="3/12">
      <div class="demo__item">
        <div class="demo__fraction">
          <sup>3</sup>⁄<sub>12</sub>
        </div>
      </div>
    </div>
    <div class="grid__item" data-grid="9/12">
      <div class="demo__item">
        <div class="demo__fraction">
          <sup>9</sup>⁄<sub>12</sub>
        </div>
      </div>
    </div>
    <div class="grid__item" data-grid="4/12">
      <div class="demo__item">
        <div class="demo__fraction">
          <sup>4</sup>⁄<sub>12</sub>
        </div>
      </div>
    </div>
    <div class="grid__item" data-grid="8/12">
      <div class="demo__item">
        <div class="demo__fraction">
          <sup>8</sup>⁄<sub>12</sub>
        </div>
      </div>
    </div>
    <div class="grid__item" data-grid="5/12">
      <div class="demo__item">
        <div class="demo__fraction">
          <sup>5</sup>⁄<sub>12</sub>
        </div>
      </div>
    </div>
    <div class="grid__item" data-grid="7/12">
      <div class="demo__item">
        <div class="demo__fraction">
          <sup>7</sup>⁄<sub>12</sub>
        </div>
      </div>
    </div>
    <div class="grid__item" data-grid="6/12">
      <div class="demo__item">
        <div class="demo__fraction">
          <sup>6</sup>⁄<sub>12</sub>
        </div>
      </div>
    </div>
    <div class="grid__item" data-grid="6/12">
      <div class="demo__item">
        <div class="demo__fraction">
          <sup>6</sup>⁄<sub>12</sub>
        </div>
      </div>
    </div>
    <div class="grid__item" data-grid="7/12">
      <div class="demo__item">
        <div class="demo__fraction">
          <sup>7</sup>⁄<sub>12</sub>
        </div>
      </div>
    </div>
    <div class="grid__item" data-grid="5/12">
      <div class="demo__item">
        <div class="demo__fraction">
          <sup>5</sup>⁄<sub>12</sub>
        </div>
      </div>
    </div>
    <div class="grid__item" data-grid="8/12">
      <div class="demo__item">
        <div class="demo__fraction">
          <sup>8</sup>⁄<sub>12</sub>
        </div>
      </div>
    </div>
    <div class="grid__item" data-grid="4/12">
      <div class="demo__item">
        <div class="demo__fraction">
          <sup>4</sup>⁄<sub>12</sub>
        </div>
      </div>
    </div>
    <div class="grid__item" data-grid="9/12">
      <div class="demo__item">
        <div class="demo__fraction">
          <sup>9</sup>⁄<sub>12</sub>
        </div>
      </div>
    </div>
    <div class="grid__item" data-grid="3/12">
      <div class="demo__item">
        <div class="demo__fraction">
          <sup>3</sup>⁄<sub>12</sub>
        </div>
      </div>
    </div>
    <div class="grid__item" data-grid="10/12">
      <div class="demo__item">
        <div class="demo__fraction">
          <sup>10</sup>⁄<sub>12</sub>
        </div>
      </div>
    </div>
    <div class="grid__item" data-grid="2/12">
      <div class="demo__item">
        <div class="demo__fraction">
          <sup>2</sup>⁄<sub>12</sub>
        </div>
      </div>
    </div>
    <div class="grid__item" data-grid="11/12">
      <div class="demo__item">
        <div class="demo__fraction">
          <sup>11</sup>⁄<sub>12</sub>
        </div>
      </div>
    </div>
    <div class="grid__item" data-grid="1/12">
      <div class="demo__item">
        <div class="demo__fraction">
          <sup>1</sup>⁄<sub>12</sub>
        </div>
      </div>
    </div>
  </div>

  


  



  <script src="/assets/js/app.min.js"></script>

  <script>
    var loc = document.location.host
    if ( 
        loc.slice(0,2) == "d." || 
        loc.slice(0,3) == "10." || 
        loc.slice(-6) == ".local" ||
        document.location.host.slice(0,9) == "localhost"
        ) {
          var s = document.createElement('script');
          loc = loc.search(':') > 0 ? loc.split(':')[0] : loc
          s.src = "//"+loc+":35729/livereload.js";
          document.body.appendChild(s);
        }
  </script>

</body>
</html>