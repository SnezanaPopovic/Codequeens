import React, { useState, useEffect, useRef } from "react";

function NotesApp() {
  const [note, setNote] = useState("");
  const [lastSaved, setLastSaved] = useState(null);
  const [status, setStatus] = useState("Saved");
  const intervalRef = useRef(null);

  useEffect(() => {
    const savedNote = localStorage.getItem("note");
    const savedTime = localStorage.getItem("lastSaved");
    if (savedNote) setNote(savedNote);
    if (savedTime) setLastSaved(savedTime);
  }, []);

  const saveNote = () => {
    const time = new Date().toLocaleTimeString();
    localStorage.setItem("note", note);
    localStorage.setItem("lastSaved", time);
    setLastSaved(time);
    setStatus("Saved");
  };

  useEffect(() => {
    if (note.trim() === "") return;

    setStatus("Saving...");
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      saveNote();
    }, 3000);

    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [note]);

  const handleManualSave = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    saveNote();
  };

  return (
    <div>
      <h3>Beleske</h3>
      <textarea value={note} onChange={(e) => setNote(e.target.value)} />
      <div>
        <button onClick={handleManualSave}>Save now</button>
        <div>
          {status === "Saving..." ? "Saving..." : "Saved"}{" "}
          {lastSaved && `u ${lastSaved}`}
        </div>
      </div>
    </div>
  );
}

export default NotesApp;
