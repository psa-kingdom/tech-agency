import React, { useState } from "react";
import { X } from "lucide-react";

// Lets the admin pick from existing/predefined tags OR type a brand new
// custom tag and press Enter to add it.
const TagInput = ({ value = [], onChange, suggestions = [] }) => {
  const [inputValue, setInputValue] = useState("");

  const addTag = (tag) => {
    const trimmed = tag.trim();
    if (!trimmed || value.includes(trimmed)) return;
    onChange([...value, trimmed]);
  };

  const removeTag = (tag) => {
    onChange(value.filter((t) => t !== tag));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag(inputValue);
      setInputValue("");
    }
  };

  const unselectedSuggestions = suggestions.filter((s) => !value.includes(s));

  return (
    <div data-testid="tag-input" className="space-y-3">
      {value.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {value.map((tag) => (
            <span
              key={tag}
              data-testid={`tag-chip-${tag}`}
              className="inline-flex items-center gap-1.5 bg-iris/15 text-iris border border-iris/30 rounded-pill px-3 py-1 text-xs font-medium"
            >
              {tag}
              <button
                type="button"
                onClick={() => removeTag(tag)}
                data-testid={`tag-chip-remove-${tag}`}
                aria-label={`Remove ${tag}`}
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>
      )}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type a tag and press Enter…"
        data-testid="tag-input-field"
        className="w-full bg-obsidian border border-white/10 rounded-lg px-3 py-2 text-sm text-cloud placeholder:text-fog focus:outline-none focus:border-iris/50"
      />
      {unselectedSuggestions.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {unselectedSuggestions.map((tag) => (
            <button
              type="button"
              key={tag}
              onClick={() => addTag(tag)}
              data-testid={`tag-suggestion-${tag}`}
              className="text-xs text-ash border border-white/10 rounded-pill px-3 py-1 hover:border-iris/40 hover:text-cloud transition-colors duration-200"
            >
              + {tag}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default TagInput;
