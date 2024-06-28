import React from 'react';
import { FaUniversity } from "react-icons/fa";
import { PiMedalLight } from "react-icons/pi";

const AcademicDetails = () => {
    return (
        <div className="academic-details">
            <h1>Academic Details</h1>

            <div className="academic-item">
                <div className="academic-duration">2020 - 2024</div>
                <div className="academic-degree">B.Tech- Computer Science</div>
                <div className="academic-institution"><FaUniversity /> Graphic Era Hill University, Dehradun</div>
                <div className="academic-gpa"><PiMedalLight /> GPA: 8.0/10.0</div>
            </div>

            <div className="academic-item">
                <div className="academic-duration">2019</div>
                <div className="academic-degree">12th- Intermediate</div>
                <div className="academic-institution"><FaUniversity /> M.D.S Inter College, Najibabad</div>
                <div className="academic-gpa"><PiMedalLight />Percent: 76%</div>
            </div>

            <div className="academic-item">
                <div className="academic-duration">2017</div>
                <div className="academic-degree">10th- High School</div>
                <div className="academic-institution"><FaUniversity /> M.D.S Inter College, Najibabad</div>
                <div className="academic-gpa"><PiMedalLight /> Percent: 82%</div>
            </div>
        </div>
    );
}

export default AcademicDetails;
