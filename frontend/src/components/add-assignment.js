import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import useSubjects from '../hooks/useSubjects';
import useApiRequest from '../hooks/useApiRequest';
import ProgressBar from './progress-bar';


const isValidQuestion = (question) => {
    // Check if the question is a valid string
    if (typeof question !== 'string') {
        return false;
    }

    // Remove leading and trailing whitespaces
    const trimmedQuestion = question.trim();

    // Check if the question is not empty and has a length of at least 5 characters
    if (trimmedQuestion.length < 5) {
        return false;
    }

    // Check if the question is not "undefined" or "null"
    if (trimmedQuestion.toLowerCase() === 'undefined' || trimmedQuestion.toLowerCase() === 'null') {
        return false;
    }

    return true;
};

const AddAssignment = () => {
    const { subjects } = useSubjects();
    const [subject, setSubject] = useState('nlp');
    const [assignmentNumber, setAssignmentNumber] = useState('');
    const [questions, setQuestions] = useState([]);
    const [droppedFiles, setDroppedFiles] = useState([]);
    const [isDownloaded, setIsDownloaded] = useState(false);
    const { sendRequest, isLoading, error } = useApiRequest();
    const [isTemp, setIsTemp] = useState(false);
    const [assignmentType, setAssignmentType] = useState('assignment');
    const [dateGiven, setDateGiven] = useState('');
    const [dateSubmission, setDateSubmission] = useState('NIL');
    const [key, setKey] = useState('');
    const [batch, setBatch] = useState('B1'); 

    const onDrop = useCallback(async (acceptedFiles) => {
        setDroppedFiles(acceptedFiles);

    }, []);

    const handleSubjectChange = (event) => {
        setSubject(event.target.value);
    };

    const handleAssignmentNumberChange = (event) => {
        setAssignmentNumber(event.target.value);
    };

    const handleQuestionsChange = (event) => {
        setQuestions(event.target.value.split('\n'));
    };

    const generateAssignment = async (event) => {
        event.preventDefault();
        console.log(subject);
        console.log(assignmentType);
        console.log(assignmentNumber);

        const validQuestions = questions.filter(question => isValidQuestion(question));
        console.log(validQuestions);

        if (!assignmentNumber || validQuestions.length === 0) {
            console.error('Assignment number or questions cannot be empty.');
            return;
        }

        try {
            // Retrieve userName from localStorage
            const userName = localStorage.getItem('userName');
            const key = localStorage.getItem('authKey') || '';

            // Make a POST request to generate the assignment
            const generateResponse = await sendRequest('http://65.0.14.141:4000/api/generate', 'POST', {
                subject: subject,
                number: assignmentNumber,
                qs: validQuestions,
                username: userName,
                authKey: key,
                type: assignmentType === 'experiment' ? `experiment${batch.toLowerCase()}` : assignmentType,
                givendate: dateGiven,
                submissiondate: dateSubmission,
            });

            if (generateResponse.success) {
                console.log('Success generating assignment:', generateResponse.data);
                setIsDownloaded(true);
                const temp = generateResponse.temp;
                if (temp === false) {
                    setIsTemp(false)
                }
                else { setIsTemp(temp) };
            } else {
                console.error('Error generating assignment:', generateResponse.data);
            }
        } catch (err) {
            console.error('Error:', err);
            console.error(error);
        }
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        multiple: true,
    });


    const handleDownloadClick = (e) => {
        // e.preventDefault();
        setIsDownloaded(false);
    }

    const handleDateGivenChange = (event) => {
        setDateGiven(event.target.value);
    };

    const handleDateSubmissionChange = (event) => {
        setDateSubmission(event.target.value);
    };

    const handleKeyChange = (event) => {
        setKey(event.target.value)
    }

    const handleBatchChange = (event) => {
        setBatch(event.target.value);
    };

    return (
        <form className='flex flex-col  justify-center align-middle gap-4 items-center mt-4 w-[80%] mx-auto text-secondary'>
            <label htmlFor='subject'>Subject</label>
            <select
                className='w-[80%] bg-secondary px-8 py-4 rounded-lg'
                value={subject}
                onChange={handleSubjectChange}
                id='subject'
                required
            >
                {subjects.map((subject) => (
                    <option value={subject.key} key={subject.key}>
                        {subject.name}
                    </option>
                ))}
            </select>
            <div className='flex gap-8'>
                <div className='gap-2 flex'>

                <label htmlFor="radioAssignment">Assignment</label>
                <input
                    type="radio"
                    name="assignmentType"
                    id="radioAssignment"
                    checked={assignmentType === 'assignment'}
                    onChange={() => setAssignmentType('assignment')}
                    
                />
                </div>
                <div className='gap-2 flex'>

                <label htmlFor="radioExperiment">Experiment</label>
                <input
                    type="radio"
                    name="assignmentType"
                    id="radioExperiment"
                    checked={assignmentType === 'experiment'}
                    onChange={() => setAssignmentType('experiment')}
                />
                </div>
            </div>

            {assignmentType === 'experiment' && (
                <div className='text-center flex flex-col md:flex-row  gap-2'>
                    <label htmlFor='batch' className='self-center'>Batch: </label>
                    <select
                        className='bg-secondary px-8 py-4 rounded-lg'
                        value={batch}
                        onChange={handleBatchChange}
                        id='batch'
                        required
                    >
                        <option value='B1'>B1</option>
                        <option value='B2'>B2</option>
                        <option value='B3'>B3</option>
                    </select>
                </div>
            )}
            {assignmentType === 'experiment' ? <label htmlFor='number'>Experiment Number</label> : <label htmlFor='number'>Assignment Number</label>}
            
            <input
                type='number'
                id='number'
                className='w-[80%] bg-secondary px-8 py-4 rounded-lg'
                value={assignmentNumber}
                onChange={handleAssignmentNumberChange}
                required
            />
            <div className='flex flex-col md:flex-row justify-center w-[80%] gap-6 '>

                <div className='text-center flex flex-col md:flex-row  gap-2 '>

                    <label htmlFor='date-given' className='self-center'>Date given: </label>
                    <input required type="date" name="date-given" id="date-given" className='bg-secondary px-8 py-4 rounded-lg' value={dateGiven} onChange={handleDateGivenChange}/>
                </div>

                <div className='text-center flex flex-col md:flex-row gap-2'>

                    <label htmlFor='date-given' className='self-center'>Date of Submission: </label>
                    <input type="date" name="date-given" id="date-given" className='bg-secondary px-8 py-4 rounded-lg' value={dateSubmission} onChange={handleDateSubmissionChange}/>
                </div>
            </div>

            <label className='text-secondary ' htmlFor='questions'>Type it out (1 question per line)</label>
            <textarea
                className='w-[80%] h-[200px] bg-secondary text-secondary px-8 py-4 rounded-lg'
                placeholder='1) What is the meaning of life?
2) Why are we still here?'
                value={questions.join('\n')}
                onChange={handleQuestionsChange}
                id='questions'
                required
            ></textarea>

            
                    <label htmlFor='key'>Key</label>
                    <input type="text" placeholder="Not Required"name="key" id="key" className='w-[80%] bg-secondary px-8 py-4 rounded-lg' value={key} onChange={handleKeyChange}/>




            <label className='text-secondary' htmlFor='btn'>Drop 'Em All!</label>
            <div
                {...getRootProps()}
                className={`w-[80%] h-[200px] bg-secondary rounded-lg text-secondary  flex justify-center items-center cursor-pointer border-dashed border-2 border-gray-650 ${isDragActive ? 'active' : ''
                    }`}

            >
                <input {...getInputProps()} id='btn' />
                {droppedFiles.length > 0 ? (
                    <div>
                        {droppedFiles.map((file) => (
                            <div key={file.name}>{file.name}</div>
                        ))}
                    </div>
                ) : isDragActive ? (
                    <p>Drop the files here ...</p>
                ) : (
                    <div className='text-secondary text-center p-8'>Drop files (.pdf)</div>
                )}
            </div>

            {
                !isDownloaded ? (<button className='w-[80%] border-gray-650 border-2 p-4 rounded-lg mb-10 hover:bg-secondary transition' onClick={generateAssignment}>
                    {isLoading ? <ProgressBar /> : 'SEND IT'}
                </button>) : (
                    <div className='flex flex-col mb-4'>
                        <p>This version of assignment will be deleted after 5 mins!</p>
                        <a href={`http://65.0.14.141:4000/api/view/${subject}/${!isTemp ? subject + assignmentNumber : subject + assignmentNumber + isTemp}`} className=' border-dark border-2 p-4 rounded-lg mb-4 bg-secondary text-center' onClick={handleDownloadClick}>
                            Download
                        </a>

                    </div>


                )
            }

        </form>
    );
};

export default AddAssignment;
