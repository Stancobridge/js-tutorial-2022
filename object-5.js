/**
 *
 * OBJECT GETTER AND SETTER
 */

const house = {
  _rooms: 14,
  _windows: 32,
  _doors: 18,
  _flats: 2,
  _palours: 2,
  get flats() {
    return this._flats;
  },

  set flats(value) {
    this._rooms = 7 * value;
    this._doors = 9 * value;
    this._palours = 1 * value;
    this._windows = 16 * value;
    this._flats = value;
  },
  set palours(value) {
    throw new Error("Sorry you cannot update palours");
  },
  set rooms(value) {
    throw new Error("Sorry you cannot update rooms");
  },
  get rooms() {
    return this._rooms;
  },
  set doors(value) {
    throw new Error("Sorry you cannot update doors");
  },
  set windows(value) {
    throw new Error("Sorry you cannot update windows");
  },
};

house.flats = 10;
console.table(house);
console.log(house.rooms);
console.table(house.flats);
