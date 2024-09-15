import { Lightbulb, Volume2 } from 'lucide-react';
import React, { useEffect } from 'react';

function QuestionsSection({ mockInterviewQuestion, activeQuestionIndex }) {

    useEffect(() => {
        // console.log("Gspot", mockInterviewQuestion);
       // console.log(typeof activeQuestionIndex);
      }, [mockInterviewQuestion, activeQuestionIndex]);

  const textToSpeech=(text)=>{
    if('speechSynthesis' in window){
      const speech=new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech)
    }
    else{
      alert('Sorry your browser does not support text to speech')
    }
  }
      
    
  return  (mockInterviewQuestion && activeQuestionIndex !== undefined) &&(
    <div className='p-5 border rounded-lg'>
     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {mockInterviewQuestion && mockInterviewQuestion.map((question, index) => (
          <h2
            key={index} // Add key for each item in the map
            className={`p-2 rounded-full text-xs md:text-sm text-center cursor-pointer ${
              activeQuestionIndex === index ? 'bg-green-500' : 'bg-secondary'
            }`}
          >
            Question #{index + 1}
          </h2>
        ))}
      </div>
      <h2 className='my-5 text-md md:text-lg '>{mockInterviewQuestion[activeQuestionIndex]?.question}</h2>
      <Volume2 className='cursor-pointer' onClick={()=>textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.question)}/>
      <div className='border rounded-lg p-5 bg-blue-100 mt-20'>
        <h2 className='flex gap-2 items-center'>
          <Lightbulb/>
          <strong>Note: </strong>
        </h2>
        <h2 className='text-sm text-primary my-2'>{process.env.NEXT_PUBLIC_QUESTION_NOTE}</h2>
      </div>
    </div>
    
  );
}
export default QuestionsSection




// import React, { useEffect } from 'react';

// function QuestionsSection({ mockInterviewQuestion, activeQuestionIndex }) {
//   // Log the mockInterviewQuestion data to inspect it
//   useEffect(() => {
//     console.log("mockInterviewQuestion: ", mockInterviewQuestion);
//   }, [mockInterviewQuestion]);

//   // Check if mockInterviewQuestion exists and has at least one question
//   const questionData = mockInterviewQuestion?.[activeQuestionIndex];

//   return (
//     <div className='p-5 border rounded-lg'>
//       <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
//         {/* You can add other components or elements here as needed */}
//         {/* For example, to render a list of questions or other details */}
//       </div>
//       {questionData ? (
//         <>
//           <h2 className='my-5 text-md md:text-lg'>{questionData.question}</h2>
//           <p>{questionData.details}</p> {/* Example additional field */}
//         </>
//       ) : (
//         <p>No question available</p>
//       )}
//     </div>
//   );
// }

// export default QuestionsSection;


// import React, { useEffect } from 'react';

// function QuestionsSection({ mockInterviewQuestion }) {
//   useEffect(() => {
//     console.log("mockInterviewQuestion: ", mockInterviewQuestion);
//   }, [mockInterviewQuestion]);

//   return (
//     <div className='p-5 border rounded-lg'>
//       <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
//         {/* You can add other components or elements here as needed */}
//       </div>
//       {mockInterviewQuestion && mockInterviewQuestion.length > 0 ? (
//         mockInterviewQuestion.map((questionData, index) => (
//           <div key={index} className='my-5'>
//             <h2 className='text-md md:text-lg'>{questionData.question}</h2>
//             <p>{questionData.details}</p> {/* Example additional field */}
//           </div>
//         ))
//       ) : (
//         <p>No questions available</p>
//       )}
//     </div>
//   );
// }

// export default QuestionsSection;
