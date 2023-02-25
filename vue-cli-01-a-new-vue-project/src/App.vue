<template>
  <section>
    <header>
      <h1>FriendList</h1>
    </header>
    <add-contacts @friend-data="addContacts"></add-contacts>
    <ul>
      <li v-for="friend of friends" :key="friend.id">
        <friend-contact
          :id="friend.id"
          :name="friend.name"
          :phone="friend.phone"
          :email="friend.email"
          :isFavourite="friend.isFavourite"
          @toggle-favourite="toggleFavourite"
          @delete-contact="deleteContact"
        ></friend-contact>
      </li>
    </ul>
  </section>
</template>

<script>
import addContacts from './Components/addContacts.vue';
export default {
  components: { addContacts },
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenx",
          phone: "0907987676",
          email: "manu@gmail.com",
          isFavourite: false,
        },
        {
          id: "julie",
          name: "julie naki",
          phone: "12433545",
          email: "manuel@gmail.com",
          isFavourite: false,
        },
      ],
    };
  },
  methods: {
    toggleFavourite(id) {
       let friend = this.friends.find(friend=> friend.id === id);
       friend.isFavourite = !friend.isFavourite
       console.log(this.friends[0])
    },
    addContacts(data){
       this.friends.push(data);
    },
    deleteContact(id){
      this.friends =  this.friends.filter(friend=>friend.id !== id);
      console.log(this.friends);
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li ,#app form{
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
