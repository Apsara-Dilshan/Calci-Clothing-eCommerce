import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'Dilshan',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Dil',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Red Hoodie',
      slug: 'Red-Hoodie',
      category: 'Men',
      image:
        'http://images.squarespace-cdn.com/content/v1/5a8d4b3929f187a729abbe4d/1627576661210-4J6KRG10ZEPKNZ2LGMJA/unisex-heavy-blend-hoodie-red-front-6102d94cf31d5.jpg',
      price: 3990,
      sizeS: 5,
      sizeM: 5,
      sizeL: 5,
      sizeXl: 5,
      rating: 4.5,
      numReviews: 5,
      description: 'High quality product',
    },
    {
      // _id: '2',
      name: 'Long Sleeve Denim Shirt',
      slug: 'Long-Sleeve-Denim-Shirt',
      category: 'Men',
      image:
        'https://media.istockphoto.com/id/584479824/photo/blue-jean-shirt-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=_yZ_NkKcn_P-eFVlqtB2RsAx8A9sFEQIjSU_xTwIFdY=',
      price: 3990,
      sizeS: 5,
      sizeM: 5,
      sizeL: 5,
      sizeXl: 5,
      rating: 4.5,
      numReviews: 5,
      description: 'High quality product',
    },
    {
      // _id: '3',
      name: 'Grey Tshirt',
      slug: 'Grey-Tshirt',
      category: 'Men',
      image:
        'https://images.squarespace-cdn.com/content/v1/5c3f51e325bf02ae29a22fad/1574454685200-IF9ZFN8XO5JR3HXC3PAG/Karis-Kids-tshirt-heather-dark-grey-reverse.jpg?format=1500w',
      price: 3990,
      sizeS: 0,
      sizeM: 5,
      sizeL: 5,
      sizeXl: 5,
      rating: 4.5,
      numReviews: 5,
      description: 'High quality product',
    },
  ],
};
export default data;
