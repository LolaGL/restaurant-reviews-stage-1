<!DOCTYPE html>
<html lang="en">

<head>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <!-- Normalize.css for better cross-browser consistency -->
  <link rel="stylesheet" src="//normalize-css.googlecode.com/svn/trunk/normalize.css" />
  <!-- Main CSS file -->
  <link rel="stylesheet" href="css/styles.css" type="text/css">
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.1/dist/leaflet.css" integrity="sha512-Rksm5RenBEKSKFjgI3a41vrjkw4EVPlJ3+OiI65vTjIdo9brlAacEuKOiQ5OFh7cOI1bkDwLqdLw3Zg0cRJAAQ==" crossorigin=""/>
  <title>Restaurant Info</title>
</head>

<body class="inside">
  <!-- Beginning header -->
  <header tabindex="0">
    <!-- Beginning nav -->
    <nav>
      <h1><a href="/">Restaurant Reviews</a></h1>
    </nav>
    <!-- Beginning breadcrumb -->
    <ul id="breadcrumb" tabindex="1" role="navigation">
      <li><a href="/" aria-label="link home">Home</a></li>
    </ul>
    <!-- End breadcrumb -->
    <!-- End nav -->
  </header>
  <!-- End header -->

  <!-- Beginning main -->
  <main id="maincontent" tabindex="2" aria-label="main content">
    <!-- Beginning map -->
    <section id="map-container" aria-label="map">
      <div id="map" role="application"></div>
    </section>
    <!-- End map -->
    <!-- Beginning restaurant -->
    <section id="restaurant-container" tabindex="3">
      <h2 id="restaurant-name"></h1>
      <img id="restaurant-img">
      <p id="restaurant-cuisine"></p>
      <p id="restaurant-address"></p>
      <table id="restaurant-hours"></table>
    </section>
    <!-- end restaurant -->
    <!-- Beginning reviews -->
    <section id="reviews-container" tabindex="4">
      <ul id="reviews-list"></ul>
    </section>
    <!-- End reviews -->
  </main>
  <!-- End main -->

  <!-- Beginning footer -->
  <footer id="footer" tabindex="5">
    Copyright (c) 2017 <a href="/"><strong>Restaurant Reviews</strong></a> All Rights Reserved.
  </footer>
  <!-- End footer -->
  <script src="https://unpkg.com/leaflet@1.3.1/dist/leaflet.js" integrity="sha512-/Nsx9X4HebavoBvEBuyp3I7od5tA0UzAxs+j83KgC8PU0kgB4XiK4Lfe4y4cgBtaRJQEIFCW+oC506aPT2L1zw==" crossorigin=""></script>
  <!-- Beginning scripts -->
  <!-- Database helpers -->
  <script type="text/javascript" src="js/dbhelper.js"></script>
  <!-- Main javascript file -->
  <script type="text/javascript" src="js/restaurant_info.js"></script>
  <!-- Google Maps -->
 <!--  <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA_tKbW6A5pQ-eupxI56myUnHLqYCzOjKo&libraries=places&callback=initMap"></script> -->
  <!-- End scripts -->

</body>

</html>
