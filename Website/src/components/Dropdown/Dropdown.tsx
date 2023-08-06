import './Dropdown.css';
import React, { useState } from 'react';

type DropdownProps = {
    buttonText: string,
    options: DropdownOption[]
}

type DropdownOption = {
    optionText: string,
    optionAction: () => void;
}

function Dropdown(props: DropdownProps) {

    const [optionsExpanded, setOptionsExpanded] = useState(false);
    const [currentSelection, setCurrentSelection] = useState(props.buttonText);

    function onOptionClick(option: any): void {
        setCurrentSelection(option.optionText);
        setOptionsExpanded(false);
        option.optionAction();
    }

    function renderOptions() {

        return (
            <div>
                {props.options.map(function (option) {
                    return (
                        <div 
                            className="dropdown-optn"
                            onClick={() => onOptionClick(option)}>
                            {option.optionText}
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <div className="dropdown">
            <div className="dropdown-btn"
                onClick={() => setOptionsExpanded(!optionsExpanded)}
            >
                <p>
                    {currentSelection}
                </p>
                <p className="dropdown-btn__icon">
                    <i className="dropdown-btn__icon__arrow"></i>
                </p>
            </div>
            <div className="dropdown-btn-options">
                {optionsExpanded && renderOptions()}
            </div>
        </div>
    );
}

export default Dropdown;