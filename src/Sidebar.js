import React from 'react';

const Sidebar = () => {
    return (
       <div className="app-sidebar">
           <div className="app-sidebar-header">
               <h1>Notes</h1>
               <button>Add</button>
           </div>
           {/* Notes */}
           <div className="app-sidebar-notes">
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
           </div>
       </div>
    );
};

export default Sidebar;