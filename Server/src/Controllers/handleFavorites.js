let myFavorites = [];

const postFav = (req, res) => {
    myFavorites.push(req.body)
    return res.json(myFavorites);
}

const deleteFav = (req, res) => {
    const { id } = req.params;
    const newFav = myFavorites.filter(fav => fav.id !== id);
    myFavorites = newFav;
    return res.json(myFavorites);
}

module.exports = {
    postFav,
    deleteFav
}