/*
document.addEventListener('click', handleDocumentClick);

function handleDocumentClick(){
    console.log('Clicou no documento');
}
*/

const getMultiplier = multiplier => aNumber => aNumber * multiplier;

/*
function getMultiplier(multiplier){
    return function(aNumber){
        return aNumber * multiplier;
    }
}
*/

const double = getMultiplier(2);
const triple = getMultiplier(3);
const quadruple = getMultiplier(4);

const numbers = [1, 2, 3];
console.log(numbers);

const numbersMap = numbers.map(item => item ** 2);

console.log(numbersMap);

const tvShows = [
    {name: 'Breaking', year: 2004},
    {name: 'Lost', year: 2008},
    {name: 'Greys Anatomy', year: 2002},
    {name: 'Simpsons', year: 1986},
    {name: '100', year: 2018},
    {name: 'Walking Dead', year: 2006},
    {name: 'Stranger Things', year: 2021},
    {name: 'Game Of Thrones', year: 2000}
];

const namesTv = tvShows.map(item => item.name);

console.table(namesTv);

const numbersFilter = [36, 99, 37, 64, 114];

const numbersFilterFinish = numbersFilter.filter(item => item > 37);

console.log(numbersFilterFinish);

const tvShowsFilter = tvShows.filter(item => item.year > 2003);

console.table(tvShowsFilter);

const firstCityTravel = [
    'Praga',
    'Lisboa',
    'Nova York',
    'Berlim',
    'Paris',
    'Roma',
    'Barcelona',
    'Madrid',
]

const secondCityTravel = [
    'Rio',
    'Lisboa',
    'Chicago',
    'Madrid',
    'Milão',
    'Berlim',
    'Helsinque'
];

const cityFilter = firstCityTravel.filter(item => secondCityTravel.includes(item));

console.log(cityFilter);


const array1 = [1, 2, 3];
const arrayReduce = array1.reduce((accumulator, item) => accumulator + item, 0);

console.log(arrayReduce);

const arrayNomes = tvShows.reduce((accumulator, {name}) => `${accumulator} - ${name}\n`, '');

console.log(arrayNomes);

