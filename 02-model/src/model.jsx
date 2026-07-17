import { useRef } from "react";
import { useState } from "react";

export function Model() {
  const [isOpen, setIsOpen] = useState(false);
  const modelRef = useRef(null);

  const handleCloseModel = () => setIsOpen(false);

  return (
    <div style={{ textAlign: "center", padding: "50px", height: "100vh" }}>
      <h1>Modal Popup</h1>

      <button
        className="cursor-pointer p-2 border rounded"
        onClick={() => setIsOpen(true)}
      >
        Open Modal
      </button>

      {isOpen && (
        <div
          onMouseDown={handleCloseModel}
          data-testid="model-backdrop"
          className="flex items-center justify-center absolute h-full w-full  flex-col transition-all inset-0 backdrop-blur-xs "
        >
          <div
            className="z-50"
            className="bg-white rounded-md border text-black p-4 "
            onMouseDown={(e) => e.stopPropagation()}
            ref={modelRef}
          >
            <h1>Model Header</h1>
            <p>This is the model body</p>
            <button
              className="cursor-pointer mt-2 border p-1 rounded"
              onClick={handleCloseModel}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
