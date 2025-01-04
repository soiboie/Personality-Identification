let quizData = [
  
    {
      question: "You prefer:",
      options: ["Large Social Gatherings", "One-on-one interactions", "Small groups of close friends", "Being alone"],
      extrovertScore: 2,
      introvertScore: 1,
      extrovertScore: 1,
      introvertScore: 2
    },
    {
      question: "When you have free time, you prefer to:",
      options: ["Go out and socialize", "Stay in and recharge", "Balance staying in and going out", "Spend time alone or with a small group"],
      extrovertScore: 2,
      introvertScore: 2,
      extrovertScore: 1,
      introvertScore: 1
    },
    {
      question: "You usually describe yourself as:",
      options: ["Outgoing and sociable", "Quiet and introspective", "Ambivert (balanced between introversion and extroversion)", "Sometimes outgoing, sometimes quiet"],
      extrovertScore: 2,
      introvertScore: 2,
      extrovertScore: 1,
      introvertScore: 1
    },
    {
      question: "You feel energized after:",
      options: ["A lively party", "A quiet evening at home", "Both, depending on the situation", "Neither, I recharge in my own way"],
      extrovertScore: 2,
      introvertScore: 2,
      extrovertScore: 1,
      introvertScore: 1
    },
    {
      question: "You prefer to work:",
      options: ["In teams", "Alone", "In a balanced setting", "Collaboratively but with some alone time"],
      extrovertScore: 2,
      introvertScore: 2,
      extrovertScore: 1,
      introvertScore: 1
    },
    {
      question: "To prepare for a night out...",
      options: ["I get all my friends together to plan where we'll dance the night away.", "Prepare ahead of time so I'm not rushed", "Decide last minute, I like the excitement", "Balance planning and spontaneity"],
      extrovertScore: 2,
      introvertScore: 2,
      extrovertScore: 1,
      introvertScore: 1
    },
  {
      question: "What's your idea of the perfect date?",
      options: ["A live concert in central ", "A mix of activities", "ParkDinner and a Broadway show, both social and quiet", "A cozy night in, just the two of us"],
      extrovertScore: 2,
      introvertScore: 1,
      extrovertScore: 1,
      introvertScore: 2
    },
    {
      question: "When I'm dealing with a personal problem, I prefer to...",
      options: ["Talk about it with others and enlist their help", "Solve it on my own. I keep my private life private.", "Seek advice from a few trusted individuals", "Take time to reflect and consider my options"],
      extrovertScore: 2,
      introvertScore: 2,
      extrovertScore: 1,
      introvertScore: 1
    },
    {
      question: "On the topic of public speaking....",
      options: ["It's not my strongest suit but I'll do it if i have to.", "I get super nervous.I'd rather write 5 research papers.", "I enjoy the adrenaline rush and challenge", "I can do it, but I prefer smaller group discussions"],
      extrovertScore: 1,
      introvertScore: 2,
      extrovertScore: 1,
      introvertScore: 1
    },
    {
      question: "How do you prefer to communicate ?",
      options: ["It depends on the situation but i can be flexible.", "Just text me please!", "I prefer phone calls or in-person conversations", "Email or messaging is fine, but avoid phone calls"],
      extrovertScore: 1,
      introvertScore: 2,
      extrovertScore: 2,
      introvertScore: 1
    },
    {
      question: "You prefer to focus on",
      options: ["The big picture and future possibilities", "Present facts and details", "Both, depending on the context", "Neither, I prefer a balanced approach"],
      intuitionScore: 2,
      sensingScore: 2,
      intuitionScore: 1,
      sensingScore: 1
    },
    {
      question: "When making a decision, you usually",
      options: ["Go with your gut feeling", "Consider all the facts and details", "Balance intuition and facts", "Make decisions based on a mix of both"],
      intuitionScore: 2,
      sensingScore: 2,
      intuitionScore: 1,
      sensingScore: 1
    },
    {
      question: "You are more interested in",
      options: ["New ideas and concepts", "Real-world information and experiences", "A mix of both", "Neither, I appreciate all kinds of knowledge"],
      intuitionScore: 1,
      sensingScore: 2,
      intuitionScore: 1,
      sensingScore: 2
    },
    {
      question: "You are better at",
      options: ["Noticing current situations", "Anticipating future trends", "Both, depending on the situation", "Neither, I'm equally skilled at both"],
      intuitionScore: 1,
      sensingScore: 2,
      intuitionScore: 1,
      sensingScore: 1
    },
    {
      question: "You prefer to learn through",
      options: ["Practical applications", "Concepts and theories", "A mix of both", "Neither, I prefer other methods"],
      intuitionScore: 1,
      sensingScore: 2,
      intuitionScore: 1,
      sensingScore: 1
    },
    {
      question: "You are more likely to trust",
      options: ["Your intuition and insights", "Your senses and experiences", "Both, depending on the situation", "Neither, I rely on a combination of both"],
      intuitionScore: 2,
      sensingScore: 2,
      intuitionScore: 1,
      sensingScore: 1
    },
    {
      question: "You prefer to plan your future",
      options: ["Neither, I prefer to live in the present", "Based on your current situation and resources", "A mix of both", "Based on your vision and goals"],
      intuitionScore: 2,
      sensingScore: 1,
      intuitionScore: 1,
      sensingScore: 2
    },
    {
      question: "You are more likely to say",
      options: ["I have a feeling that...", "I have noticed that...", "I might say either, depending on the context", "I prefer not to make assumptions"],
      intuitionScore: 2,
      sensingScore: 2,
      intuitionScore: 1,
      sensingScore: 1
    },
    {
      question: "You prefer to spend your free time",
      options: ["Exploring new hobbies and interests", "Engaging in familiar activities", "Neither, I prefer other activities", "A mix of both"],
      intuitionScore: 2,
      sensingScore: 2,
      intuitionScore: 1,
      sensingScore: 1
    },
    {
      question: "You are more comfortable with",
      options: ["Neither, I'm comfortable with either", "A mix of both", "Change and uncertainty", "Stability and predictability"],
      intuitionScore: 1,
      sensingScore: 1,
      intuitionScore: 2,
      sensingScore: 2
    },
    {
      question: "When making decisions, you prioritize",
      options: ["Logic and fairness", "Empathy and harmony", "A balance of both", "Neither, I prioritize other factors"],
      thinkingScore: 2,
      feelingScore: 2,
      thinkingScore: 1,
      feelingScore: 1
    },
    {
      question: "You are more likely to be seen as",
      options: ["Analytical and objective", "A mix of both", "Neither, I am unique", "Warm and compassionate"],
      thinkingScore: 2,
      feelingScore: 1,
      thinkingScore: 1,
      feelingScore: 2
    },
    {
      question: "You prefer to solve problems using",
      options: ["Impersonal analysis", "Personal values and considerations", "Neither, I prefer other methods", "A mix of both"],
      thinkingScore: 2,
      feelingScore: 2,
      thinkingScore: 1,
      feelingScore: 1
    },
    {
      question: "When giving feedback, you focus on",
      options: ["Constructive criticism", "Understanding and support", "Neither, I focus on other aspects", "A mix of both"],
      thinkingScore: 2,
      feelingScore: 2,
      thinkingScore: 1,
      feelingScore: 1
    },
    {
      question: "You are more likely to be influenced by",
      options: ["Emotional appeals", "Logical arguments", "Neither, I am not easily influenced", "A mix of both"],
      feelingScore: 2,
      thinkingScore: 2,
      thinkingScore: 1,
      feelingScore: 1
    },
    {
      question: "Your moral compass is guided by",
      options: ["Kindness and compassion", "Principles and fairness", "Neither, I follow my conscience", "A mix of both"],
      feelingScore: 2,
      thinkingScore: 2,
      thinkingScore: 1,
      feelingScore: 1
    },
    {
      question: "You are more comfortable with",
      options: ["Debating ideas", "Sharing personal experiences", "Neither, I am comfortable with various interactions", "A mix of both"],
      thinkingScore: 1,
      feelingScore: 2,
      thinkingScore: 2,
      feelingScore: 1
    },
    {
      question: "When resolving conflicts, you tend to",
      options: ["Understand others' perspectives", "Negotiate based on principles", "A mix of both", "Neither, I use a different approach"],
      feelingScore: 2,
      thinkingScore: 2,
      thinkingScore: 1,
      feelingScore: 1
    },
    {
      question: "You are more interested in",
      options: ["Impartiality and objectivity", "A mix of both", "Neither, I am interested in various aspects", "Harmony and connection"],
      thinkingScore: 2,
      feelingScore: 1,
      thinkingScore: 1,
      feelingScore: 2
    },
    {
      question: "You prefer to make decisions",
      options: ["Based on consistent rules", "Considering individual circumstances", "A mix of both", "Neither, I use a different approach"],
      thinkingScore: 2,
      feelingScore: 2,
      thinkingScore: 1,
      feelingScore: 1
    },
    {
      question: "You prefer to plan your day",
      options: ["Spontaneously", "In advance", "A mix of both", "Neither, I don't have a preference"],
      perceivingScore: 2,
      judgingScore: 2,
      judgingScore: 1,
      perceivingScore: 1
    },
    {
      question: "When it comes to deadlines, you",
      options: ["Like to finish things early", "Balance early completion and last-minute work", "Tend to wait until the last minute", "Neither, I manage deadlines differently"],
      judgingScore: 2,
      perceivingScore: 2,
      judgingScore: 1,
      perceivingScore: 1
    },
    {
      question: "Your workspace is usually",
      options: ["Flexible and adaptable", "Organized and tidy", "A mix of both", "Neither, I have a unique workspace"],
      perceivingScore: 2,
      judgingScore: 2,
      judgingScore: 1,
      perceivingScore: 1
    },
    {
      question: "You prefer to make plans",
      options: ["Set in stone", "A mix of both", "Neither, I approach planning differently", "Flexible and open to change"],
      judgingScore: 2,
      perceivingScore: 1,
      judgingScore: 1,
      perceivingScore: 2
    },
    {
      question: "You are more likely to be seen as",
      options: ["Adaptable and spontaneous", "Structured and decisive", "A mix of both", "Neither, I am unique"],
      perceivingScore: 2,
      judgingScore: 2,
      judgingScore: 1,
      perceivingScore: 1
    },
    {
      question: "When faced with a decision, you tend to",
      options: ["Weigh the pros and cons", "Go with the flow", "Neither, I decide differently", "A mix of both"],
      judgingScore: 2,
      perceivingScore: 2,
      judgingScore: 1,
      perceivingScore: 1
    },
    {
      question: "You prefer to have",
      options: ["A clear schedule", "A more open schedule", "A mix of both", "Neither, I have a unique schedule"],
      judgingScore: 2,
      perceivingScore: 2,
      judgingScore: 1,
      perceivingScore: 1
    },
    {
      question: "You are more comfortable with",
      options: ["Making decisions quickly", "Taking time to consider all options", "A mix of both", "Neither, I am comfortable with various paces"],
      judgingScore: 2,
      perceivingScore: 2,
      judgingScore: 1,
      perceivingScore: 1
    },
    {
      question: "You prefer to",
      options: ["Try new things", "Stick to a routine", "A mix of both", "Neither, I have a unique approach"],
      perceivingScore: 2,
      judgingScore:2,
      judgingScore: 1,
      perceivingScore: 1
    },
    {
      question: "You are more likely to",
      options: ["Follow a to-do list", "Do things as they come", "A mix of both", "Neither, I handle tasks differently"],
      judgingScore: 2,
      perceivingScore: 2,
      judgingScore: 1,
      perceivingScore: 1
    }
  ];
  const quizContainer = document.querySelector(".quiz-container");
  const question = document.querySelector(".quiz-container .question");
  const options = document.querySelector(".quiz-container .options");
  const nextBtn = document.querySelector(".quiz-container .next-btn");
  const quizResult = document.querySelector(".quiz-result");
  const startBtnContainer = document.querySelector(".start-btn-container");
  const startBtn = document.querySelector(".start-btn-container .start-btn");
  
  
  
  let questionNumber = 0;
  let introvertScore = 0;
  let extrovertScore = 0;
  let intuitionScore = 0;
  let sensingScore = 0;
  let thinkingScore = 0;
  let feelingScore = 0;
  let judgingScore = 0;
  let perceivingScore = 0;
  const MAX_QUESTIONS = quizData.length;
