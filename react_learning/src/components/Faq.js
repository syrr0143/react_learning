import React, { useState } from 'react';
import '../App.css';
import questions from './Faq_data';

function Faq() {
    const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(-1);

    return (
        <div>
            <h1>Frequently asked questions</h1>
            <div className="faqouter">
                {questions.map((que, index) => (
                    <div key={index}>
                        <p onClick={() =>
                        //this line of code is basically checking which one of the question is clicked , initially all of them is set to -1 when we click onany of them then it render and set index 

                        // if else form of this code is 
                        
                        // if (selectedQuestionIndex === index) {
                        //     setSelectedQuestionIndex(-1); // If the clicked question is already selected, deselect it
                        // } else {
                        //     setSelectedQuestionIndex(index); // If a different question is clicked, select it
                        // }
                        
                        { setSelectedQuestionIndex(selectedQuestionIndex === index ? -1 : index) }} className='questions'>
                            {index + 1}. {que.question}
                        </p>
                        {selectedQuestionIndex === index && <p className='answers'>
                            {que.answer}
                        </p>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Faq;
