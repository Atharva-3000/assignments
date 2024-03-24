import { atom } from "recoil";

export const profileAtom = atom({
    key:'profileAtom',
    default:[{
        profileUrl:"https://avatars.githubusercontent.com/u/72994819?v=4",
        name:"Atharva Deshmukh",
        age:20,
        address:"25 M.I.G. D.D. Nagar Ratlam",
        followers:'100',
        likes:'150',
        photos: '202' 
    }]
})