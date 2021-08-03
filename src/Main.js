import React from 'react';

const Main = ({ activeNote, onUpdateNote }) => {
    const onEditField = (key, value) => {
        onUpdateNote({
            ...activeNote,
            [key]: value,
            lastModified: Date.now(),
        })
    }


    if(!activeNote) return <div className="no-active-note">No note selected</div>


    return (
        <div className="app-main">
            {/* Input fields.. */}
            <div className="app-main-note-edit">

                <input
                    type="text"
                    name="" id="title"
                    value={activeNote.title}
                    onChange={(e) => onEditField("title", e.target.value)}
                    autoFocus />

                <textarea
                    id="body"
                    placeholder="Write you note here..."
                    value={activeNote.body}
                    onChange={(e) => onEditField("body", e.target.value)} />

            </div>
            {/* Note live preview.. */}
            <div className="app-main-note-preview">
                <h1 className="preview-title">{activeNote.title}</h1>
                <div className="markdown-preview">{activeNote.body}</div>
            </div>
        </div>
    );
};

export default Main;