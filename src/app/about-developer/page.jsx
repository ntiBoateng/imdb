import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='w-full'>
         <div className='flex justify-between max-w-6xl mx-auto md:space-x-6 px-2'>
         <Link href='/about'>
        <h1 className='text-4xl font-medium text-amber-600'>About</h1>
        </Link>
        <h1 className='text-2xl font-medium text-amber-600'>About the developer</h1>
        </div>
    <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
    <Image style={{maxWidth:"100%",height:"80%"}} width={500} height={200} placeholder='blur' alt='image not available' blurDataURL='spinner.svg' className='rounded:lg object-cover' src={`/IMG-0119.JPG`}></Image>
       <div className="">
        <h2 className='text-amber-500 pb-1'>About Me</h2>
Hello I&apos;m <span className='text-amber-500'>Gideon Nti Boateng</span>, a dedicated Backend Developer with a focus on building robust and scalable web applications. With expertise in NestJS, ExpressJS, MongoDB, and PostgreSQL, I am passionate about crafting efficient and reliable backend solutions.

 <h2 className='text-amber-500 mb-1 mt-2'>Professional Experience</h2> 

- <span className='text-amber-500'>Amalitech Services</span>, Backend Developer (09/2021)
  - Collaborated with a cross-functional team to develop and maintain high-performance backend systems using NestJS and ExpressJS.
  - Designed and implemented RESTful APIs for seamless integration with front-end applications.
  - Utilized MongoDB and PostgreSQL for data modeling, querying, and database management.
  - Implemented efficient authentication and authorization mechanisms for secure user access.
  - Participated in code reviews and conducted thorough testing to ensure code quality and reliability.

<br />
<h2 className='text-amber-500 mb-1 mt-2'>Technical Skills</h2>

- Programming Languages: JavaScript, TypeScript, Java, Python
- Backend Frameworks: NestJS, ExpressJS
- Databases: MongoDB, PostgreSQL
- Additional Skills: RESTful APIs, Authentication/Authorization, Testing (Jest, Mocha)

  <h2 className='text-amber-500 mb-1 mt-2'> Education</h2>

- Bachelor of Statistics, <span>KNUST</span>


<h2 className='text-amber-500 mb-1 mt-2'>Contact Me</h2> 

Feel free to reach out to me through email at [<span className='text-amber-300'>gideon.boateng@amalitech.com</span>]. You can also connect with me on <a className='text-amber-300' href="https://www.linkedin.com/in/gideon-nti-boateng-8825a4204">LinkedIn</a> for further inquiries or collaborations.


        </div>
    </div>
</div>
  )
}

export default page
