import ProductHandler from '../classes/ProductHandler.js';
const ph = new ProductHandler();
const url = new URL(location.href);
const categoryTextInfo = {
    Skärmar: "Att ha bra bildskärm är otroligt viktigt för både spelupplevelsen och prestationen. De viktiga att kolla efter hos en gamingskärm är låg responstid och hög uppdateringsfrekvens. Responstid är tiden det tar för ett knapptryck att registreras på skärmen och uppdateringsfrekvens är hur många bilder i sekunden skärmen kan visa upp, och detta mäts i Hz. Idag är det standard med 144 Hz för gaming och de allra flesta väljer en skärm som är minst 24 tum i storlek. På events och turneringar så används ofta skärmar med en uppdateringsfrekvens på 240 Hz. Vi på WIE Gaming erbjuder en stor mängd gamingskärmar som passar till alla slags spel och även tillbehör till dessa för att kunna anpassa skärmarna och få en så bra spelupplevelse som möjligt.",
    Tangentbord: "Eftersom gaming handlar om millisekunder och flera hundra knapptryck per minut så är tangentbordet en de absolut viktigaste verktygen för en spelare. Vi på WIE Gaming är specialiserade på allt som innefattar gaming, och vårt utbud med tangentbord är inte annorlunda. Hos oss hittar du tangentbord och tillbehör från de ledande tillverkarna med den senaste teknologin. När du ska välja tangentbord så är oftast det största valet att välja mellan ett tangentbord med membran eller mekaniska brytare, även kallat för switchar.",
    Möss: "När det gäller grymma resultat inom gaming så är det givet att man ska ha professionell utrustning. Vi på WIE Gaming älskar spel - därför har vi valt att specialisera oss på datormöss och tillbehör för gaming. Vårt sortiment innehåller den bästa och senaste teknologin för gaming och esport. Bra datormöss och tillbehör gör en stor skillnad för dig som spelar, satsa därför på rätt utrustning redan från start. Om du är en frekvent gamer så är det också oundvikligt att utrustningen inte slits ut och måste bytas ut. Hos oss finner man massor med olika mouse skates, gaming mus, mouse bungee, handledsstöd och olika rengöringstillbehör. Vårt sortiment garanterar en bred variation för dig som är gamer. Spela inte ett enda runda till utan att vara utrustad med de bästa verktygen.",
    Konsoler: "Hos oss hittar konsolerna Playstation 4, Xbox One, Nintendo Switch och mycket mer! En spelkonsol låter dig avnjuta de största spelupplevelserna på din TV eller bildskärm. Beroende på vad du är för typ av spelare och vilket slags spel du föredrar, kan du välja mellan ett flertal olika konsoler som i sin tur ger dig möjlighet att botanisera i olika spelutbud. Du hittar förutom konsolerna också massor av kringutrustning till respektive konsol, både i form av kontroller, VR samt produkter för underhåll m.m.",
    Gamingstolar: "Vi erbjuder ett brett utbud av stolar för gaming och arbete för att uppfylla alla dina behov. Stort sortiment med varierande färger, allt för att det ska passa just din stil. Hitta din favorit på WIE Gaming!",
    Musmattor: "Som gamer är din gamingmus en av de viktigaste verktygen, men många glömmer att utan en stabil musmatta som grund så kommer din gamingmus aldrig leva upp till sin fulla potential. Musmattor för gaming kommer i olika material, mönster och tjocklekar, men det viktigaste för en gamer är att musmattan har en stor yta.",
    Hörlurar: "Enligt oss på WIE Gaming är riktigt bra ljud väldigt avgörande för att bli en bra gamer. Därför har vi samlat headset, hörlurar, mikrofoner, headset stand, högtalare, externa ljudkort och mycket mer i absolut toppklass från flera ledande varumärken som SteelSeries, Logitech, Razer och Corsair. Genom att höja nivån på ljudet tar du även spelupplevelsen till nästa nivå. Få saker skapar sådan inlevelse som att kunna höra varje liten händelse på ett perfekt sätt. Tycker du om att spela multiplayer är dessutom ljudet ofta en skillnad på liv eller död. Till exempel om du hör motståndarens fotsteg kan du vända det till din egna fördel."
};
const urlCategory = url.searchParams.get('category') || "Skärmar";

//Ritar ut produkter baserat på category i en url
const products = ph.getByCategory(urlCategory);
document.querySelector(".categoryTitle").innerText = urlCategory;
document.querySelector(".categoryText").innerText = categoryTextInfo[urlCategory];


products.forEach(product => {
    if (!product.id) return;
    let categoryProducts = document.createElement("product-card");
    categoryProducts.data = product;
    document.querySelector('.products-container').appendChild(categoryProducts);
});


