
const addToDb = item => {
    let db = getDb();
    if (db === null) {
        db = {};
    }

    if (item in db) {
        db[item] = db[item] + 1;
    } else {
        db[item] = 1;
    }
    saveDb(db);
}
const removeFromDb = (item) => {
    const db = getDb();
    delete db[item];
}

const getDb = () => {
    let saveDb = localStorage.getItem("shopping-cart");
    saveDb = JSON.parse(saveDb);
    return saveDb;

}

// save to localStorage

const saveDb = (db) => {
    const jsonDb = JSON.stringify(db);
    localStorage.setItem("shopping-cart", jsonDb);
}