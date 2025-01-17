import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Shashank',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Mahabharata Secrets',
      slug: 'mahabharata-secrets',
      category: 'Epic',
      image: '/images/b1.jpg', // 679px × 829px
      price: 120,
      countInStock: 10,
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      // _id: '2',
      name: 'he Encyclopedia of Crystals',
      slug: 'the-encyclopedia-of-crystals',
      category: 'Geography',
      image: '/images/b2.jpg',
      price: 250,
      countInStock: 0,
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '3',
      name: 'Mruthyu',
      slug: 'mruthyu',
      category: 'Kannada',
      image: '/images/b3.jpg',
      price: 25,
      countInStock: 15,
      rating: 4.9,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      // _id: '4',
      name: 'Robert Jordan',
      slug: 'robert-jordan',
      category: 'Novel',
      image: '/images/b4.jpg',
      price: 65,
      countInStock: 5,
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '5',
      name: 'Rich Dad Poor Dad',
      slug: 'rich-dad-poor-dad',
      category: 'Novel',
      image: '/images/b5.jpg',
      price: 100,
      countInStock: 10,
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '6',
      name: 'Power',
      slug: 'power',
      category: 'Novel',
      image: '/images/b5.jpg',
      price: 115,
      countInStock: 10,
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
  ],
};
export default data;
