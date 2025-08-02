// vibe.js — V.I.B.E. AI Assistant Logic

const vibeOrb = document.getElementById('vibeOrb');
const morphSelect = document.getElementById('morphSelect');

// Morph function triggered by dropdown or voice
function morph() {
  const value = morphSelect.value;
  switch (value) {
    case 'dancer':
      vibeOrb.textContent = '🕺';
      break;
    case 'notes':
      vibeOrb.textContent = '🎵';
      break;
    case 'mic':
      vibeOrb.textContent = '🎤';
      break;
    case 'grammy':
      vibeOrb.textContent = '🏆';
      break;
    case 'face':
      vibeOrb.textContent = '😎';
      break;
    default:
      vibeOrb.textContent = '🎧';
  }
}

// Voice command listener
if ('webkitSpeechRecognition' in window) {
  const recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.onresult = (event) => {
    const transcript = event.results[event.results.length - 1][0].transcript.toLowerCase();
    console.log('VIBE Heard:', transcript);

    if (transcript.includes('twista')) {
      vibeOrb.textContent = '🎤';
    } else if (transcript.includes('boyz ii men') || transcript.includes('boys to men')) {
      vibeOrb.textContent = '🎵';
    } else if (transcript.includes('grammy')) {
      vibeOrb.textContent = '🏆';
    } else if (transcript.includes('joke')) {
      tellJoke();
    }
  };
  recognition.start();
}

function tellJoke() {
  const jokes = [
    "Why did the beat break up with the bassline? It couldn't handle the drop.",
    "What do you call a 90s R&B singer who's always cold? Chillz II Men.",
    "Why did Jodeci go to therapy? Too many 'Forever My Lady' issues.",
    "Why doesn’t Twista ever lose at poker? He raps everyone’s tells too fast!"
  ];
  const joke = jokes[Math.floor(Math.random() * jokes.length)];
  alert(`🎙️ V.I.B.E. says:\n${joke}`);
}
