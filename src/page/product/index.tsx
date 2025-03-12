import { Box, Divider, Typography } from '@mui/material';
import { useState } from 'react';
import Header from '../../components/Header';
import Review from './review';
import Information from './information';
import CreditBanner from '../../components/CreditBanner';
import Product from '../../components/Products/Product';

const product = {
  image: {
    src: 'src/assets/monke.jpeg',
    alt: 'Product Image',
  },
  information: {
    title: 'Legendary Turtle',
    description:
      "Master Oogway is an ancient and wise tortoise, the legendary Grand Master of the Jade Palace in Kung Fu Panda. Known for his deep wisdom, calm demeanor, and mastery of kung fu, he serves as a mentor to Master Shifu and the Furious Five. Oogway believes in destiny and the power of inner peace, often speaking in profound yet cryptic sayings. His most famous lesson— 'Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present.'—continues to inspire generations. Even after ascending to the Spirit Realm, his teachings live on. 🐢✨",
    originalPrice: 50,
    stock: 12,
    essence: 'turtles',
    brand: 'legend',
    discountPrice: 25,
  },
  reviews: [
    {
      username: '🦖DinoNuggets4Life',
      review:
        'Oogway really said ‘There are no accidents’ but my whole life feels like one. Still, 10/10 wisdom, would get confused again. 🤔💀',
    },
    {
      username: '🐢SlowAndSteady99',
      review:
        'Tried to follow Oogway’s advice and find inner peace. Ended up falling asleep under a tree. Best nap of my life. 🌳😴',
    },
    {
      username: '🍜KungFuNoodles',
      review:
        'Bro dipped into the Spirit Realm mid-sentence like my dad when I ask for money. Absolute legend. 💸👀',
    },
    {
      username: '🕰️ProcrastinationKing',
      review:
        '‘Today is a gift’ sounds great until you realize rent is due. Thanks, Oogway, very helpful. 😭🎁',
    },
    {
      username: '🌸PetalPoof',
      review:
        'Master Oogway turned into flower petals and floated away… meanwhile, I trip on flat ground. Some of us just aren’t built for greatness. 🍃😔',
    },
  ],
  newArrivals: [
    {
      name: 'Oogway Poster',
      price: 16,
      currency: 'USD',
      image: 'src/assets/oogway.jpeg',
      type: 'poster',
      rates: 5,
      discountPrice: 6,
    },
    {
      name: 'Oogway Tea Set',
      price: 40,
      currency: 'USD',
      image: "src/assets/oogway's tea.jpg",
      type: 'chinaware',
      rates: 5,
      discountPrice: 25,
    },
  ],
  featuredItems: [
    {
      name: "Oogway's Wisdom Scroll",
      price: 20,
      currency: 'USD',
      image: 'src/assets/wisdom_scroll.jpeg',
      type: 'collectible',
      rates: 4.8,
      discountPrice: 12,
    },
    {
      name: "Oogway's Staff",
      price: 60,
      currency: 'USD',
      image: 'src/assets/oogway_staff.jpeg',
      type: 'replica',
      rates: 5,
      discountPrice: 45,
    },
  ],
  bestSellers: [
    {
      name: "Oogway's Meditation Cushion",
      price: 35,
      currency: 'USD',
      image: 'src/assets/meditation_cushion.jpeg',
      type: 'home decor',
      rates: 4.9,
      discountPrice: 28,
    },
    {
      name: 'Kung Fu Panda Artbook',
      price: 50,
      currency: 'USD',
      image: 'src/assets/kfp_artbook.jpeg',
      type: 'book',
      rates: 5,
      discountPrice: 38,
    },
  ],
  limitedEdition: [
    {
      name: 'Golden Oogway Statue',
      price: 150,
      currency: 'USD',
      image: 'src/assets/golden_oogway.jpeg',
      type: 'statue',
      rates: 5,
      discountPrice: 120,
    },
    {
      name: 'Spirit Realm Lantern',
      price: 80,
      currency: 'USD',
      image: 'src/assets/spirit_realm_lantern.jpeg',
      type: 'home decor',
      rates: 4.7,
      discountPrice: 65,
    },
  ],
  fanFavorites: [
    {
      name: "Oogway's Tea Sampler",
      price: 25,
      currency: 'USD',
      image: 'src/assets/oogway_tea_sampler.jpeg',
      type: 'beverage',
      rates: 4.9,
      discountPrice: 18,
    },
    {
      name: 'Oogway Quote T-Shirt',
      price: 30,
      currency: 'USD',
      image: 'src/assets/oogway_tshirt.jpeg',
      type: 'apparel',
      rates: 4.8,
      discountPrice: 22,
    },
  ],
};

function ProductDetail() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [numberOfProducts, setNumberOfProducts] = useState(0);

  const onToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Box>
      <Header
        isDarkMode={isDarkMode}
        onToggleDarkMode={onToggleDarkMode}
        numberOfProducts={numberOfProducts}
      />
      <Box
        sx={{
          display: { xs: 'block', sm: 'flex' },
          marginTop: '32px',
          justifyContent: 'center',
          fontWeight: '500',
          gap: { xs: '15px', sm: '15px', md: '4px' },
          px: { xs: '15px', sm: 0 },
        }}
      >
        <Box
          sx={{
            display: { sm: 'block', md: 'flex' },
            ml: { sm: '10px', md: '0px' },
            gap: { xs: '15px', sm: '15px', md: '20px' },
          }}
        >
          <Box sx={{ width: { md: '300px', lg: '493px' }, mt: '100px' }}>
            <img
              src={product.image.src}
              alt={product.image.alt}
              style={{ width: '100%' }}
            />
          </Box>
          <Information
            description={product.information.description}
            originalPrice={product.information.originalPrice}
            title={product.information.title}
            discountPrice={product.information.discountPrice}
            brand={product.information.brand}
            stock={product.information.stock}
            essence={product.information.essence}
          />{' '}
        </Box>
        <Box sx={{ py: { xs: '20px', sm: 0 } }}>
          <Typography sx={{ fontWeight: '510', fontSize: '1.7rem' }}>
            Reviews
          </Typography>
          {product.reviews.map((review) => {
            return <Review username={review.username} review={review.review} />;
          })}
        </Box>
      </Box>
      <Box
        sx={{ display: 'flex', marginTop: '32px', justifyContent: 'center' }}
      >
        <Divider sx={{ width: '100%' }} />
      </Box>{' '}
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ mt: '32px' }}>
          <Typography
            fontSize='36px'
            fontWeight='600'
            sx={{ ml: { xs: '15px', sm: 0 } }}
          >
            New Arrivals
          </Typography>{' '}
          <Box sx={{ display: { sm: 'flex', md: 'flex' }, gap: '18px' }}>
            {product.newArrivals.map((newArrival) => {
              return (
                <Product
                  name={newArrival.name}
                  image={newArrival.image}
                  rates={newArrival.rates}
                  originalPrice={newArrival.price}
                  discountPrice={newArrival.discountPrice}
                  type={newArrival.type}
                />
              );
            })}
          </Box>
        </Box>
      </Box>{' '}
      <CreditBanner />
    </Box>
  );
}

export default ProductDetail;
