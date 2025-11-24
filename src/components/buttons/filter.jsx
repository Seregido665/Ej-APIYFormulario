import { useState } from 'react';
import '../../styles/filters.css'

const Dropdown = ({ title, options = [ ], onSelect }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedLabel, setSelectedLabel] = useState(title)

    const toggleDropdown = () => setIsOpen(!isOpen)

    const handleOptionClick = (option) => {
        setSelectedLabel(option.value || option.label);
        setIsOpen(false);
        onSelect(option.value);
    }

    return (
        <div className="dropdown">
            <button 
                className="dropdown-toggle" 
                onClick={toggleDropdown}
                onBlur={() => setIsOpen(false)}  
                    // PARA QUE SE DESSELECCIONE SI "pierde foco" 
                >
                    {title}
            </button>

            {isOpen && (
                <ul>
                    {options.map((option, i) => (
                        <li 
                            kei={i}
                            onMouseDown={(e) => e.preventDefault()}
                                // PARA QUE EL onBlur NO BLOQUEEE el estilo SELECTED
                            onClick={() => handleOptionClick(option)}
                            className={selectedLabel === 
                                (option.value || option.label) ? 'selected' : ''}
                            >
                            <span>
                                {option.label}
                            </span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Dropdown;