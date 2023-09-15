import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Github = () => {
    const data = useLoaderData()
    // const [ data, setData ] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Shivam2709')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white
    px-4 py-5 text-3xl'>Github followers: {data.followers}
    <img className="w-52 rounded-2xl" src={data.avatar_url} alt="Git picture" />
    </div>
  )
}

export default Github;

export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/Shivam2709')
    return res.json()
}