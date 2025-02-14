import React,{useState,useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
  const data = useLoaderData();
  const { avatar_url, name, login, bio, html_url, public_repos, followers, following } = data;
  // const [data, setdata] = useState({}) 

  // useEffect(() => {    This is the simple way of extracting the data but it's not the optimized one
  //   fetch('https://api.github.com/users/shaitausif')
  //   .then((Response)=>Response.json())
  //   .then((data)=>{
  //     console.log(data)
  //     setdata(data);
  //   })
  // }, [])
  




  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={avatar_url}
          alt={`${name}'s avatar`}
          className="w-full h-48 object-cover "
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">{name || login}</h2>
          <p className="text-gray-600 mt-2">{bio || 'No bio available.'}</p>
          <div className="flex justify-center items-center mt-4 space-x-6">
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-800">{public_repos}</p>
              <p className="text-sm text-gray-600">Repositories</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-800">{followers}</p>
              <p className="text-sm text-gray-600">Followers</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-800">{following}</p>
              <p className="text-sm text-gray-600">Following</p>
            </div>
          </div>
          <a
            href={html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-6 bg-blue-600 text-white text-center py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Visit GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default Github

export const githubInfoLoader = async()=>{
  const response = await fetch('https://api.github.com/users/shaitausif')
  return response.json();

}