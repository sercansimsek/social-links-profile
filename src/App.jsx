import avatar from './images/assets/images/avatar-jessica.jpeg'

export const App = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#141414]">
        <div className='flex flex-col items-center justify-center border-none rounded-lg p-6 bg-[#1f1f1f] max-w-[375px]'>
          <div className='h-24 w-24 mb-6'>
            <img src={avatar} alt="avatar" className='rounded-full'/>
          </div>

          <div className='flex flex-col text-center gap-2 mb-6'>
            <span className='text-[#fff]'>Jessica Randall</span>
            <span className='text-[#c5f82a]'>London, United Kingdom</span>
          </div>

          <div className='mb-5 text-[#fff]'>
            <span>"Front-end developer and avid reader"</span>
          </div>

          <div className='flex flex-col gap-3 text-center text-[#fff] w-full'>
            <span className='link'>GitHub</span>
            <span className='link'>Frontend Mentor</span>
            <span className='link'>Linkedin</span>
            <span className='link'>Twitter</span>
            <span className='link'>Instagram</span>
          </div>
        </div>
    </div>
  )
}