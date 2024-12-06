import React from 'react';

const links = [
  {
    name: "Woman's Fashion",
    sublinks: [
      { name: "Dresses", url: "/womens-fashion/dresses" },
      { name: "Tops", url: "/womens-fashion/tops" },
      { name: "Shoes", url: "/womens-fashion/shoes" },
      { name: "Accessories", url: "/womens-fashion/accessories" }
    ]
  },
  {
    name: "Men's Fashion",
    sublinks: [
      { name: "Shirts", url: "/mens-fashion/shirts" },
      { name: "Trousers", url: "/mens-fashion/trousers" },
      { name: "Shoes", url: "/mens-fashion/shoes" },
      { name: "Accessories", url: "/mens-fashion/accessories" }
    ]
  },
  {
    name: "Electronics", url: "/electronics"
  },
  {
    name: "Home & Lifestyle", url: "/home-lifestyle"
  },
  {
    name: "Medicine", url: "/medicine"
  },
  {
    name: "Sports & Outdoor", url: "/sports-outdoor"
  },
  {
    name: "Baby's & Toys", url: "/babys-toys"
  },
  {
    name: "Groceries & Pets", url: "/groceries-pets"
  },
  {
    name: "Health & Beauty", url: "/health-beauty"
  }
];

const HeroSidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        {links.map((category) => (
          <li key={category.name}>
            <a href={category.url || '#'}>{category.name}</a>
            {category.sublinks && (
              <ul>
                {category.sublinks.map((sublink) => (
                  <li key={sublink.name}>
                    <a href={sublink.url}>{sublink.name}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeroSidebar;