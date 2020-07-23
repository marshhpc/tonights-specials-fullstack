module.exports = function userPost(userId) {
   return `
   SELECT
     users.id AS user_id, 
     users.restaurant_name, 
     users.address, 
     users.phone_number, 
     user_posts.id AS post_id, 
     user_posts.image_url, 
     user_posts.dish_name, 
     user_posts.description, 
     user_posts.allergies, 
     user_posts.price, 
     user_posts.created_at 
     FROM 
        users 
    INNER JOIN 
        user_posts ON user_id = users.id 
    WHERE 
        user_posts.user_id = '${userId}'`;
};
