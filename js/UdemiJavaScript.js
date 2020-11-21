//ToDo: Делаем програмку 

const numberOfilms = +prompt('Сколько фильмов Вы уже просмотрели?', '');

const personalMovieDB = {
    count: numberOfilms,
    movies: {},
    actors: {},
    genres: [],
    privar: false
};

const a = prompt('Один из последних просмотренных фильмов?', '');
const b = prompt('На сколько оцените его ?', '');
const c = prompt('Один из последних просмотренных фильмов?', '');
const d = prompt('На сколько оцените его ?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);