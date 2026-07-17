import { useState } from "react";
import { LucideArrowDown, LucideArrowUp } from "lucide-react";

export function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const setIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  if (!items || items.length === 0) {
    return <div className="empty-message">No items available</div>;
  }

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div className="accordion-item" key={`${item.title}-${index}`}>
          <div onClick={() => setIndex(index)} className="accordion-title">
            <p>{item.title}</p>
            {activeIndex === index ? <LucideArrowUp /> : <LucideArrowDown />}
          </div>
          {activeIndex === index && (
            <div className="accordion-content">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}
