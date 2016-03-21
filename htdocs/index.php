<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>SiteName</title>
  <meta name="description" content="Site Name">
  <meta name="author" content="Punch">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link rel="stylesheet" href="/assets/css/app.min.css">

  <script src="/assets/js/modernizr.js"></script>

  <!--[if lt IE 9]>
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
</head>

<body>

<div class="test">
  <p>.test</p>
  <div class="test__sub-thing">
    <p>.test__sub-thing</p>
  </div>
</div>

  <script src="/assets/js/classList.min.js"></script>
  
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