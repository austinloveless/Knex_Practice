exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("book")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("book").insert([
        { title: "book1", author: "author1", cover_image: "image1" },
        { title: "book2", author: "author2", cover_image: "image2" }
        // { title: "book3", author: "author3", cover_image: "image3" },
        // { title: "book4", author: "author4", cover_image: "image4" }
      ]);
    });
};
