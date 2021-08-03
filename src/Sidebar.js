import React from 'react';

const Sidebar = ({ 
    notes,
    onAddNote,
    onDeleteNote,
    activeNote,
    setActiveNote
}) => {

    return (
        <div className="app-sidebar">
            {/* Heading */}
            <div className="app-sidebar-header">
                <h1 className="app-sidebar-title">Notes</h1>
                <button className="Add-button" onClick={onAddNote}>Add+</button>
            </div>
            {/* Notes */}
            <div className="app-sidebar-notes">
                {
                    notes.map((note) => (
                        <div className={`app-sidebar-note ${note.id === activeNote && "active"}`} onClick={() => setActiveNote(note.id)}>
                            {/* Note title and button */}
                            <div className="sidebar-note-title">
                                <strong className="notes-titles">{note.title}</strong>
                                <button className="Delete-button" onClick={() => onDeleteNote(note.id)}>Delete</button>
                            </div>
                            {/* Note Perview (...Getting the first 100 letter only...) */}
                            <p>{note.body && note.body.substr(0, 100) + "..."}</p>
                            <small className="notes-titles2">
                                Last Modified{" "}
                                {new Date(note.lastModified).toLocaleDateString("en-GB", {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}
                            </small>
                        </div>
                    ))
                }
            </div>
        </div >
    );
};

export default Sidebar;