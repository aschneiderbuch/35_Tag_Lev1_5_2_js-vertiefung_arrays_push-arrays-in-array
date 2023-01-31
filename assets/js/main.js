console.log("test");
/* 
Frage

Array in Array
    heroUndEnemy []
          
        */


const heroUndEnemy = [["Batman0", "The Joker0" ],["ProfessorX0", "Magneto0"],["Thor0", "Loki0"]];


const superH1 =["Batman"];
heroUndEnemy.push(superH1);
superH1.push("The Joker");

heroUndEnemy.push(["Supermann", "Lex Luthor"],["Wolverine", "Sabretooth"],["Ghost Rider", "Mephisto"])




console.log(heroUndEnemy);
console.table(heroUndEnemy);