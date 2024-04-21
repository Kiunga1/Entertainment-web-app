import data from '../../public/data.json'
import MovieCard from '../components/MovieCard'
import TrendingMovieCard from '../components/TrendingMovieCard'

const Home = () => {
  //Filter the data to include only the trending movies
  const trendingMovies = data.filter(movie => movie.isTrending);

  return (
    <div className='px-4'>
        <h2 className='text-white text-xl mt-4'>Trending</h2>
        <div className='flex gap-5 overflow-x-scroll' >
          {/* Map over the trendingMovies and rendering trendingMovie item cards. */}
          {trendingMovies.map((movie, index) => (
              <TrendingMovieCard
                key={index}
                title={movie.title}
                imageUrl={movie.thumbnail.trending.large} 
                rating={movie.rating}
                year={movie.year}
                category={movie.category}
              />
            ))}
        </div>
        <h2 className='text-white text-xl mt-4'>Movies</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          {data.map((movie, index) => (
            <MovieCard
              key={index}
              title={movie.title}
              imageUrl={movie.thumbnail.regular.large} 
              rating={movie.rating}
              year={movie.year}
              category={movie.category}
            />
          ))}
        </div>  
      </div>      
    
  )
}

export default Home
