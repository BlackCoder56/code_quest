<template>
  <div class="challenge-view">
    
    <div class="content">
      <ChallengesPage  :challenges="challenges" :levels="levels" />
    </div>
  </div>
</template>

<script>
import ChallengesPage from "@/components/ChallengesPage.vue";

export default {
  components: {
    ChallengesPage
  },
  data() {
    return {
      user: {
        username: "JohnDoe",
        profilePicture: "/path/to/profile-pic.jpg"
      },
      levels: [
        { id: 1, title: "Introduction to Python" },
        { id: 2, title: "Data Types" },
        { id: 3, title: "Control Flow" },
        { id: 4, title: "Data Types" },
        { id: 5, title: "Introduction to Python" },
        { id: 6, title: "Data Types" },
        { id: 7, title: "Control Flow" },
      ],
      challenges: [
        { id: 1, title: "Variables", status: "Completed", levelId: 1 },
        { id: 2, title: "Loops", status: "Incomplete", levelId: 3 },
        { id: 3, title: "If Statements", status: "Failed", levelId: 3 }
      ]
    };
  }
};
</script>

<style scoped>
.challenge-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.navbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #333;
  padding: 10px 20px;
}

.nav-left .nav-link {
  margin-right: 20px;
  color: white;
  text-decoration: none;
}

.nav-right {
  display: flex;
  align-items: center;
}

.profile-picture {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
}

.username {
  color: white;
  font-weight: bold;
}

.content {
  margin-top: 20px;
  width: 100%;
}
</style>
