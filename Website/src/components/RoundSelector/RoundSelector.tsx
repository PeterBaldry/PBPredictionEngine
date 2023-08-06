import './RoundSelector.css';
import React from 'react';
import Dropdown from '../Dropdown/Dropdown';

type DropdownOption = {
    optionText: string,
    optionAction: () => void;
}

type RoundSelectorProps = {
    displayRound: string;
    setDisplayRound: (roundNum: string) => void;
}

function RoundSelector(props: RoundSelectorProps) {

    function getRounds(): DropdownOption[] {
        let rounds = [];
        for (let i=1; i<28; i++) {
            rounds.push({
                optionText: "Round " + i.toString(),
                optionAction: () => {props.setDisplayRound(i.toString())}
            })
        }
        return rounds;
    }

    return (
        <div className="round-selector">
            <Dropdown buttonText={"Round " + props.displayRound} options={getRounds()}></Dropdown>
        </div>
    );
}

export default RoundSelector;