<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">PROJET - SCOLAIRE</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/annees" class="nav-link">Année scolaire</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/addAnnee" class="nav-link">Ajouter Année</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/mentions" class="nav-link">Mentions</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/addMention" class="nav-link">Ajouter Mention</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/inscriptions" class="nav-link">Etudiants</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/addInscription" class="nav-link">Enregistrer Inscription</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>