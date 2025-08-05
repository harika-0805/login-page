var games=['cricket','football','hockey'];
console.log(games[0], games[1], games[2]);
for (var i = 0; i < games.length; i++) {
    console.log(games[i]);
}
console.log(games.length);
games.push('basketball');
console.log(games[3], games.length);
console.log(games);
games.pop();
do {
    console.log(games.pop());
} while (games.length > 0);
console.log(games.length);
games = [];
console.log(games.length);
console.log(games); // Should be an empty array
while (games.length < 5) {
    games.push('game' + (games.length + 1));
}
console.log(games); // Should contain 5 elements: game1, game2, game3, game4, game5
for (var i = 0; i < games.length; i++) {
    console.log(games[i]);
}