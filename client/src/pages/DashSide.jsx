import { Sidebar} from 'flowbite-react'
import { useEffect, useState } from 'react';
import {HiUser,HiArrowSmRight} from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom';

export default function DashSide() {
    const location = useLocation();
  const [tab,setTab] = useState('')
  useEffect(()=>{
    const urlParams = new URLSearchParams(location.search)
    const tabFrom =urlParams.get('tab')
    if(tabFrom){
      setTab(tabFrom)
    }
  },[location.search]) 
  return (
    <Sidebar>
        <Sidebar.Items>
            <Sidebar.ItemGroup>
                <Link to='/dashboard?tab=profile' >
                <Sidebar.Item active={tab==='profile'} icon={HiUser} label={"User"} labelColor='dark'>
                    Profile
                </Sidebar.Item>
                </Link>
                <Sidebar.Item icon={HiArrowSmRight} className='cursor-pointer'>
                    SignOut
                </Sidebar.Item>
            </Sidebar.ItemGroup>
        </Sidebar.Items>
    </Sidebar>
  )
}
