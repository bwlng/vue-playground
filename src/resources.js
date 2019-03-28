import Vue from 'vue'
import ResourcesCriteria from './components/ResourcesCriteria.vue'
import ResourcesList from './components/ResourcesList.vue'
import ResourcesSidebar from './components/ResourcesSidebar.vue'
import axios from 'axios'
import qs from 'qs'

Vue.config.productionTip = false

import "./styles.css";

new Vue({
  el: "#app",
  data: {
    users: [],
    posts: []
  },
  components: {
    ResourcesCriteria,
    ResourcesSidebar,
    ResourcesList,
  },
  computed: {
    selectedUsersIds() {
        let selectedUsers = this.users.filter(user => user.isSelected)
        let selectedUsersIds = []

        selectedUsers.forEach(user => {
            selectedUsersIds.push(user.id)
        })

        return selectedUsersIds
    },
  },
  methods: {
    getPosts() {
        axios({
            url: `https://jsonplaceholder.typicode.com/posts?${qs.stringify({ userId: this.selectedUsersIds }, {arrayFormat: 'brackets'})}`,
            method: 'get',
        }).then((result) => {
            if (result.status == 200) {
                this.posts = result.data
            }
        }).catch((error) => {
            console.log(error)
        })
    },
    getUsers() {
        axios({
            url: 'https://jsonplaceholder.typicode.com/users',
            method: 'get',
        }).then((result) => {
            if (result.status == 200) {
                result.data.forEach(user => { user.isSelected = false })
                this.users = result.data
            }
        }).catch((error) => {
            console.log(error)
        })
    }
  },
  mounted() {
    this.getPosts()
    this.getUsers()

    this.$root.$on('updateCriteria', (updatedUser, $event) => {
        this.users.forEach(user => {
            if (user.id == updatedUser.id) {
                user.isSelected = $event.currentTarget.checked
            }
        })
        this.getPosts()
    })
  }
})
