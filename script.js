"use strict";

let numberOfFilms; //Can change in function, if it was declared global

function start() {
    numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", ""); //Can change in function, 
//if it was declared global

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function showMyDB (personalMovieDB) {
    if (personalMovieDB.privat == false) {
        return (console.log(personalMovieDB));
    } else {
        alert('You don`t have permit');
    }
}

showMyDB (personalMovieDB);

function writeYourGanres () {
    let count = 0;
    while (count <= 3) {
        const ganres = prompt(`Ваш любимый жанр № ${count} ?`, "");
        if (ganres != null && ganres != '') {
            personalMovieDB.genres[count - 1] = ganres;
        } else {
            continue;
        } 
        count++;
    }
}

writeYourGanres ();




function remeberMyFilms () {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?", ""),
            b = prompt("На сколько оцените его?", "");
        if (a != null && b != null && a != '' && b != '' && a.length <50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else  {
            console.log('error');
            i--;
        }
    }
}

remeberMyFilms ();

function DetectPersonalLevel () {
    if (personalMovieDB < 10) {
        console.log('Просмотренно довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >=30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

DetectPersonalLevel ();

// console.log(personalMovieDB);

// let sumOfMovies = 0;

// while (sumOfMovies < 2) {
//     const a = prompt("Один из последних просмотренных фильмов?", ""),
//         b = prompt("На сколько оцените его?", "");
//     if (a != null && b != null && a != '' && b != '' && a.length <50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         continue;
//     }
//     sumOfMovies++;
// }


