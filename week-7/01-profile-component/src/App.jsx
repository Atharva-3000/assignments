import { useRecoilState } from 'recoil'
import './App.css'
import { profileAtom } from './atoms'
import { useEffect } from 'react';
import Profile from './Profile';

function App() {
  const [allprofiles, setAllPofiles] = useRecoilState(profileAtom);

  useEffect(()=>{
    setAllPofiles((old)=>[
      ...old,{
        profileUrl:"https://avatars.githubusercontent.com/u/72994819?v=4",
        name:"Ashwin Deshmukh",
        age:20,
        address:"25 M.I.G. D.D. Nagar Ratlam",
        followers:'1000',
        likes:'1500',
        photos: '2022'
      }
    ])
  },[setAllPofiles]);


  return (
    allprofiles.map((e,index)=>{
      return <Profile key={index} profile={e}/>
    })
  )
}

export default App
