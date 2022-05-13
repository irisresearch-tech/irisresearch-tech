import React, { useState, useEffect } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Nav = () => {
    let Links =[
      {name:"HOME",link:"#hero"},
      {name:"Services",link:"#service"},
      {name:"About Us",link:"#about"},
      
      {name:"Contact",link:"#contact"},
      
     
    ];
    let [open,setOpen]=useState(false);
    const [navbar, setNavbar] = useState(false)
    const [text, setText] = useState(false)
    const [mobile, setMobile] = useState(false)

    useEffect(()=>{
      window.addEventListener('scroll', changeBackground)
      // console.log("use effect called");
    },[])

    const changeBackground = () =>{
      // console.log("Called");
      if (window.scrollY >= 700 ){
        setNavbar(true)
        setText(true)
        setMobile(true)
      }else{
        setNavbar(false)
        setText(false)
        setMobile(false)
      }
    }

      // 

  return (
    <div className=' sticky top-0 z-50'>
      {/* <div className={navbar ? 'w-full  left-0 md:px-24 z-50 md:flex w-full items-center justify-between bg-blue-50 py-4' : 'w-full fixed top-0 left-0 md:px-24 z-50 md:flex items-center justify-between bg-transparent py-4 '}> */}
      <div className='w-full  left-0 md:px-24 z-50 md:flex w-full items-center justify-between bg-gray-50 py-4'>
      <div className='font-bold cursor-pointer px-12 sm:px-0  flex items-center '>
 
                  <span className="block lg:hidden  w-auto uppercase text-xl text-gray-800">BlackBox</span>

                  <span className="hidden lg:block uppercase  text-2xl text-gray-800">BlackBox</span>
                 
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-3 cursor-pointer md:hidden'>
      <svg viewBox="0 0 100 80" width="40" height="40" fill='#000000'>
  <rect width="100" height="20"></rect>
  <rect y="30" width="100" height="20"></rect>
  <rect y="60" width="100" height="20"></rect>
</svg>
      </div>

      <ul className={mobile ? `md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray-100 md:bg-transparent  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}` :`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray-100 md:bg-transparent  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9  ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl font-medium md:my-0 my-7'>
              <AnchorLink href={link.link} className={text ? 'text-gray-800   uppercase ' : 'text-gray-800 uppercase duration-500'}>{link.name}</AnchorLink>
            </li>
          ))
        }
      </ul>
      </div>
    </div>
  )
}

export default Nav