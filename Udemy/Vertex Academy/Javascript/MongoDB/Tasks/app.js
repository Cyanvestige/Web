// let mongoose = require('mongoose');
// let Schema = mongoose.Schema;
// mongoose.connect('mongodb://localhost/wiki').then(()=>{
//     console.log("Connected");
// }).catch((error)=>{
//     console.log("Something is wrong");
// });

// let wikiSchema = new Schema({
//     country: String,
//     capital: String,
//     area: Number,
//     poplation: Number,
//     currency: String
// });

// let Wiki = mongoose.model('Wiki',wikiSchema);

// let country = [
// 	{country: 'USA', capital: 'Washington', area: 9833520, population: 327167434, currency: 'USD'},
// 	{country: 'Italy', capital: 'Rome', area: 301340, population: 60483973, currency: 'EUR'},
// 	{country: 'Germany', capital: 'Berlin', area: 357386, population: 83000000, currency: 'EUR'},
// 	{country: 'Canada', capital: 'Ottawa', area: 3855100, population: 37242571, currency: 'CAD'},
// 	{country: 'China', capital: 'Beijing', area: 9596961, population: 1403500365, currency: 'CNY'},
// 	{country: 'Sweden', capital: 'Stockholm', area: 450295, population: 10223505, currency: 'SEK'},
// 	{country: 'India', capital: 'New Delhi', area: 3287263, population: 1324171354, currency: 'INR'},
// 	{country: 'Netherlands', capital: 'Amsterdam', area: 41543, population: 17302139, currency: 'EUR'}
// ];

// country.forEach((value)=>{
//     let country = new Wiki(value);
//     country.save();
// }) 


let mongoose = require('mongoose');
const { compileFunction } = require('vm');
let Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/wiki').then(()=>{//wrote double '/'
    console.log('Connected');
}).catch(()=>{
    console.log('Something is wrong');
})

let countryInfo = new Schema({
    country: String,
    capital: String,
    area: Number,
    population: Number,
    currency: String
})

let Country = mongoose.model('Country',countryInfo);

let countries = [
	{country: 'USA', capital: 'Washington', area: 9833520, population: 327167434, currency: 'USD'},
	{country: 'Italy', capital: 'Rome', area: 301340, population: 60483973, currency: 'EUR'},
	{country: 'Germany', capital: 'Berlin', area: 357386, population: 83000000, currency: 'EUR'},
	{country: 'Canada', capital: 'Ottawa', area: 3855100, population: 37242571, currency: 'CAD'},
	{country: 'China', capital: 'Beijing', area: 9596961, population: 1403500365, currency: 'CNY'},
	{country: 'Sweden', capital: 'Stockholm', area: 450295, population: 10223505, currency: 'SEK'},
	{country: 'India', capital: 'New Delhi', area: 3287263, population: 1324171354, currency: 'INR'},
	{country: 'Netherlands', capital: 'Amsterdam', area: 41543, population: 17302139, currency: 'EUR'}
];

//Create
// countries.forEach((value) => {
//     let country = new Country(value);//forgot new Countries
//     country.save();
// })

//Get
async function getCountries(){
    let getc = await Country.find()
                            .where('area').gt(100000)
                            .where('currency').equals('EUR')
                            .sort({country:1})
                            .select({country:true});
    console.log(getc);
}

//Edit
async function updateCountries(){
    await Country.updateMany({currency: 'EUR'},{currency: 'EURO'});
}

async function deleteCountries(){
    await Country.deleteMany({population: {$gt:100000000}});
}
getCountries();
updateCountries();
deleteCountries();

