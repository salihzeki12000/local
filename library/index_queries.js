
module.exports = (knex) => {
const obj = {};

obj.makeFavorite = function(card_id, user_id){
  knex('favorite')
  .insert({
    card_id,
    user_id
  })
  .where('user_id', user.id)
  .and('card_id', card.id)
}

obj.getFiltered = function(lat1, lng1, lat2, lng2){
  return knex('cards')
    .whereRaw(`box '((${lat1}, ${lng1}),(${lat2}, ${lng2}))' @> ("location")`)

};

return obj;
}
