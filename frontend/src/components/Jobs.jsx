import React from 'react'
import Navbar from './shared/Navbar'
import FilterCard from './FilterCard'
import JobCard from './JobCard';
import { space } from 'postcss/lib/list';

const jobsArray=[1,2,3,4,5,6,7,8];
const Jobs = () => {
  return (
    <div>
      <Navbar/>
      <div className='max-w-7xl mx-auto mt-5'>
      {/* filter page on left */}
      <div className='flex gap-5'>
      <div className='w-20%'>
      <FilterCard/>
      </div>
      {/* left side job cards */}
      {
        jobsArray.length<=0?<span>Job Not found</span>:(
        <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
          <div className='grid grid-cols-3 gap-4'>
          {
          jobsArray.map((item,index)=>(
          <div>
            <JobCard/>
          </div>))
          }
          </div>
        </div>
      )
      }
      </div>
      </div>
    </div>
  )
}

export default Jobs