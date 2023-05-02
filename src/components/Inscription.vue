<template>
    <h1>Liste étudiants</h1>
    <br>
    <a href="" class="btn btn-success">Enregistrer étudiant</a>

    <div class="row mt-2">
        <div class="col-md-3">
            <select class="form-control">
                <option>Filtrer par mention</option>
                <option>INFORMATIQUE</option>
                <option>MANAGEMENT</option>
                <option>MULTIMEDIA</option>
            </select>
        </div>

        
        <div class="col-md-3">
            <select class="form-control">
                <option>Filtrer par cycle</option>
                <option>LICENCE</option>
                <option>MASTER</option>
            </select>
        </div>

        <div class="col-md-3">
            <select class="form-control">
                <option>Filtrer par parcours</option>
                <option>DA2I</option>
                <option>SIGD</option>
                <option>M2I</option>
                <option>MD</option>
                <option>RPM</option>
            </select>
        </div>

        <div class="col-md-3">
            <select class="form-control">
                <option>Filtrer par niveau</option>
                <option>L1</option>
                <option>L2</option>
                <option>L3</option>
                <option>M1</option>
                <option>M2</option>
            </select>
        </div>

    </div>
    <hr>
    <div class="col-md-12">
        <div class="row">
            <div class="col-md-4 mb-2">
                <div class="card">
                    <div class="card-body">
                        <p class="card-title">
                            RAKOTONANDRASANA Jean
                        </p>
                        <p>
                            <span>Date de naissance: 14/12/1995</span>
                            <br>
                            <span>Lieu: Manakara</span>
                        </p>
                        <p>
                            <button class="btn btn-light mr-2">voir</button>
                            <button class="btn btn-primary mr-2">editer</button>
                            <button class="btn btn-danger mr-2">supprimer</button>
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-md-4 mb-2">
                <div class="card">
                    <div class="card-body">
                        <p class="card-title">
                            RAKOTONANDRASANA Jean
                        </p>
                        <p>
                            <span>Date de naissance: 14/12/1995</span>
                            <br>
                            <span>Lieu: Manakara</span>
                        </p>
                        <p>
                            <button class="btn btn-light mr-2">voir</button>
                            <button class="btn btn-primary mr-2">editer</button>
                            <button class="btn btn-danger mr-2">supprimer</button>
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-md-4 mb-2">
                <div class="card">
                    <div class="card-body">
                        <p class="card-title">
                            RAKOTONANDRASANA Jean
                        </p>
                        <p>
                            <span>Date de naissance: 14/12/1995</span>
                            <br>
                            <span>Lieu: Manakara</span>
                        </p>
                        <p>
                            <button class="btn btn-light mr-2">voir</button>
                            <button class="btn btn-primary mr-2">editer</button>
                            <button class="btn btn-danger mr-2">supprimer</button>
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-md-4 mb-2">
                <div class="card">
                    <div class="card-body">
                        <p class="card-title">
                            RAKOTONANDRASANA Jean
                        </p>
                        <p>
                            <span>Date de naissance: 14/12/1995</span>
                            <br>
                            <span>Lieu: Manakara</span>
                        </p>
                        <p>
                            <button class="btn btn-light mr-2">voir</button>
                            <button class="btn btn-primary mr-2">editer</button>
                            <button class="btn btn-danger mr-2">supprimer</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "MyMention"
}
</script>