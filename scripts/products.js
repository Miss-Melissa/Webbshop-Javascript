import ProductHandler from '../classes/ProductHandler.js';
const ph = new ProductHandler();
const url = new URL(location.href);
const categoryTextInfo = {
    Foundation: "Foundation, grundsmink, bassmink eller underlag, är hudfärgad smink som är ämnad att jämna ut hudtonen och dölja ojämnheter i hyn. Foundation finns både som flytande/kräm och som puderform. Foundation används vid sminkning som bas och sedan läggs puder på, antingen hudfärgat eller transparent, för att fixera foundationen.",
    Concealer: "Concealer är en form av smink som används för att dölja strukturella och färgmässiga ojämnheter i huden. Concealer används för att täcka mörka ringar under ögonen eller finnar. Concealer är ofta hudfärgad, men det finns även mer gröna och gula nyanser beroende på vilket resultat man vill uppnå.",
    Mascaror: "Mascara (även maskara) är en typ av smink som används för att måla ögonfransar, få dem att verka längre och tjockare för att ge ögat ett öppnare utseende och en piggare look. Mascara finns i olika färger som exempelvis svart, mörkblå, brun, mörkbrun och mörkgrön. I vissa butiker säljer de även lila, rosa, ljusblå, vita eller orangea mascaror. På senare tiden har även färgerna guld, turkos och ljusgrön tillkommit. Även mascaraborstarna är olika. Borstens egenskaper är viktigare för resultatet än själva mascaran. En tjock, tät borste med mycket borst ger fylliga, tjocka fransar. En mindre tät borste ger inte så mycket volym utan används för att få ett naturligt resultat; fransarna blir lite svärtade och får lite mer volym.",
    Rouge: "Rouge är en typ av kosmetika som appliceras på kinderna. Det finns både puderrouge, som man kan applicera med en rougeborste och cremerouge, som man oftast applicerar med hjälp av fingrarna. Rouge går oftast i röda, rosa, orangea och bruna nyanser, och man kan lägga det på kindens högsta punkt i syfte att få lite rundare kinder och se piggare ut, eller så kan man dra ut rouget mot tinningarna i syfte att framhäva kindbenen.",
    Puder: "Puder eller ansiktspuder är en kosmetisk produkt, som används främst i ansiktet. Ansiktspuder används för att jämna ut hudfärgen, dölja skavanker i huden, göra huden matt samt hålla resten av sminket på plats. Puder finns som löst puder och som kompaktpuder.",
    Läppstift: "Läppstift är ett smink som har använts sedan antikens Egypten då det var socialt accepterat för båda könen och ansågs ha en magisk kraft. Till en början användes röd ockra som blandades med vatten och duttades på läpparna. Läppstift håller sig längre på välmående läppar och därför är läppbalsam perfekt att använda kontinuerligt för att hålla läpparna återfuktade. ",
    Pennor: "Kajal och eyeliner är pennor i olika färger som målas runt ögat för att framkalla en mer intensiv blick genom att, beroende på hur man applicerar den, göra ögat smalare eller rundare. Det kan vara vanlig mjuk krita eller i flytande form."

};
const urlCategory = url.searchParams.get('category') || "Skärmar";

//Ritar ut produkter samt text baserat på category i en urladress
const products = ph.getByCategory(urlCategory);
document.querySelector(".categoryTitle").innerText = urlCategory;
document.querySelector(".categoryText").innerText = categoryTextInfo[urlCategory];

// Loopar igenom alla produkter i localstorage och ritar ut de i html baserat på kategori
products.forEach(product => {
    if (!product.id) return;
    let categoryProducts = document.createElement("product-card");
    categoryProducts.data = product;
    document.querySelector('.products-container').appendChild(categoryProducts);
});

