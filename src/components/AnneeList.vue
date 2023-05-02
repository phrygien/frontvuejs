<template>
    <div class="list row">
      <div class="col-md-8">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Chercher année"
            v-model="title"/>
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button"
              @click="searchName"
            >
              Chercher
            </button>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <h4>Liste anneée</h4>
        <ul class="list-group">
          <li class="list-group-item"
            :class="{ active: index == currentIndex }"
            v-for="(annee, index) in annees"
            :key="index"
            @click="setActiveTutorial(annee, index)"
          >
            {{ annee.name }}
          </li>
        </ul>
  
        <button class="m-3 btn btn-sm btn-danger" @click="removeAllAnnee">
          Spprimer tous
        </button>
      </div>
      <div class="col-md-6">
        <div v-if="currentTutorial">
          <h4>Tutorial</h4>
          <div>
            <label><strong>Title:</strong></label> {{ currentTutorial.title }}
          </div>
          <div>
            <label><strong>Description:</strong></label> {{ currentTutorial.description }}
          </div>
          <div>
            <label><strong>Status:</strong></label> {{ currentTutorial.published ? "Published" : "Pending" }}
          </div>
  
          <router-link :to="'/tutorials/' + currentTutorial.id" class="badge badge-warning">Edit</router-link>
        </div>
        <div v-else>
          <br />
          <p>Click sur année pour vois le details</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import AnneeDataService from "../services/AnneeDataService";
  
  export default {
    name: "annees-list",
    data() {
      return {
        annees: [],
        currentAnnee: null,
        currentIndex: -1,
        name: ""
      };
    },
    methods: {
      retrieveAnees() {
        AnneeDataService.getAll()
          .then(response => {
            this.annees = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      },
  
      refreshList() {
        this.retrieveAnnees();
        this.currentAnnee = null;
        this.currentIndex = -1;
      },
  
      setActiveAnnée(annee, index) {
        this.currentTutorial = annee;
        this.currentIndex = annee ? index : -1;
      },
  
      removeAllAnnees() {
        AnneeDataService.deleteAll()
          .then(response => {
            console.log(response.data);
            this.refreshList();
          })
          .catch(e => {
            console.log(e);
          });
      },
      
      searchTitle() {
        AnneeDataService.findByName(this.name)
          .then(response => {
            this.annees = response.data;
            this.setActiveAnnee(null);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    mounted() {
      this.retrieveAnnees();
    }
  };
  </script>
  
  <style>
  .list {
    text-align: left;
    max-width: 750px;
    margin: auto;
  }
  </style>