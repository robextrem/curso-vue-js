<script>
</script>
<template>
  <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Vue Router</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <!--a class="nav-link active" aria-current="page" href="/home">Home</a-->
          <router-link class="nav-link" to="/home">Home</router-link>
        </li>
        <li class="nav-item">
          <!--a class="nav-link" href="/blog">Blog</a-->
          <router-link class="nav-link" to="/blog">Blog</router-link>
        </li>
        <li class="nav-item">
          <!--a class="nav-link" href="/contacto">Contacto</a-->
          <router-link class="nav-link" to="/contacto">Contacto</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>