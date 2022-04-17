import React from 'react';
import Award from '../Award/Award';
import './Awards.css'

const Awards = () => {
    const awards = [
        {
            id: 1,
            name: 'Best Law Award',
            details: 'Won the Best Law Award Award in 2020 at the California law contest.',
        },
        {
            id: 2,
            name: 'Criminal Law Award',
            details: 'Won the Criminal Law Award in 2021 at the Washington law contest.',
        },
        {
            id: 3,
            name: 'Lawyer Century Award',
            details: 'Won the Lawyer Century Award in 2022 at the New York law contest.',
        }
    ];

    return (
        <div className='awards-container'>
            <div className="container">
                <div className="award-title">
                    <h2>Awards & Recognitions</h2>
                </div>
                
                <div className="awards">
                {awards.map(award => <Award key={award.id} award={award}></Award>)}
                </div>
            </div>
        </div>
    );
};

export default Awards;