// audioEngine.js — Web Audio Engine for Mic Input, Waveform Drawing, and Recording

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
let analyser, dataArray, bufferLength, source, recorder, stream;
const canvas = document.getElementById("waveform");
const canvasCtx = canvas.getContext("2d");

// Setup Audio Graph
async function initMic() {
  try {
    stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    source = audioCtx.createMediaStreamSource(stream);
    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 2048;
    bufferLength = analyser.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);
    source.connect(analyser);
    drawWaveform();
  } catch (err) {
    alert("Mic access denied or unavailable.");
  }
}

function drawWaveform() {
  requestAnimationFrame(drawWaveform);
  analyser.getByteTimeDomainData(dataArray);
  canvasCtx.fillStyle = "#222";
  canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
  canvasCtx.lineWidth = 2;
  canvasCtx.strokeStyle = "#00f2ff";
  canvasCtx.beginPath();

  const sliceWidth = canvas.width * 1.0 / bufferLength;
  let x = 0;

  for (let i = 0; i < bufferLength; i++) {
    const v = dataArray[i] / 128.0;
    const y = v * canvas.height / 2;
    if (i === 0) {
      canvasCtx.moveTo(x, y);
    } else {
      canvasCtx.lineTo(x, y);
    }
    x += sliceWidth;
  }
  canvasCtx.lineTo(canvas.width, canvas.height / 2);
  canvasCtx.stroke();
}

// Recording logic (basic)
let mediaRecorder, recordedChunks = [];

function startRecording() {
  mediaRecorder = new MediaRecorder(stream);
  mediaRecorder.ondataavailable = e => recordedChunks.push(e.data);
  mediaRecorder.onstop = saveRecording;
  recordedChunks = [];
  mediaRecorder.start();
}

function stopRecording() {
  if (mediaRecorder && mediaRecorder.state !== "inactive") {
    mediaRecorder.stop();
  }
}

function saveRecording() {
  const blob = new Blob(recordedChunks, { type: 'audio/webm' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "recording.webm";
  a.click();
}
