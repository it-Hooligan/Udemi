//ToDo: Делаем програмку 

let numberOfilms;

function start() {
    numberOfilms = prompt('Сколько фильмов Вы уже просмотрели?', '');
    while (numberOfilms == '' || numberOfilms == null || isNaN(numberOfilms)) {
        numberOfilms = prompt('Сколько фильмов Вы уже просмотрели?', '');
    }
}
start();


const personalMovieDB = {
    count: numberOfilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {

        const a = prompt('Один из последних просмотренных фильмов?', '');

        const b = prompt('На сколько оцените его ?', '');
        if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50) {

            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i = i - 1;

        }
        // console.log(personalMovieDB);
    }
}
// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Вы мало смотрите фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        comsole.log(' YOU ARE CLASSICAL FUN')
    } else if (personalMovieDB.count >= 30) {
        console.log('You are fuckin freak))');

    } else {
        console.log('Error Try againe');

    }
}
// detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat !== true) {
        console.log(personalMovieDB);

    } else {
        console.log("oh it is true");

    }


}


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        // const a = prompt('What is your favorite genre ?', `${i}`);
        // personalMovieDB.genres[i - 1] = a;
        personalMovieDB.genres[i - 1] = prompt('What is your favorite genre ?', `${i}`);
    }
}
writeYourGenres();
showMyDB();




//?колбек 

function first() {
    setTimeout(function () {
        console.log('1');
    }, 2000);
    // console.log(second());
}


function second() {
    console.log('2');
}

first();
second();


function learnJs(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок');

}

learnJs(`JavaScript`, done);
// function(){
//     console.log('Я прошел этот урок');

// });


//? перебор массивов 

const obj = {
    name: 45,
    user: 98,
    inf: `options ledi N`,
    sun: {
        ne: 45,
        b: 9
    },

};

for (let key in obj) {

    if (typeof (obj[key]) === 'object') {
        for (let i in obj.key) {
            console.log(obj.key[i]);
        }
    }
    console.log(obj[key]);
}