movies => [ 'Caddyshack', 'Interstellar', 'Scarface', 'Trading Places' ]
let removedMovies = movies.splice(3, 1, 'Spaceballs', 'Alien');
movies => [ 'Caddyshack', 'Interstellar', 'Scarface', 'Spaceballs', 'Alien' ]
removedMovies = movies.splice(0, 3);
movies => [ 'Spaceballs', 'Alien' ]
removedMovies = movies.splice(1, 0, 'The Sting');
removedMovies => []
movies => [ 'Spaceballs', 'The Sting', 'Alien' ]