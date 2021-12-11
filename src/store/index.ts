import { createStore } from "vuex";

export default createStore({
  state: {
    comments: [
      {
        title: "First comment",
        id: 1,
        author: "John Doe",
        authorPic: "https://randomuser.me/api/portraits/",
        date: "2020-01-01",
        reply: [
          {
            title: "Second comment",
            id: 2,
            author: "John Doe",
            authorPic: "https://randomuser.me/api/portraits/",
            date: "2020-01-01",
            reply: [],
          },
        ],
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
