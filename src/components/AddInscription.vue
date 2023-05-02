<template>
    <h1>Enregistrer Etudiants</h1>
    <hr>
    <div class="col-md-12 mb-3">
        <div class="row">

            <div class="col-md-6">
                <label for="inputPassword5" class="form-label">Mention</label>
                <input type="password" id="inputPassword5" class="form-control" aria-labelledby="passwordHelpBlock">

                <label for="inputPassword5" class="form-label">Parcours</label>
                <input type="password" id="inputPassword5" class="form-control" aria-labelledby="passwordHelpBlock">
                
            </div>

            <div class="col-md-6">
                <label for="inputPassword5" class="form-label">Nom</label>
                <input type="password" id="inputPassword5" class="form-control" aria-labelledby="passwordHelpBlock">

                <label for="inputPassword5" class="form-label">Prenom</label>
                <input type="password" id="inputPassword5" class="form-control" aria-labelledby="passwordHelpBlock">

                <label for="inputPassword5" class="form-label">Sexe</label>
                <input type="password" id="inputPassword5" class="form-control" aria-labelledby="passwordHelpBlock">

                <label for="inputPassword5" class="form-label">Lieu de naissace</label>
                <input type="password" id="inputPassword5" class="form-control" aria-labelledby="passwordHelpBlock">

                <label for="inputPassword5" class="form-label">Situation matrimoniale</label>
                <input type="password" id="inputPassword5" class="form-control" aria-labelledby="passwordHelpBlock">

                <label for="inputPassword5" class="form-label">Nationaité</label>
                <input type="password" id="inputPassword5" class="form-control" aria-labelledby="passwordHelpBlock">

                <label for="inputPassword5" class="form-label">Adresse</label>
                <input type="password" id="inputPassword5" class="form-control" aria-labelledby="passwordHelpBlock">
            </div>
        </div>
    </div>
    <button class="btn btn-primary mr-2">valider</button>
    <button class="btn btn-danger">annuler</button>
</template>
<script>
 export default {
    name: "AddInscription",
 }
</script>