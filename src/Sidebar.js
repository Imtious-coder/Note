import React from 'react';

const Sidebar = ({ notes, onAddNote }) => {
    return (
        <div className="app-sidebar">
            <div className="app-sidebar-header">
                <h1>Notes</h1>
                <button onClick={onAddNote}>Add</button>
            </div>
            {/* Notes */}
            <div className="app-sidebar-notes">

                {
                    notes.map((note) => (
                        <div className="app-sidebar-note">
                            {/* Note title and button */}
                            <div className="sidebar-note-title">
                                <strong>TTITLE</strong>
                                <button>Delete</button>
                            </div>
                            {/* Prview */}
                            <p>Note preview</p>
                            <small className="note-meta">
                                Last modified [date]
                            </small>
                        </div>
                    ))
                }

            </div>
        </div >
    );
};

export default Sidebar;