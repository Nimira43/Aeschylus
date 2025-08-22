import { useEffect, useState } from 'react'

const Movies = () => {
  const [movies, setMovies] = useState([]) 

  useEffect(() => {
    let moviesList = [
      {
         id: 1,
         title: 'Star Wars',
         releaseDate: '1977-05-25',
         runtime: 121,
         mpaa_rating: 'PG',
         description: 'The Rebel Alliance aims to destroy the tyrannical Empire\'s ultimate weapon, the Death Star. When the rebel leader Princess Leia is captured by the Empire, Luke Skywalker acquires stolen architectural plans for the Death Star and sets out to rescue her while learning the ways of the Force from the Jedi Master Obi-Wan Kenobi.'
      },
      {
         id: 2,
         title: 'Raiders of the Lost Ark',
         releaseDate: '1981-06-12',
         runtime: 115,
         mpaa_rating: 'PG',
         description: 'Set in 1936, Indiana Jones, a globetrotting archaeologist, faces Nazi German forces to recover the long-lost Ark of the Covenant which is said to make an army invincible. Teaming up with his tough former romantic interest Marion Ravenwood, Jones races to stop rival archaeologist René Belloq  from guiding the Nazis to the Ark and its power.'
      },
      {
        id: 3,
        title: 'Aliens',
        releaseDate: '1986-07-18',
        runtime: 137,
        mpaa_rating: 'R',
        description: 'Decades after surviving the Nostromo incident, Ellen Ripley is recruited by the military to return to the moon LV-426, where contact has been lost with a human colony. Accompanied by a squad of Colonial Marines, Ripley must confront the terrifying alien species once again—only this time, there are hundreds of them. As the team is picked off one by one, Ripley forms a bond with a young survivor named Newt and prepares for a final showdown with the Alien Queen.'
      }
    ]
    setMovies(moviesList)
  }, [])

  return (
    <div className='text-center'>
      <h2 className='text-prime logo'>Movies</h2> 
      <table className='table table-striped table-hover'>
        <thead>
          <tr>
            <th>Movie</th>
            <th>Release Date</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td>
                <Link to={`/movies/${movie.id}`}>
                  {movie.title}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Movies