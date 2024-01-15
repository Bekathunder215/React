import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Loading } from './Loading';

import { useResultContext } from '../contexts/ResultContextProvider';

export const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(()=>{
    if(searchTerm){
      if(location.pathname === '/videos'){
        getResults(`/search/?q=${searchTerm} videos`)
      }
      else{
        getResults(`/?query=${searchTerm}&limit=10&related_keywords=true`)
      }
    }
  },[searchTerm])

  if(isLoading) return <Loading />
  switch (location.pathname) {
    case '/search':
      return (
        <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
          {
            results?.results?.map(({url, title}, index) => 
            (
                <div key={index} className='md:w-2/5 w-full'>
                  <a href={url} target='_blank' rel="noreferrer">
                    <p className='text-sm'>
                      {
                        url.length > 30 ? url.substring(0,30) : url
                      }
                    </p>
                    <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                      {
                      title
                      }
                    </p>
                  </a>
                </div>
            ))
          }
        </div>
      )
    case '/images':
      return "api doesn't support images"
    case '/news':
      return "api doesn't support news"
    case '/videos':
      return "api doesn't support Videos"  
    default:
      return "ERROR!"
  }
}
