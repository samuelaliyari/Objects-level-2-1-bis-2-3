
let edelMetallPreise = [
    { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
    { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
    { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
    { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
    { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
    { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
    { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
    { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
    { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" }
];
const edelMetallName = []

edelMetallPreise.forEach((elt) => edelMetallName.push(elt.name));
console.log(edelMetallName);

const edelMetallNameMaped = edelMetallPreise.map((elt) => elt.name)
console.log(edelMetallNameMaped);
// .......................................

const edelMetallPreiseGramEuro = []

edelMetallPreise.forEach((elt) => edelMetallPreiseGramEuro.push(elt.preiseGramEuro));
console.log(edelMetallPreiseGramEuro);

const edelMetallPreiseGramEuroMaped = edelMetallPreise.map((elt) => elt.preiseGramEuro)
console.log(edelMetallPreiseGramEuroMaped);

// .......................................

const edelMetallVeränderung = []

edelMetallPreise.forEach((elt) => edelMetallVeränderung.push(elt.veraenderung));
console.log(edelMetallVeränderung);

const edelMetallVeränderungMaped = edelMetallPreise.map((elt) => elt.veraenderung)
console.log(edelMetallVeränderungMaped);

const preiseVeränderung = edelMetallPreise.filter((elt) => elt.preiseGramEuro > 50 ? console.log(elt.preiseGramEuro) : null);
const preiseVeränderungObject = edelMetallPreise.filter((elt) => elt.preiseGramEuro > 50 ? console.log(elt) : null);

// .......................................

const nameOutput  =document.body.querySelector("#nameBox");
const priceOutput =document.body.querySelector("#preisBox");
const changeOutput =document.body.querySelector("#aenderungBox");
nameOutput.innerHTML = "<p>Name</p>"
priceOutput.innerHTML = "<p>price</p>"
changeOutput.innerHTML = "<p>change</p>"

edelMetallPreise.forEach((elt) => {
    nameOutput.innerHTML += `<p>${elt.name}</p>`
    priceOutput.innerHTML += `<p>${elt.preiseGramEuro}</p>`
    changeOutput.innerHTML += `<p>${elt.veraenderung}</p>`
});


// =====================================================
//          CodeFlow Übung lev2_2: Objects
// =====================================================


console.log("%c <<<<<<<<<lev2_2>>>>>>>>>", "color: yellow; font-size: 16px;");
const singers = [
	{ name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
	{ name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
	{ name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B"},
	{ name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock"},
	{ name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica"},
	{ name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock"},
	{ name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop"},
	{ name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock"},
];

const singers2 = [...singers]
const singers3 = [...singers]

const singersSortByName = (arr) => {
    let result = arr.sort((a, b) => {
        if (a.name[0] > b.name[0] ) {
            return 1
        } else {
            return -1
        }
    })
    return result

}
console.log(singersSortByName(singers2));

// =====================================================
//          CodeFlow Übung lev2_3: Objects
// =====================================================


console.log("%c <<<<<<<<<lev2_3>>>>>>>>>", "color: yellow; font-size: 16px;");

const nameOutput2  =document.body.querySelector("#nameBox2");
const countryOutput =document.body.querySelector("#countryBox");
const activeOutput =document.body.querySelector("#activeBox");
const genreOutput =document.body.querySelector("#genreBox");

resetForm = () => {
    nameOutput2.innerHTML = "<p>Name</p>"
    countryOutput.innerHTML = "<p>country</p>"
    activeOutput.innerHTML = "<p>active</p>"
    genreOutput.innerHTML = "<p>genre</p>"
}
resetForm()

const showSingers =(arr) => arr.forEach((elt) => {
    nameOutput2.innerHTML += `<p>${elt.name}</p>`
    countryOutput.innerHTML += `<p>${elt.country}</p>`
    activeOutput.innerHTML += `<p>${elt.period_active.start} - ${elt.period_active.end}</p>`
    genreOutput.innerHTML += `<p>${elt.genre}</p>`
})

showSingers(singers)

