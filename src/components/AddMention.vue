<template>
    <h1>Mention</h1>
    <hr>
    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Nom mention</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="">
        </div>
        <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Description</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <button class="btn btn-primary mr-2">valider</button>
    <button class="btn btn-danger">annuler</button>
</template>
<script>
 export default {
    name: "AddMention",
 }
</script>