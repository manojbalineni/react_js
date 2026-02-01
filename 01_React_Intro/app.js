import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/cutlery-coming-out-from-chef-hat-3947ld.png?nwm=1&nws=1&industry=food&sf=&txt_keyword=All"
          alt=""
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "408177",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/80f0c98a-9559-4aa7-a69c-4d500799fbbc_408177.JPG",
      locality: "Kachiguda",
      areaName: "Kachiguda",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.5,
      parentId: "721",
      avgRatingString: "4.5",
      totalRatingsString: "3.4K+",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 4.9,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "4.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-02-02 00:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹59",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.7",
          ratingCount: "855",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-5830f2c7-ee1b-4b34-9a02-73ae20fdd3c8",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/pizza-hut-kachiguda-rest408177",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "7203",
      name: "Taj Mahal-Abids",
      cloudinaryImageId: "8aa874a03b5bd0804b6781b1fd13f02d",
      locality: "Abids",
      areaName: "Abids",
      costForTwo: "₹400 for two",
      cuisines: ["South Indian", "North Indian", "Biryani", "Snacks"],
      avgRating: 4.6,
      veg: true,
      parentId: "924",
      avgRatingString: "4.6",
      totalRatingsString: "67K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-02-01 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹79",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.2",
          ratingCount: "19K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-5830f2c7-ee1b-4b34-9a02-73ae20fdd3c8",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/taj-mahal-abids-abids-rest7203",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "27739",
      name: "Cafe Niloufer Classic",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/31/13770a02-2339-4b58-9d80-33735e2ccfe4_27739 (2).jpg",
      locality: "Oshiwara",
      areaName: "Khairatabad",
      costForTwo: "₹150 for two",
      cuisines: ["Bakery", "Beverages", "Snacks", "Desserts"],
      avgRating: 4.7,
      parentId: "466854",
      avgRatingString: "4.7",
      totalRatingsString: "149K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-02-01 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
          {
            imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹29",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-5830f2c7-ee1b-4b34-9a02-73ae20fdd3c8",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/cafe-niloufer-classic-oshiwara-khairatabad-rest27739",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "262087",
      name: "Imperial Multicuisine Restaurant",
      cloudinaryImageId: "rqlwvsmzcfxbg9u6ajgm",
      locality: "Banjara Hills",
      areaName: "Redhills",
      costForTwo: "₹400 for two",
      cuisines: ["Biryani", "Chinese", "Indian", "Kebabs", "Tandoor"],
      avgRating: 4.3,
      parentId: "543714",
      avgRatingString: "4.3",
      totalRatingsString: "26K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 2.7,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-02-01 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-5830f2c7-ee1b-4b34-9a02-73ae20fdd3c8",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/imperial-multicuisine-restaurant-banjara-hills-redhills-rest262087",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "6498",
      name: "Hotel Sandarshini",
      cloudinaryImageId: "9f5783b9975a73ec001560327065a01c",
      locality: "Masab Tank",
      areaName: "Masab Tank",
      costForTwo: "₹200 for two",
      cuisines: ["Chinese", "South Indian", "Juices"],
      avgRating: 4.6,
      veg: true,
      parentId: "476",
      avgRatingString: "4.6",
      totalRatingsString: "106K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-02-01 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.0",
          ratingCount: "2.2K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-5830f2c7-ee1b-4b34-9a02-73ae20fdd3c8",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/hotel-sandarshini-masab-tank-rest6498",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "378344",
      name: "Theobroma",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/6/6a6d0704-4fce-4c87-bd43-77e7637b4a20_378344.JPG",
      locality: "Banjara Hills",
      areaName: "Banjara Hills",
      costForTwo: "₹400 for two",
      cuisines: ["Desserts"],
      avgRating: 4.5,
      parentId: "1040",
      avgRatingString: "4.5",
      totalRatingsString: "4.8K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-02-02 00:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Desserts.png",
            description: "Delivery!",
          },
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Desserts.png",
                },
              },
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.2",
          ratingCount: "343",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-5830f2c7-ee1b-4b34-9a02-73ae20fdd3c8",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/theobroma-banjara-hills-rest378344",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "662646",
      name: "Starbucks Coffee",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/22/17332b1a-e15c-4c7f-b98c-5f33cc6bf8a0_662646.JPG",
      locality: "Banjara Hills",
      areaName: "Banjara Hills",
      costForTwo: "₹400 for two",
      cuisines: [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts",
        "Bakery",
        "Ice Cream",
      ],
      avgRating: 4.4,
      parentId: "195515",
      avgRatingString: "4.4",
      totalRatingsString: "1.0K+",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-02-01 23:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png",
            description: "Delivery!",
          },
          {
            imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹599",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.4",
          ratingCount: "246",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-5830f2c7-ee1b-4b34-9a02-73ae20fdd3c8",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/starbucks-coffee-banjara-hills-rest662646",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "344287",
      name: "Varalakshmi Tiffins",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/c75ff48c-b373-4733-8126-e3180cbb0fa0_344287.jpg",
      locality: "Banjara Hills",
      areaName: "Filmnagar",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian"],
      avgRating: 4.6,
      veg: true,
      parentId: "6482",
      avgRatingString: "4.6",
      totalRatingsString: "28K+",
      sla: {
        deliveryTime: 44,
        lastMileTravel: 10.2,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "10.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-02-01 12:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-South%20Indian.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-South%20Indian.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹49",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-5830f2c7-ee1b-4b34-9a02-73ae20fdd3c8",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/varalakshmi-tiffins-banjara-hills-filmnagar-rest344287",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "16158",
      name: "Royal Tiffin Centre",
      cloudinaryImageId: "xxvnkzmpgmbojcakxws4",
      locality: "Hanuman Tekdi",
      areaName: "Abids & Koti",
      costForTwo: "₹150 for two",
      cuisines: ["South Indian"],
      avgRating: 4.1,
      parentId: "4621",
      avgRatingString: "4.1",
      totalRatingsString: "84K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-02-01 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹55",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-5830f2c7-ee1b-4b34-9a02-73ae20fdd3c8",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/royal-tiffin-centre-hanuman-tekdi-abids-and-koti-rest16158",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "23734",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/e531b669-397c-4a40-8f60-50868537c098_23734.JPG",
      locality: "Mehdipatnam",
      areaName: "Humayun Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.3,
      parentId: "630",
      avgRatingString: "4.3",
      totalRatingsString: "53K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-02-02 04:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-5830f2c7-ee1b-4b34-9a02-73ae20fdd3c8",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/mcdonalds-mehdipatnam-humayun-nagar-rest23734",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "837954",
      name: "The Pizza Project by Oven Story",
      cloudinaryImageId: "f1b907b0b8f86c62e4fc347c6b1434e6",
      locality: "Beside Little Flower Primary school",
      areaName: "Abids",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Desserts", "Beverages"],
      avgRating: 4.1,
      parentId: "497031",
      avgRatingString: "4.1",
      totalRatingsString: "140",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-02-01 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-5830f2c7-ee1b-4b34-9a02-73ae20fdd3c8",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/the-pizza-project-by-oven-story-beside-little-flower-primary-school-abids-rest837954",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "575164",
      name: "Veg Darbar by Behrouz Biryani",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/9/65f8dfaa-053d-4892-b21c-b41138c5d320_575164.JPG",
      locality: "Beside Little Flower Primary school",
      areaName: "Abids",
      costForTwo: "₹700 for two",
      cuisines: [
        "Biryani",
        "North Indian",
        "Kebabs",
        "Mughlai",
        "Lucknowi",
        "Hyderabadi",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4,
      veg: true,
      parentId: "344904",
      avgRatingString: "4.0",
      totalRatingsString: "72",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-02-01 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-5830f2c7-ee1b-4b34-9a02-73ae20fdd3c8",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/veg-darbar-by-behrouz-biryani-beside-little-flower-primary-school-abids-rest575164",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "639526",
      name: "Dum Safar Biryani",
      cloudinaryImageId: "1154cffac2453eb0bf7fdda7e5ea1659",
      locality: "City Plaza",
      areaName: "ABIDS",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani", "Kebabs", "North Indian", "Barbecue"],
      avgRating: 4,
      parentId: "351013",
      avgRatingString: "4.0",
      totalRatingsString: "403",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "30-40 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-02-02 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹64",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-5830f2c7-ee1b-4b34-9a02-73ae20fdd3c8",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/dum-safar-biryani-city-plaza-abids-rest639526",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "395279",
      name: "McDonald's Gourmet Burger Collection",
      cloudinaryImageId: "zqjiuzjclswtjkxrmvvn",
      locality: "Humayun Nagar",
      areaName: "Mehdipatnam",
      costForTwo: "₹600 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.3,
      parentId: "10761",
      avgRatingString: "4.3",
      totalRatingsString: "748",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-02-02 04:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-5830f2c7-ee1b-4b34-9a02-73ae20fdd3c8",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/mcdonalds-gourmet-burger-collection-humayun-nagar-mehdipatnam-rest395279",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "801390",
      name: "Makhani Darbar",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/20/c39503e4-319d-4f40-b5f2-2ba1d0a3aa11_801390.JPG",
      locality: "Beside Little Flower Primary school",
      areaName: "Abids",
      costForTwo: "₹500 for two",
      cuisines: ["Kebabs", "Mughlai", "Beverages", "Desserts"],
      avgRating: 4.1,
      parentId: "478595",
      avgRatingString: "4.1",
      totalRatingsString: "67",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-02-01 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹149",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-5830f2c7-ee1b-4b34-9a02-73ae20fdd3c8",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/makhani-darbar-beside-little-flower-primary-school-abids-rest801390",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "657474",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/ea422e81-79ea-4ffa-b56b-bc0dbc34520d_657474.jpg",
      locality: "R5 Chambers",
      areaName: "Mehdipatnam",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.2,
      parentId: "166",
      avgRatingString: "4.2",
      totalRatingsString: "12K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-02-02 04:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹59",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-5830f2c7-ee1b-4b34-9a02-73ae20fdd3c8",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/burger-king-r5-chambers-mehdipatnam-rest657474",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "37103",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/8/c1c0b0f4-4d4c-43d9-b82d-d79194e7add0_37103.JPG",
      locality: "Gun Foundry",
      areaName: "Abids",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.2,
      parentId: "547",
      avgRatingString: "4.2",
      totalRatingsString: "17K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-02-02 00:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹79",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "5.3K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-5830f2c7-ee1b-4b34-9a02-73ae20fdd3c8",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/kfc-gun-foundry-abids-rest37103",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "263841",
      name: "Veg Meals By LunchBox",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/19d9b493-2763-4801-b2e8-7a4f9d1ee6c4_263841.JPG",
      locality: "Beside Little Flower Primary school",
      areaName: "Abids",
      costForTwo: "₹200 for two",
      cuisines: [
        "Thalis",
        "North Indian",
        "Biryani",
        "South Indian",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.4,
      veg: true,
      parentId: "21938",
      avgRatingString: "4.4",
      totalRatingsString: "500",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-02-01 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-5830f2c7-ee1b-4b34-9a02-73ae20fdd3c8",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/veg-meals-by-lunchbox-beside-little-flower-primary-school-abids-rest263841",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "2535",
      name: "Agra Sweets Banjara",
      cloudinaryImageId: "ydsyhgg51xaxsrjbaxdv",
      locality: "Masab Tank",
      areaName: "Masab Tank",
      costForTwo: "₹250 for two",
      cuisines: ["Sweets", "Desserts", "Chaat", "Snacks", "Beverages"],
      avgRating: 4.5,
      veg: true,
      parentId: "34",
      avgRatingString: "4.5",
      totalRatingsString: "98K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-02-01 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Mithai.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Mithai.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "1.5K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-5830f2c7-ee1b-4b34-9a02-73ae20fdd3c8",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/agra-sweets-banjara-masab-tank-rest2535",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "798552",
      name: "Harley's Fine Baking",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/16/bff32444-650e-40cb-8929-a8693035db37_798552.JPG",
      locality: "Amberpet Circle No 16",
      areaName: "Abids",
      costForTwo: "₹500 for two",
      cuisines: ["Bakery", "Desserts", "Burgers", "Fast Food"],
      avgRating: 4.6,
      veg: true,
      parentId: "11126",
      avgRatingString: "4.6",
      totalRatingsString: "1.9K+",
      sla: {
        deliveryTime: 42,
        lastMileTravel: 3.9,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "3.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-02-02 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Desserts.png",
            description: "Delivery!",
          },
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Desserts.png",
                },
              },
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-5830f2c7-ee1b-4b34-9a02-73ae20fdd3c8",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/harleys-fine-baking-amberpet-circle-no-16-abids-rest798552",
      type: "WEBLINK",
    },
  },
];

const RestroCard = (props) => {
  const { resData } = props;
  const { name, avgRating, cuisines } = resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="restro-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="image-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId
        }
        alt=""
      />
      <h3>{name}</h3>
      <h4>Rating : {avgRating}</h4>
      <h4>{deliveryTime} minutes</h4>
      <h3>{cuisines.join(", ")}</h3>
    </div>
  );
};

const BodyCmponent = () => {
  return (
    <div className="body">
      <div className="search-input">Search Box</div>

      <div className="restaurant-component">
        {resList.map((restaurant) => (
          <RestroCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <BodyCmponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
/*

const TitleComponent = () => {
  return <h1> This is hello from the Title Component</h1>;
};

Component Composition 
const HeadingComponent = () => {
  return (
    <div id="heading">
      <TitleComponent />
      {TitleComponent()}
      <TitleComponent></TitleComponent>
      <h1>This is hello from the heading component</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

*/

/*

const jsxHeading = <h1>Hello from Manoj Babu using JSX Syntax</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);

*/

/*

The below is the old code 


const heading = React.createElement(
  "h1",
  { id: "sample-h1", dummy: "manoj" },
  "Hello World from the react",
);
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(heading);

console.log(heading); // JS Object => React Element

{
  
  <div id="parent">
    <div id="child">
      <h1>This is heading </h1>
    </div>
</div>; 
}



const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "This is the heading in nested structure"),
  ),
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

{
  
  <div id="parent">
    <div id="child">
      <h1>This is heading </h1>
      <h2> This is Second heading </h2>
    </div>
</div>;
}

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is the heading in nested structure"),
    React.createElement(
      "h2",
      {},
      "This is the second heading in nested structure",
    ),
  ]),
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

{

  <div id="parent">
    <div id="child1">
      <h1>This is heading </h1>
      <h2> This is Second heading </h2>
    </div>
     <div id="child2">
      <h1>This is heading </h1>
      <h2> This is Second heading </h2>
    </div>
</div>; 
}

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child01" }, [
    React.createElement("h1", {}, "This is the heading in nested structure"),
    React.createElement(
      "h2",
      {},
      "This is the second heading in nested structure",
    ),
  ]),
  React.createElement("div", { id: "child02" }, [
    React.createElement("h1", {}, "This is the heading in nested structure"),
    React.createElement(
      "h2",
      {},
      "This is the second heading in nested structure",
    ),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

 The above structure the code is becoming more and more complex. To avoid this we are using JSX 

 */
