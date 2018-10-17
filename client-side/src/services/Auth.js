import Api from "@/plugins/axios";

export default {
  register(credentials) {
    return Api().post("register", credentials);
  }
};
