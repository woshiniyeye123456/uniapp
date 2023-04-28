const app = {
    state: {
		appData:{phoneCount:0},
		
    },
    mutations: {
	 ADDCOUNT:(state, data) => {
          state.appData.phoneCount += 1
        }
		},
    actions: {
	  addcount:({ commit }, data)  =>{
	            commit('ADDCOUNT', data)
	        }
    }
}

export default app