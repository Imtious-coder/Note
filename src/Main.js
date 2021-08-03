import React from 'react';
import ReactMarkdown from 'react-markdown';

const Main = ({ activeNote, onUpdateNote }) => {
    const onEditField = (key, value) => {
        onUpdateNote({
            ...activeNote,
            [key]: value,
            lastModified: Date.now(),
        })
    };

    // Default Display...
    if (!activeNote) return <div className="no-active-note">No note selected. Please click <b>Add+</b> to create one</div>


    return (
        <div className="app-main">
            {/* Input fields.. */}
            <div className="app-main-note-edit">

                <input
                    className="Inputs"
                    type="text"
                    name="" id="title"
                    value={activeNote.title}
                    onChange={(e) => onEditField("title", e.target.value)}
                    autoFocus />

                <textarea
                    className="Inputs2"
                    id="body"
                    placeholder="Write you note here..."
                    value={activeNote.body}
                    onChange={(e) => onEditField("body", e.target.value)}>
                </textarea>

            </div>
            {/* Body live preview.. */}
            <div className="app-main-note-preview">
                <h1 className="preview-title">{activeNote.title}</h1>
                <ReactMarkdown className="markdown-preview">{activeNote.body}</ReactMarkdown>
            </div>
        </div>
    );
};

export default Main;