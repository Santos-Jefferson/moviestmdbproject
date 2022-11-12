<template>
  <!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
  </head>
  <body>
    <nav class="navbar bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">The Movie Database (TMDB) API</a>
    <form class="d-flex" role="search" action="http://localhost:3001/movies" method="GET">
      <input class="form-control me-2" type="search" placeholder="Search here" aria-label="Search" name="search">
      <button class="btn btn-outline-success" type="Submit">Search</button>
    </form>
  </div>
</nav>
  </body>
</html>
  
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
