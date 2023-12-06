const avoidEmptyCity = function(a) {
    return Object.assign({}, a, { city: a.city || '-'});
}

class AirportsService {
    constructor(airports){
        this._airports = airports;
    }

    //Updated GetAll to organize by order of city
    getAll(){
        return this._airports.filter(a => a.code).map(avoidEmptyCity).sort((a, b) => (a.city > b.city) ? 1 : -1);
    }
    getByCode(code) {
        return avoidEmptyCity(this._airports.find(a => a.code == code));
    }
}

module.exports = AirportsService;