<template>
  <div class="about">
    <h3>About Us</h3>
    <div class="about-para">
      <p>Welcome to Code Quest, an interactive app designed to teach the
         basics of Python and the Django web framework through engaging coding <a href="#" target="_blank" rel="noopener">challenges</a> and quizzes. 
         Our mission is to make learning programming accessible,
         enjoyable, and effective for everyone, regardless of their background or experience level.</p>
    </div>
    <h3>How It Works</h3>
    <div class="about-para">
      <p>
        Code Quest offers a series of levels, each containing unique <a href="#" target="_blank" rel="noopener">challenges</a> that 
        progressively build your understanding of Python and Django. Users start with foundational
        concepts and gradually advance to more complex topics, ensuring a solid grasp of each subject
        before moving on. The app employs a puzzle or quiz format, where users solve coding problems
        and receive immediate feedback. This hands-on approach not only reinforces learning but also
        makes the process fun and rewarding. Additionally, the app features
        notifications for feedback and rewards, motivating users to keep progressing.
      </p>
    </div>
    <h3>Who It's Helping</h3>
    <div class="about-para">
      <p>
        Code Quest is designed to help students and individuals 
        interested in learning Python and Django. Whether you're a complete
        beginner or someone looking to enhance your programming skills, Code Quest provides 
        a structured and interactive way to learn. The app is particularly beneficial for students
        who need a supplementary tool to aid their studies, hobbyists seeking to
        develop new skills, and professionals looking to expand their knowledge in web development.
      </p>
    </div>
    <h3>Who Can Use It</h3>
    <div class="about-para">
      <p>
        Anyone with a desire to learn Python and Django can use Code Quest. The app is perfect for:
      </p>
      <ul>
        <li>
          <strong>Students:</strong> 
          Enhance your understanding of programming concepts and apply them in a practical, hands-on manner.
        </li>
        <li>
          <strong>Educators:</strong> 
          Use Code Quest as a teaching aid to supplement your curriculum and engage 
          students with interactive content.
        </li>
        <li>
          <strong>Self-Learners:</strong> 
          Learn at your own pace, track your progress, and enjoy a gamified learning experience.
        </li>
        <li>
          <strong>Professionals:</strong> 
          Sharpen your skills and stay updated with the latest in Python and Django development.
        </li>
      </ul>
    </div>
    <h3>Additional Resources</h3>
    <div class="about-para">
      <p>
        In addition to interactive <a href="#" target="_blank" rel="noopener">challenges</a> and quizzes,
        Code Quest also provides detailed <a href="#" target="_blank" rel="noopener">articles</a> on various topics 
        related to Python and Django. These <a href="#" target="_blank" rel="noopener">articles</a> serve as valuable resources 
        for users looking to deepen their understanding of specific concepts, 
        offering in-depth explanations, practical examples, and best practices.
      </p>
    </div>
    <h3>Meet the Developer</h3>
    <div class="about-para">
      <p>
        Code Quest was developed by a passionate <a href="#" target="_blank" rel="noopener">web developer and IT student</a> dedicated 
        to making programming education accessible and engaging. With a background in web 
        development and a strong understanding of the challenges faced by learners, our developer 
        has crafted Code Quest to address these needs effectively. The developer's expertise
        in Vue.js, Django, and educational technology ensures 
        that the app is not only technically robust but also user-friendly and educationally sound.
      </p>
    </div>
    <h3>ChatGPT AI Collaboration</h3>
    <div class="about-para">
      <p>
        The development of Code Quest was significantly enhanced through 
        collaboration with <a href="#" target="_blank" rel="noopener">ChatGPT AI</a>. This AI, designed to support developers, 
        played a crucial role in brainstorming features, providing coding assistance,
        and ensuring the app's educational content is accurate and effective. <a href="#" target="_blank" rel="noopener">ChatGPT AI's </a>
        ability to quickly analyze and generate solutions helped streamline the development 
        process, allowing the developer to focus on creating an intuitive and engaging learning experience.
        This partnership highlights the potential of AI to support and enhance human creativity and productivity
        in software development.
      </p>
    </div>    
    <p class="about-conclusion">
      Join us on this exciting journey and embark on your own
      Code Quest today. Whether you're a student, educator, or self-learner, 
      our app is here to support your learning and 
      help you master Python and Django in an enjoyable and effective way.
    </p>
  </div>
</template>

<style scoped>
h3 {
  margin-top:30px;
}
a {
  color: #42b983;
  text-decoration: none;
}
.about-para{
  width:600px;  
  margin: 0 auto;
}
.about-para p{
  text-align: justify;
  text-wrap: balance;
}
.about-para ul {
  text-align: justify;
  text-wrap: stable;
}
.about-para ul li{
  margin-top:20px;
}
.about .about-conclusion{
  width:600px;  
  margin: 50px auto;
  text-align: justify;
  text-wrap: balance;
}
@media (max-width: 768px) {
    .about-para{
    width:90%;    
  }
  .about .about-conclusion{
    width:90%;    
  }
}
</style>

