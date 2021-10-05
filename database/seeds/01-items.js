exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("items")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("items").insert([
        {
          name: "Tomatoes",
          description: 'Green cherry tomatoes',
          count: '1',
        },
        {
          name: "Tomatoes 2",
          description: 'Green cherry tomatoes 2',
          count: '2',
        },
      ]);
    });
};

