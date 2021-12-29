//Egen class för att lägga filen i gitignore, annars verkar det som att github guardian klagar.
//Har dock problem, filen laddas in innan gitignore och följer ändå med till git.. 
//Låter det ligga kvar
class Token {
    constructor() {
        this.token = "Bearer 670fc3f5407bf9abce5fd0521654ac2985fb0070"
    };
};

export default Token;