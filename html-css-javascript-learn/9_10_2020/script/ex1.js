//additional exercises for javascript iterators
//listName
function listName(someSongs){
    someSongs.forEach(function(song){
        console.log(song.name);
    });
}

//listName(songs);

//listSongDetails
function listSongDetails(someSongs){
    someSongs.forEach(function(song){
        let output = song.name + ", by " + song.artist +"("+ song.duration +")";
        console.log(output);
    });
}

//listSongDetails(songs.splice(0, songs.length));

//summerJamCount
function summerJamCount(someSongs){
    return someSongs.filter(function(song){
        return (song.month >= 6 && song.month < 9);
    }).length;
    /*
    forEach implementation:
    let count = 0;
    someSongs.forEach(function(song){
        if (song.month >= 6 && song.month < 9) count++;
    });
    return count;
    */
}

//console.log(summerJamCount(songs));

//getDurations
function getDurations(someSongs){
    return someSongs.map(function(song){
        return song.duration;
    });
}

//console.log(getDurations(songs));

//getDurationsInSeconds
function getDurationsInSeconds(someSongs){
    let toSeconds = function(duration){
        let separator = duration.indexOf(":");
        let min = parseInt(duration.slice(0, separator));
        let sec = parseInt(duration.slice(separator+1, duration.length - 1));
        return min * 60 + sec;
    };

    return songs.map(function(song){
        return toSeconds(song.duration);
    });
}

//console.log(getDurationsInSeconds(songs));

//getMainArtists
function getMainArtists(someSongs){
    return someSongs.map(function(song){
        let isFeaturing = song.artist.indexOf("featuring");
        if (isFeaturing === -1) return song.artist;
        else return song.artist.slice(0, isFeaturing-1);
    });
}

//console.log(getMainArtists(songs));

//getBigHits
function getBigHits(someSongs){
    return someSongs.filter(function(song){
        return (song.weeksAtNumberOne > 10);
    });
}

//console.log(getBigHits(songs));

//getShortSongs
function getShortSongs(someSongs){
    return someSongs.filter(function(song){
        return function(){
            let breakpoint = song.duration.indexOf(":");
            let min = parseInt(song.duration.slice(0, breakpoint));

            return (min < 3);
        }();
    });
}

//console.log(getShortSongs(songs));

//getSongsByArtist
function getSongsByArtist(someSongs, artist){
    return someSongs.filter(function(song){
        return song.artist == artist;
    });
}

//console.log(getSongsByArtist(songs, "Savage Garden"));

//summerJamCount with reduce
function summerJamCount2(someSongs){
    return someSongs.reduce(function(acc, song){
        if (song.month >= 6 && song.month < 9) acc++;
        return acc;
    }, 0);
}

//console.log(summerJamCount2(songs));
function getTotalDurationInSeconds(someSongs){
    return getDurationsInSeconds(someSongs).reduce(function(acc, val){
        return val + acc;
    }, 0);
}

//console.log(getTotalDurationInSeconds(songs));

//getSongCountByArtist
function getSongCountByArtist(someSongs){
    return someSongs.reduce(function(acc, song){
        if (acc[song.artist] > 0) acc[song.artist]++;
        else acc[song.artist] = 1;
        return acc;
    }, {});
}

//console.log(getSongCountByArtist(songs));

//averageWeeksAtNumberOne
function averageWeeksAtNumberOne(someSongs){
    let average = {
        sum: 0,
        count: 0
    };

    someSongs.reduce(function(acc, song){
        acc.sum += song.weeksAtNumberOne;
        acc.count++;
        return acc;
    }, average);

    return average.sum / average.count;
}

console.log(averageWeeksAtNumberOne(songs));

