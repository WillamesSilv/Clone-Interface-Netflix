import React, { useEffect, useState } from 'react';
import './App.css'
import Tmdb from './api-TmDb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';

export default () => {

  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)

  useEffect(()=>{
    const loadAll = async () => {
      //Pegando todos os dados
      let list = await Tmdb.getHomeList()
      setMovieList(list)

      // Pegando Featured - Filme em destaque
      let originals = list.filter(i=>i.slug === 'originals')
      let randomChose = Math.floor(Math.random() * (originals[0].items.results.length -1))
      let chosen = originals[0].items.results[randomChose]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')

      setFeaturedData(chosenInfo)

    }

    loadAll()
  }, [])

  return (
    <div className='page'>
      
      {featuredData && 
        <FeaturedMovie item={featuredData} />
      }

      <section className='lists'>
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  )
}