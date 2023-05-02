<template>
    <h1>Liste Mention</h1>
    <table class="table">
        <thead>
            <tr>
            <th scope="col">Code</th>
            <th scope="col">Nom</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">INFO</th>
                <td>INFORMATIQUE</td>
                <td>
                    <button class="btn btn-primary mr-2">Editer</button>
                    <button class="btn btn-danger">Supprimer</button>
                </td>
            </tr>
            <tr>
                <th scope="row">MANAG</th>
                <td>MANAGEMENT</td>
                <td>
                    <button class="btn btn-primary mr-2">Editer</button>
                    <button class="btn btn-danger">Supprimer</button>
                </td>
            </tr>
            <tr>
                <th scope="row">COM</th>
                <td>COUNICATION</td>
                <td>
                    <button class="btn btn-primary mr-2">Editer</button>
                    <button class="btn btn-danger">Supprimer</button>
                </td>
            </tr>
        </tbody>
        </table>
</template>
<script>
export default {
    name: "MyMention"
}
</script>