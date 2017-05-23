import React from 'react';
import ButtonSingle from './button_single';
import HeaderButtons from './header_buttons';

const ButtonBar = (props) => {
        const searchTerms = [
            ['Cats', 'Dogs', 'Monkeys', 'Sharks', 'Dolphins', 'Birds', ],
            ['Chemistry', 'The Planet', 'The Universe', 'The Stars'],
            ['ABC', 'Vowels', 'Numbers']
        ];
        const onInputChange = (term) => {
            props.onSearchTermChange(term);
        }

        const animalList = searchTerms[0].map((subject) => {
            return  <ButtonSingle subject={subject} onInputChange={onInputChange}/>;
        });
        const scienceList = searchTerms[1].map((subject) => {
            return  <ButtonSingle subject={subject} onInputChange={onInputChange}/>;
        });
        const alphabetList = searchTerms[2].map((subject) => {
            return  <ButtonSingle subject={subject} onInputChange={onInputChange}/>;
        });

        return (
            <div className="col-md-12 button-bar">
                <HeaderButtons title="Amazing Animals!" data={animalList} />
                <HeaderButtons title="Super Science!" data={scienceList} />
                <HeaderButtons title="Letters and Numbers!" data={alphabetList} />
            </div>
        );
}
export default ButtonBar;
