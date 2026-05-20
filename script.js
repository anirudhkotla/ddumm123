// Diary Note Web App functionality

// Load notes from localStorage
function loadNotes() {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    renderNotes(notes);
}

// Save note to localStorage
function saveNote() {
    const noteInput = document.getElementById('note-input');
    const noteText = noteInput.value.trim();
    
    if (noteText) {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        const newNote = {
            id: Date.now(),
            text: noteText,
            timestamp: new Date().toISOString()
        };
        notes.push(newNote);
        localStorage.setItem('notes', JSON.stringify(notes));
        noteInput.value = '';
        renderNotes(notes);
    }
}

// Render notes to the DOM
function renderNotes(notes) {
    const notesList = document.getElementById('notes-list');
    notesList.innerHTML = '';
    
    notes.forEach(note => {
        const noteElement = document.createElement('div');
        noteElement.className = 'note';
        noteElement.innerHTML = `
            <p>${note.text}</p>
            <div class="timestamp">${new Date(note.timestamp).toLocaleString()}</div>
        `;
        notesList.appendChild(noteElement);
    });
}

// Event listeners
document.getElementById('save-note').addEventListener('click', saveNote);

// Load notes when the page loads
window.addEventListener('DOMContentLoaded', loadNotes);