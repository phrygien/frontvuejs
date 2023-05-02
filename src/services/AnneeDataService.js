import http from "../http-common";

class AnneeDataService {
  getAll() {
    return http.get("/gestion/annees");
  }

  get(id) {
    return http.get(`/gestion/annees/${id}`);
  }

  create(data) {
    return http.post("/gestion/annees/create", data);
  }

  update(id, data) {
    return http.put(`/gestion/annees/${id}`, data);
  }

  delete(id) {
    return http.delete(`/gestion/annees/${id}`);
  }

  deleteAll() {
    return http.delete(`/gestion/annees`);
  }

  findByTitle(title) {
    return http.get(`/gestion/annees?title=${title}`);
  }
}

export default new AnneeDataService();