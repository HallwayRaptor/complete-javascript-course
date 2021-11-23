const country = 'Canada'
const continent = 'North America'
let canadaPop = 36
let population = canadaPop
const isIsland = false
const language = 'English'
let finlandPop = 6
let averagePop = 33
// let description = `${country} is in ${continent} and its ${canadaPop} million people speak ${language}`
// if (canadaPop > finlandPop) {
//     console.log(`Canada has a higher population than Finland`)
// };

// if (canadaPop > averagePop) {
//     console.log(`Canada has a higher population than average`)
// } else {
//     console.log(`error`)
// }
// console.log(description)
// console.log(country)
// console.log(continent)
// console.log(canadaPop)
// console.log(isIsland)

//find out if my country is good for Sarah

if(language === 'English' && population < 50 && !isIsland) {
    console.log('You should live in Canada!')
} else {
    console.log('Canada is not a good fit.')
}