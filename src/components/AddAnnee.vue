<template>
    <div class="submit-form">
      <div v-if="!submitted">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            required
            v-model="annee.name"
            name="name"
          />
        </div>
  
        <div class="form-group">
          <label for="debut">Debut</label>
          <input
            type="date"
            class="form-control"
            id="debut"
            required
            v-model="annee.debut"
            name="debut"
          />
        </div>

        <div class="form-group">
          <label for="debut">Fin</label>
          <input
            type="date"
            class="form-control"
            id="fin"
            required
            v-model="annee.fin"
            name="fin"
          />
        </div>
  
        <button @click="saveAnnee" class="btn btn-success">Submit</button>
      </div>
  
      <div v-else>
        <h4>You submitted successfully!</h4>
        <button class="btn btn-success" @click="newAnnee">Ajouter année</button>
      </div>
    </div>
  </template>
  
  <script>
  import AnneeDataService from "../services/AnneeDataService";
  
  export default {
    name: "add-tutorial",
    data() {
      return {
        annee: {
          id: null,
          name: "",
          debut: "",
          fin: "",
          published: false
        },
        submitted: false
      };
    },
    methods: {
      saveAnnee() {
        var data = {
          name: this.annee.name,
          debut: this.annee.debut,
          fin: this.annee.fin,
        };
  
        AnneeDataService.create(data)
          .then(response => {
            this.annee.id = response.data.id;
            console.log(response.data);
            this.submitted = true;
          })
          .catch(e => {
            console.log(e);
          });
      },
      
      newAnnee() {
        this.submitted = false;
        this.annee = {};
      }
    }
  };
  </script>
  
  <style>
  .submit-form {
    max-width: 300px;
    margin: auto;
  }
  </style>