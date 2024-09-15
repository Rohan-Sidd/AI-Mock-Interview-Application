"use client";

import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import { Camera, Lightbulb, TriangleAlert, WebcamIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import Link from 'next/link'

function Interview({ params }) {
  const [interviewData, setInterviewData] = useState();
  const [webCamEnabled, setWeCamEnabled] = useState(false);

  useEffect(() => {
    console.log(params.interviewId);
    GetInterviewDetails();
  }, []);

  const GetInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, params.interviewId));
    setInterviewData(result[0]);
  };

  return (
    <div className='my-10 flex justify-center flex-col items-center'>
      <h2 className='font-bold text-2xl'>Let's get you started on your {interviewData?.jobPosition} interview</h2>

      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='flex flex-col my-5 gap-5'>
          {interviewData ? (
            // Check if interviewData is not null before rendering
            <div className='flex flex-col p-5 rounded-lg border gap-5'>
              <h2 className='text-lg'>
                <strong>Job Role/Job Position: </strong>{' '}
                {interviewData.jobPosition}
              </h2>
              <h2 className='text-lg'>
                <strong>Job Description/Techstack: </strong>{' '}
                {interviewData.jobDescription}
              </h2>
              <h2 className='text-lg'>
                <strong>Years of experience: </strong>{' '}
                {interviewData.jobExperience}
              </h2>
            </div>
          ) : (
            <p>Loading interview details...</p>
          )}
          <div className='p=5 border rounded-lg border-yellow-300 bg-yellow-200'>
            <h2 className='flex gap-2 items-center'><TriangleAlert /><strong>Information</strong></h2>
            <h2 className='mt-3'>{process.env.NEXT_PUBLIC_INFORMATION}</h2>
          </div>
        </div>

        <div className='mx-20'>
          {webCamEnabled ? (
            <Webcam className='mx-20 justify-end items-end'
              onUserMedia={() => setWeCamEnabled(true)}
              onUserMediaError={() => setWeCamEnabled(false)}
              mirrored={true}
              style={{
                height: 300,
                width: 300,
              }}
            />
          ) : (
            <>
              <Camera className='h-72 w-full my-7 p-20 rounded-lg mx-20' />
              <Button variant="ghost" className='mx-20 justify-end' onClick={() => setWeCamEnabled(true)}>
                Enable Webcam and Microphone to start the interview
              </Button>
            </>
          )}
        </div>

      </div>
      <div className='flex justify-end items-end'>
        <Link href={'/dashboard/interview/'+params.interviewId+'/start'}>
        <Button>Let's Begin!</Button>
        </Link>
        </div>
      
    </div>
  );
}

export default Interview;
