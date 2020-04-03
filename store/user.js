import User from "../Services/User";

export const state = function () {
  return {
    users: [],
    user: {},
    errors:{},
    meta: {},
  }
};

export const mutations = {
  SET_USERS(state, users){
    state.users = users;
  },
  SET_USER(state,user){
    state.user = user;
  },
  SET_ERRORS(state, errors){
    state.errors = errors;
  },
  SET_META(state, meta){
    state.meta = meta;
  }
};

export const actions = {
  async getUsers({commit}, url = ''){
    console.log('here');
    let response = await User.fetchUsers(this.$axios, url);
    commit('SET_USERS', response.data);
    commit('SET_META', response.meta);
  },

  async getUser({commit}, id){
    let users = await User.fetchUser(this.$axios, id).catch(err => {
      if (typeof err.response == "object" && err.response.status == 403){
        this.$router.push('/login');
      }
    });
    console.log(users);
    commit('SET_USER', users);
  },

  async updateUser({commit}, formData){
    return await User.updateUser(this.$axios, formData)
  },

  setErrorData({commit}, errors){
    commit('SET_ERRORS', errors);
  },

  async createUser({commit}, formData){
    return await User.createUser(this.$axios, formData)
  }
};