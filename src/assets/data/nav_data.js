const nav_data = [
  {
    id: 1,
    link_name: 'Men',
    category: 'men',
    sub_links: [
      {
        id: 1,
        link_name: 'Featured',
        sub_links: [
          {
            id: 1,
            link_name: 'men_featured_1',
            href: '/products',
          },
          {
            id: 2,
            link_name: 'men_featured_2',
            href: '/products',
          },
          {
            id: 3,
            link_name: 'men_featured_3',
            href: '/products',
          },
        ],
      },
      {
        id: 2,
        link_name: 'Shoes',
        sub_links: [
          {
            id: 1,
            link_name: 'New Season',
            href: '/new-season',
            subcategory: 'new-season',
          },
          {
            id: 2,
            link_name: 'Trainers',
            href: '/trainers',
            subcategory: 'trainers',
          },
          {
            id: 3,
            link_name: 'Gym & Training',
            href: '/gym-and-trainers',
            subcategory: 'gym-and-trainers',
          },
          {
            id: 4,
            link_name: 'Football',
            href: '/football',
            subcategory: 'football',
          },
          {
            id: 5,
            link_name: 'Running',
            href: '/running',
            subcategory: 'running',
          },
          {
            id: 6,
            link_name: 'Hiking & Outdoor',
            href: '/hiking-and-outdoors',
            subcategory: 'hiking-and-outdoors',
          },
          {
            id: 7,
            link_name: 'Slides & Sandals',
            href: '/slides-and-sandals',
            subcategory: 'slides-and-sandals',
          },
          {
            id: 8,
            link_name: 'Walking',
            href: '/walking',
            subcategory: 'walking',
          },
          {
            id: 9,
            link_name: 'Golf',
            href: '/golf',
            subcategory: 'golf',
          },
        ],
      },
      {
        id: 3,
        link_name: 'clothing',
        href: '/products',
      },
      {
        id: 4,
        link_name: 'sports',
        href: '/products',
      },
    ],
  },
  {
    id: 2,
    link_name: 'women',
    category: 'women',
    sub_links: [
      {
        id: 1,
        link_name: 'women featured',
        sub_links: [
          {
            id: 1,
            link_name: 'women featured 1',
            href: '/products',
          },
          {
            id: 2,
            link_name: 'women featured 2',
            href: '/products',
          },
          {
            id: 3,
            link_name: 'women featured 3',
            href: '/products',
          },
        ],
      },
      {
        id: 2,
        link_name: 'women shoes',
        sub_links: [
          {
            id: 1,
            link_name: 'women_shoes_1',
            href: '/products',
          },
          {
            id: 2,
            link_name: 'women_shoes_2',
            href: '/products',
          },
          {
            id: 3,
            link_name: 'women_shoes_3',
            href: '/products',
          },
        ],
      },
      {
        id: 3,
        link_name: 'women clothing',
        href: '/products',
      },
      {
        id: 4,
        link_name: 'women sports',
        href: '/products',
      },
    ],
  },
  {
    id: 3,
    link_name: 'kids',
    category: 'kids',
    sub_links: [
      {
        id: 1,
        link_name: 'kids featured',
        href: '/products',
      },
      {
        id: 2,
        link_name: 'kids shoes',
        href: '/products',
      },
      {
        id: 3,
        link_name: 'kids clothing',
        href: '/products',
      },
      {
        id: 4,
        link_name: 'kids sports',
        href: '/products',
      },
    ],
  },
];

export default nav_data;
