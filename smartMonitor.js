// smartMonitor.js — Smart Monitor Panel: Video Chat + Media + Screen Share

const monitorTabs = document.querySelectorAll('.monitor-tab');
const monitorPanels = document.querySelectorAll('.monitor-panel');

monitorTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.target;
    monitorPanels.forEach(panel => {
      panel.style.display = panel.id === target ? 'block' : 'none';
    });
    monitorTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

// Load default YouTube video and placeholder chat
document.getElementById('youtubeFrame').src = 'https://www.youtube.com/embed/dQw4w9WgXcQ';

document.getElementById('chatMessages').innerHTML = `
  <p><strong>Jay:</strong> Just finished the hook!</p>
  <p><strong>Ramzi:</strong> Uploading the mix stem now!</p>
  <p><strong>Hollywood:</strong> This is Grammy material 🔥</p>
`;

// Screen share placeholder
document.getElementById('screenFrame').src = 'https://screen-share-placeholder.example.com/';
