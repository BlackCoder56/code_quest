<template>
  <div class="challenge-page">
    <div class="sorting-filtering">
      <!-- Horizontally Scrollable Level Badges -->
      <div class="level-badges-container">
        <div class="level-badges">
          <span 
            class="badge"
            :class="{ 'active': selectedLevel === 'all' }"
            @click="selectedLevel = 'all'"
          >
            All Levels
          </span>
          <span 
            v-for="level in levels" 
            :key="level.id" 
            :class="['badge', { 'active': selectedLevel === level.id }]"
            @click="selectedLevel = level.id"
          >
            {{ level.title }}
          </span>
          
        </div>
      </div>

       <!-- Status Filter Dropdown -->
       <div class="status-filter-dropdown">
        <span class="span-text">Sort by Status:</span>
        <select v-model="selectedStatus">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
          <option value="failed">Failed</option>
          <option value="passed">Passed</option>
        </select>
      </div>

    </div>

    <div class="challenge-table">
      <table v-if="filteredChallenges.length > 0">
        <thead class="table-dark">
          <tr >
            <th class="left-align">Challenge</th>
            <th class="left-align status-wid">Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="challenge in filteredChallenges" :key="challenge.id">
            <td class="left-align">{{ challenge.title }}</td>
            <td  class="left-align" :class="statusClass(challenge.status)">
              {{ challenge.status }}
            </td>
            <td class="left-align-btn">
              <router-link :to="{ name: 'ChallengeView', params: { id: challenge.id } }">
                <button>{{ challenge.status === 'Incomplete' ? 'Start' : 'Review' }}</button>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
       <!-- No Results Message -->
      <div v-else class="no-results-message">
        No challenges found matching the selected filters.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    challenges: Array,
    levels: Array
  },
  data() {
    return {
      selectedLevel: 'all',
      selectedStatus: 'all'
    };
  },
  computed: {
    filteredChallenges() {
      return this.challenges.filter(challenge => {
        const levelMatch =
          this.selectedLevel === 'all' || challenge.levelId === this.selectedLevel;
        const statusMatch =
          this.selectedStatus === 'all' || challenge.status.toLowerCase() === this.selectedStatus;
        return levelMatch && statusMatch;
      });
    }
  },
  methods: {
    statusClass(status) {
      const lowerStatus = status.toLowerCase();
      switch (lowerStatus) {
        case 'completed':
        case 'passed':
          return 'status-passed';
        case 'incomplete':
          return 'status-incomplete';
        case 'failed':
          return 'status-failed';
        default:
          return '';
      }
    }
  }
};
</script>

<style scoped>
.challenge-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
.span-text{
  margin-right:5px;
}
.sorting-filtering {
  display: block;
  justify-content: space-between;
  margin-bottom: 20px;
}
.level-badges-container {
  overflow-x: auto;
  white-space: nowrap;
  padding-bottom: 10px;
}

.level-badges {
  display: inline-block;
}

.status-filter {
  display: flex;
  gap: 10px;
}

.level-badges, .status-filter {
  display: flex;
  gap: 10px;
}

.badge {
  padding: 5px 3px;
  background-color: #e0e0e0;
  border-radius: 10px;
  cursor: pointer;
  text-align:center;
  transition: background-color 0.3s;
}

.badge.active {
  background-color: #42b983;
  color: white;
}

.badge:hover {
  background-color: #379e6e;
  color: white;
}
.status-filter-dropdown {
  margin-top:10px;
  display: flex;
  align-items: center;
}

.status-filter-dropdown select {
  padding: 8px;
  border-radius: 20px;
  border: 1px solid #ccc;
  background-color: white;
  cursor: pointer;
}

.challenge-table table {
  width: 100%;
  border-collapse: collapse;
}

.challenge-table th, .challenge-table td {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.table-dark{
  background-color: #000;
  color:#fff;
}

.challenge-table th.left-align,
.challenge-table td.left-align {
  text-align: left;
}

.status-wid{
  width:10px;
}

tbody tr:hover {
  background-color: #f5f5f5;
}

button {
  width:30%;
  padding: 5px 10px;
  border: none;
  background-color: #42b983;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #379e6e;
}

/* Status Colors */
.status-passed {
  color: #42b983;
  font-weight: bold;
}

.status-incomplete {
  color: #ffcc00;
  font-weight: bold;
}

.status-failed {
  color: #ff5555;
  font-weight: bold;
}
</style>
