import { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom'
import DashSide from './DashSide';
import DashPro from './DashPro';

export default function Dashboard() {
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
    <div className='min-h-screen w-screen flex flex-col md:flex-row'>
      <div>
        <DashSide />
      </div>
      {tab==='profile' && <DashPro /> }
    </div>
  )
}
