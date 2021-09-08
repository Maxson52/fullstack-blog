import { writable } from "svelte/store";
import axios from "axios";

const server = "http://localhost:8080/api/articles";

export const articles = writable([]);

function updateArticlesStore() {
  const { subscribe, set, update } = writable(0);

  return {
    subscribe,
    refresh: async () => {
      await axios.get(server).then((res) => {
        articles.set(res.data);
      });
    },
    post: async (title, text) => {
      await axios.post(server, { title: title, text: text });
    },
    put: async (id, title, text) => {
      await axios.put(`${server}/${id}`, { title: title, text: text });
    },
    delete: async (id) => {
      await axios.delete(`${server}/${id}`);
    },
  };
}

export const updateArticles = updateArticlesStore();
