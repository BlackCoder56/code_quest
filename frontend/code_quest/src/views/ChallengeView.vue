<template>
    <div class="challenge-view">
      <h1 class="challenge-title">{{ challenge.title }}</h1>
      <p class="challenge-description">{{ challenge.description }}</p>
      <p class="challenge-topic"><strong>Topic:</strong> {{ challenge.levelId.String }}</p>
      
      <div class="code-input-section">
        <textarea 
          v-model="userCode" 
          placeholder="Type your code here..." 
          rows="10"
          class="code-input"
        ></textarea>
        <button 
          @click="submitAnswer" 
          class="submit-button" 
          :disabled="userCode.trim() === ''"
        >
          Submit
        </button>
      </div>
      
      <div v-if="feedbackMessage" class="feedback-message">
        <p :class="{ 'correct': isAnswerCorrect, 'incorrect': !isAnswerCorrect }">
          {{ feedbackMessage }}
        </p>
        <button 
          v-if="isAnswerCorrect" 
          @click="goToNextChallenge" 
          class="next-challenge-button"
        >
          Next Challenge
        </button>
      </div>
      
      <div class="related-articles">
        <h2>Related Articles</h2>
        <ul>
          <li v-for="article in relatedArticles" :key="article.id">
            <a :href="article.link" target="_blank">{{ article.title }}</a>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
export default {
  props: {
    id: String,
  },
  data() {
    return {
      challenge: {},
      topicTitle: '',
      userCode: '',
      feedbackMessage: '',
      isAnswerCorrect: false,
      relatedArticles: [
        // Example articles that can be dynamically updated
        { id: 1, title: 'Understanding Python Basics', link: '#' },
        { id: 2, title: 'Getting Started with Python', link: '#' },
        { id: 3, title: 'Common Python Mistakes', link: '#' },
      ],
    };
  },
  created() {
    this.fetchChallengeData();
  },
  methods: {
    fetchChallengeData() {
      // Assuming the challengesView data is available globally or via a store
      const challenges = [
        { id: 1, title: "Variables", status: "Completed", levelId: 1 },
        { id: 2, title: "Loops", status: "Incomplete", levelId: 3 },
        { id: 3, title: "If Statements", status: "Failed", levelId: 3 },
        { id: 4, title: "Functions", status: "", levelId: 6 }
      ];
      
      const levels = [
        { id: 1, title: "Introduction to Python" },
        { id: 2, title: "Data Types" },
        { id: 3, title: "Control Flow" },
        // More levels...
      ];

      // Fetch the challenge based on the id from the route
      this.challenge = challenges.find(c => c.id === parseInt(this.id)) || {};

      // Fetch the topic title based on the levelId
      const level = levels.find(l => l.id === this.challenge.levelId);
      this.topicTitle = level ? level.title : 'Unknown Level';
    },
    submitAnswer() {
      const correctAnswer = "print('Hello, World!')"; // Example correct answer
      
      if (this.userCode.trim() === correctAnswer) {
        this.isAnswerCorrect = true;
        this.feedbackMessage = 'Congratulations! Your answer is correct.';
      } else {
        this.isAnswerCorrect = false;
        this.feedbackMessage = 'Incorrect answer. Please try again.';
      }
    },
    goToNextChallenge() {
      this.feedbackMessage = '';
      this.userCode = '';
      this.challenge = {
        title: 'Next Challenge Title',
        description: 'Next challenge description...',
        topic: 'Python Basics',
      };
    },
  },
};
</script>

  
  <style scoped>
  .challenge-view {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .challenge-title,
  .challenge-description,
  .challenge-topic,
  .related-articles h2,
  .related-articles ul {
    text-align: left;
  }
  
  .code-input-section {
    margin-bottom: 20px;
  }
  
  .code-input {
    width: 100%;
    padding: 10px;
    font-family: monospace;
    background-color: #2e2e2e;
    color: white;
    border: none;
    border-radius: 6px;
    resize: none; /* Disable resizing */
  }
  
  .submit-button {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .submit-button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  .feedback-message {
    margin-top: 20px;
    font-size: 18px;
    text-align: center;
  }
  
  .feedback-message.correct {
    color: #42b983;
  }
  
  .feedback-message.incorrect {
    color: #ff5555;
  }
  
  .next-challenge-button {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .next-challenge-button:hover {
    background-color: #379e6e;
  }
  
  .related-articles {
    margin-top: 40px;
  }
  
  .related-articles ul {
    list-style: none;
    padding: 0;
  }
  
  .related-articles li {
    margin-bottom: 5px;
  }
  
  .related-articles a {
    color: #42b983;
    text-decoration: none;
  }
  
  .related-articles a:hover {
    text-decoration: underline;
  }
  </style>
  