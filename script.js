function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, '').trim();
}

const sortedBans = bands.sort(function (a, b){
 if(a > b) {
    return 1;
 }  else {
    return -1;
 }
})

console.log (sortedBands)

const sortedBands = bands.sort((a,b) => strip(a) > strip(b) ? 1 : -1);

document.querySelector("#bands").innerHTML = 
  sortedBands
  .map(band => `<li>${band}</li>`)
  .join('') 

