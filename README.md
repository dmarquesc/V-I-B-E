
# 🎧 V.I.B.E. DAW – Setup Guide (Very Intelligent Buddy for Everything)

Welcome to the futuristic browser-based DAW (Digital Audio Workstation) powered by V.I.B.E., your AI music assistant. Follow the steps below to get your environment fully running with all advanced features.

---

## ✅ Prerequisites

Before setup, make sure you have:
- [VS Code](https://code.visualstudio.com/) installed
- [Node.js + npm](https://nodejs.org/) installed
- [GitHub Desktop](https://desktop.github.com/) (optional for syncing to repo)
- A browser like Chrome (for WebRTC, mic, and face API)

---

## 📂 Folder Structure

```
/your-project-folder
├── index.html
├── style.css
├── vibe.js
├── audioEngine.js
├── moodMeter.js
├── smartMonitor.js
├── sessionManager.js
└── models/       <-- Needed for face-api.js
```

---

## 🛠 Step-by-Step Setup

### 1. Clone or Copy Files into a Folder
Open VS Code and either clone your GitHub repo or open a local folder. Add all your downloaded files into this folder.

### 2. Start VS Code Live Server
Install the "Live Server" extension in VS Code:
- Open index.html
- Right-click → `Open with Live Server`

### 3. Setup face-api.js
- Create a `/models/` folder
- Download these files from [face-api.js models repo](https://github.com/justadudewhohacks/face-api.js-models)
- Place them inside `/models/`

You should include:
- `tiny_face_detector_model-weights_manifest.json`
- `face_expression_model-weights_manifest.json`
- and corresponding `.bin` files

### 4. Enable Microphone & Camera
The DAW uses:
- Microphone access for waveform & recording
- Camera for mood detection (face-api.js)

Make sure your browser asks for permission.

---

## 🎹 How to Use

- 🟣 V.I.B.E. orb listens for voice commands (e.g. "Grammy", "Twista", "Joke")
- 🎥 Smart Monitor tab lets you toggle between YouTube, video call, and screen share
- 🎧 AudioEngine records live audio and displays waveform
- 😊 Mood Meter detects emotional state
- 🗨️ Session Chat shows online collaborators

---

## 🧠 Troubleshooting

### No Face Detection?
- Check that `/models/` folder is correctly placed
- Console should not show 404 errors for models
- Make sure your webcam is not blocked

### No Audio or Waveform?
- Allow mic access in your browser
- Use HTTPS for mic permission if hosted

### Voice Commands Not Working?
- Only works in Chrome (webkitSpeechRecognition)
- Check if mic is available and page is active

---

## 🚀 Deployment (Optional)
To publish online:
- Use GitHub Pages, Firebase Hosting, or Netlify
- Make sure to upload the `/models/` folder too!

---

## ✅ Next Steps
- Add MIDI Piano Roll
- Load real plugin effects (Waves, AutoTune, etc.)
- Collaborate live with Firebase
