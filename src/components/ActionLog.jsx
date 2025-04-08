import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Camera } from "lucide-react";

export default function ActionLog() {
  const [logEntries, setLogEntries] = useState([]);
  const [newEntry, setNewEntry] = useState("");
  const [file, setFile] = useState(null);

  const handleAddEntry = () => {
    if (!newEntry) return;
    const entry = {
      text: newEntry,
      time: new Date().toLocaleString(),
      file: file ? file.name : null,
    };
    setLogEntries([entry, ...logEntries]);
    setNewEntry("");
    setFile(null);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">Action Log Component</h2>
      <textarea
        className="w-full border rounded p-2 mb-2"
        placeholder="Write a new log entry..."
        value={newEntry}
        onChange={(e) => setNewEntry(e.target.value)}
      />
      <div className="flex items-center gap-2 mb-2">
        <label className="flex items-center gap-1 cursor-pointer text-blue-500">
          <Camera className="w-4 h-4" />
          <Input
            type="file"
            accept="image/*,.pdf,.doc,.docx"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="hidden"
          />
          <span className="text-sm">Attach File</span>
        </label>
        {file && <span className="text-sm">{file.name}</span>}
      </div>
      <Button onClick={handleAddEntry}>Add Entry</Button>
      <div className="mt-4 space-y-2">
        {logEntries.map((entry, index) => (
          <div key={index} className="p-3 border rounded">
            <div className="text-sm font-semibold">{entry.time}</div>
            <div className="text-sm">{entry.text}</div>
            {entry.file && <div className="text-sm text-blue-500">{entry.file}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
