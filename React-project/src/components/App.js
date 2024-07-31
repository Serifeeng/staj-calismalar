// import React from 'react'
// import SearchBar from './SearchBar';
// import MovieList from './MovieList'
// import axios from 'axios'
// import AddMovie from './AddMovie';
// import { BrowserRouter as Routes, Route, Router } from 'react-router-dom';
// class App extends React.Component {
//   state = {
//     "movies": [],
//     searchQuery: ""

//   }

//   // async componentDidMount(){
//   //   const baseURL="http://localhost:3002/movies"
//   //   const response = await fetch(baseURL);
//   //   console.log(response)
//   //   const data= await response.json()
//   //   console.log(data)
//   //   this.setState({movies: data})

//   // }  

//   async componentDidMount() {
//     const response = await axios.get("http://localhost:3002/movies")
//     // console.log(response)
//     this.setState({ movies: response.data })
//   }

//   // deleteMovie = (movies)=>{
//   //   const newMovieList= this.state.movies.filter(m =>m.id !== movies.id)
//   //   // this.setState({
//   //   //   movies:newMovieList
//   //   // })
//   //   this.setState(state =>({
//   //     movies:newMovieList
//   //   }))
//   // }

//   // FETCH API
//   // deleteMovie = async (movies)=>{

//   //   const baseURL=`http://localhost:3002/movies/${movies.id}`
//   //   await fetch(baseURL,{
//   //     method: "DELETE"
//   //   })
//   //   const newMovieList= this.state.movies.filter(m =>m.id !== movies.id)
//   //   // this.setState({
//   //   //   movies:newMovieList
//   //   // })
//   //   this.setState(state =>({
//   //     movies: newMovieList
//   //   }))
//   // }

//   // // axioS API
//   deleteMovie = async (movies) => {

//     axios.delete((`http://localhost:3002/movies/${movies.id}`))
//     const newMovieList = this.state.movies.filter(m => m.id !== movies.id)
//     // this.setState({
//     //   movies:newMovieList
//     // })
//     this.setState(state => ({
//       movies: newMovieList
//     }))
//   }

//   searchMovie = (event) => {
//     // console.log(event.target.value)
//     this.setState({ searchQuery: event.target.value })
//   }



//   render() {

//     let filterMovie = this.state.movies.filter(
//       (movie) => {
//         return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
//         // indexOf -1 degerini döndürür normalde
//       }
//     )

//     return (

//       <div className='container'>

//         <Router>
//           <Routes>
//             <Route path='/add' Component={AddMovie} />
//             <Route path="/" exact render={
//               < React.Fragment>
//                 <div className='row'>
//                   <div className='col-lg-12'>
//                     <SearchBar
//                       searchMovieProp={this.searchMovie} />
//                   </div>
//                 </div>
//                 <MovieList
//                   movies={filterMovie}
//                   deleteMovieProps={this.deleteMovie}
//                 />

//               </React.Fragment>

//             }>

//               <Route path='/add' Component={AddMovie} />

//             </Route>
//           </Routes>
//         </Router>




//       </div>
//     )
//   }
// }
// export default App

import React from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import EditMovie from './EditMovie';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends React.Component {

    state = {
        movies: [],
        searchQuery: ""
    }

    componentDidMount() {
        this.getMovies();
    }

    async getMovies() {
        const response = await axios.get("http://localhost:3002/movies");
        this.setState({ movies: response.data })
    }

    


    // DELETE MOVIE
    deleteMovie = async (movie) => {

        axios.delete(`http://localhost:3002/movies/${movie.id}`)
        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        );
        this.setState(state => ({
            movies: newMovieList
        }))
    }


    // SEARCH MOVIE
    searchMovie = (event) => {
        this.setState({ searchQuery: event.target.value })
    }


    // ADD MOVIE
    addMovie = async (movie) => {
        await axios.post(`http://localhost:3002/movies/`, movie)
        this.setState(state => ({
            movies: state.movies.concat([movie])
        }))

        this.getMovies();
    }

        // EDIT MOVIE
        editMovie = async (id, updatedMovie) => {
            await axios.put(`http://localhost:3002/movies/${id}`, updatedMovie)
            this.getMovies();
        }

    render() {

        let filteredMovies = this.state.movies.filter(
            (movie) => {
                return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
            }
        ).sort((a, b) => {
            return a.id < b.id ? 1 : a.id > b.id ? -1 : 0;
        });

        return (
            <Router>

                <div className="container">

                    <Routes>


                        <Route path="/" exact render={() => (
                            <React.Fragment>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <SearchBar searchMovieProp={this.searchMovie} />
                                    </div>
                                </div>


                                <MovieList
                                    movies={filteredMovies}
                                    deleteMovieProp={this.deleteMovie}

                                />
                            </React.Fragment>
                        )}>

                        </Route>

                        <Route path="/add" render={({ history }) => (

                            <AddMovie

                                onAddMovie={(movie) => {
                                    this.addMovie(movie)
                                    history.push("/")
                                }
                                }

                            />

                        )}>

                        </Route>

                        <Route path="/edit/:id" render={(props) => (

                            <EditMovie
                                {...props}
                                onEditMovie={(id, movie) => {
                                    this.editMovie(id, movie)
                                }
                                }

                            />

                        )}>

                        </Route>

                    </Routes>
                </div>

            </Router>
        )

    }


}

export default App;

