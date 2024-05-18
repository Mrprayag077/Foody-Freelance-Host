import React, { useEffect, useState } from 'react';
import Header from './Header';
import RestaurantsHomePage from './RestaurantsHomePage';
import { Link } from 'react-router-dom';

const Body = () => {

    const [restaurantData, setRestaurantData] = useState([
        {
            "info": {
                "id": "393840",
                "name": "Chinese Wok",
                "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
                "locality": "Chikka Lakshmaiah Layout",
                "areaName": "Adugodi",
                "costForTwo": "₹250 for two",
                "cuisines": [
                    "Chinese",
                    "Asian",
                    "Tibetan",
                    "Desserts"
                ],
                "avgRating": 4.2,
                "parentId": "61955",
                "avgRatingString": "4.2",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 32,
                    "lastMileTravel": 2.5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "2.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-05-19 02:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹199"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/chinese-wok-chikka-lakshmaiah-layout-adugodi-bangalore-393840",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "10576",
                "name": "Pizza Hut",
                "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                "locality": "Koramangala",
                "areaName": "Koramangala",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "Pizzas"
                ],
                "avgRating": 4.1,
                "parentId": "721",
                "avgRatingString": "4.1",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 24,
                    "lastMileTravel": 0.6,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-25 mins",
                    "lastMileTravelString": "0.6 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-05-19 04:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/pizza-hut-koramangala-bangalore-10576",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "692058",
                "name": "BOOM Sandwich - Sub of India",
                "cloudinaryImageId": "96aaf72372ad1b0297b7cc304ced7e33",
                "locality": "6TH BLOCK",
                "areaName": "Koramangala",
                "costForTwo": "₹250 for two",
                "cuisines": [
                    "Snacks",
                    "Indian",
                    "Desserts"
                ],
                "avgRating": 4.3,
                "parentId": "401169",
                "avgRatingString": "4.3",
                "totalRatingsString": "100+",
                "sla": {
                    "deliveryTime": 25,
                    "lastMileTravel": 0.6,
                    "serviceability": "SERVICEABLE",
                    "slaString": "15-25 mins",
                    "lastMileTravelString": "0.6 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-05-19 02:00:00",
                    "opened": true
                },
                "badges": {
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "₹100 OFF",
                    "subHeader": "ABOVE ₹299",
                    "discountTag": "FLAT DEAL"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/boom-sandwich-sub-of-india-6th-block-koramangala-bangalore-692058",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "255801",
                "name": "Great Indian Khichdi by EatFit",
                "cloudinaryImageId": "6e44fd7f1e5cd9967edfe47c10247671",
                "locality": "6th Block",
                "areaName": "Koramangala",
                "costForTwo": "₹200 for two",
                "cuisines": [
                    "Home Food",
                    "Indian",
                    "North Indian",
                    "Healthy Food",
                    "Snacks",
                    "Desserts",
                    "Rajasthani",
                    "South Indian",
                    "Maharashtrian",
                    "Sweets"
                ],
                "avgRating": 4.4,
                "veg": true,
                "parentId": "319582",
                "avgRatingString": "4.4",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 18,
                    "lastMileTravel": 0.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "15-20 mins",
                    "lastMileTravelString": "0.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-05-19 01:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                        }
                    ],
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "brand",
                            "fontColor": "#7E808C"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "pureveg",
                                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "brand"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "60% OFF",
                    "subHeader": "UPTO ₹120"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/great-indian-khichdi-by-eatfit-6th-block-koramangala-bangalore-255801",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "375041",
                "name": "Andhra Gunpowder",
                "cloudinaryImageId": "byilgyrcfz690ryoasww",
                "locality": "6th Block",
                "areaName": "Koramangala",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "Andhra",
                    "Biryani",
                    "South Indian"
                ],
                "avgRating": 4.5,
                "parentId": "10496",
                "avgRatingString": "4.5",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 20,
                    "lastMileTravel": 0.1,
                    "serviceability": "SERVICEABLE",
                    "slaString": "15-20 mins",
                    "lastMileTravelString": "0.1 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-05-19 01:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "Rxawards/_CATEGORY-Andhra.png",
                            "description": "Delivery!"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Delivery!",
                                        "imageId": "Rxawards/_CATEGORY-Andhra.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "₹100 OFF",
                    "subHeader": "ABOVE ₹399",
                    "discountTag": "FLAT DEAL"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/andhra-gunpowder-6th-block-koramangala-bangalore-375041",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "671928",
                "name": "KFC",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/510f05e2-a9e7-49fe-8ab3-ea8c2eb8a5ae_671928.JPG",
                "locality": "7th Block",
                "areaName": "Koramangla",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Burgers",
                    "Fast Food",
                    "Rolls & Wraps"
                ],
                "avgRating": 4.3,
                "parentId": "547",
                "avgRatingString": "4.3",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 26,
                    "lastMileTravel": 1.2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "1.2 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-05-19 02:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "20% OFF",
                    "subHeader": "UPTO ₹50"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/kfc-7th-block-koramangla-bangalore-671928",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "65797",
                "name": "Leon's - Burgers & Wings (Leon Grill)",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/2/4c1e29e2-fecf-41b6-8b21-5a58338247fe_65797.jpg",
                "locality": "Koramangala",
                "areaName": "Koramangala",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "American",
                    "Snacks",
                    "Turkish",
                    "Portuguese",
                    "Continental"
                ],
                "avgRating": 4.4,
                "parentId": "371281",
                "avgRatingString": "4.4",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 17,
                    "lastMileTravel": 1.4,
                    "serviceability": "SERVICEABLE",
                    "slaString": "15-20 mins",
                    "lastMileTravelString": "1.4 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-05-19 04:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/leons-burgers-and-wings-leon-grill-koramangala-bangalore-65797",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "392828",
                "name": "Big Bowl",
                "cloudinaryImageId": "c99751d54e4e1847186c62b3309c1327",
                "locality": "Chikka Lakshmaiah Layout",
                "areaName": "Adugodi",
                "costForTwo": "₹250 for two",
                "cuisines": [
                    "North Indian",
                    "Chinese",
                    "Tibetan",
                    "Desserts"
                ],
                "avgRating": 4.1,
                "parentId": "434792",
                "avgRatingString": "4.1",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 29,
                    "lastMileTravel": 2.5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "2.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-05-19 02:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹199"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/big-bowl-chikka-lakshmaiah-layout-adugodi-bangalore-392828",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "23678",
                "name": "McDonald's",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/1fe8039a-0a1a-41f8-8db1-f3521ba8fada_23678.jpg",
                "locality": "5th Block",
                "areaName": "Koramangala",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Burgers",
                    "Beverages",
                    "Cafe",
                    "Desserts"
                ],
                "avgRating": 4.5,
                "parentId": "630",
                "avgRatingString": "4.5",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 16,
                    "lastMileTravel": 1.2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "15-20 mins",
                    "lastMileTravelString": "1.2 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-05-19 03:30:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                            "description": "Delivery!"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Delivery!",
                                        "imageId": "Rxawards/_CATEGORY-Burger.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "40% OFF",
                    "subHeader": "UPTO ₹80"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/mcdonalds-5th-block-koramangala-bangalore-23678",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "5934",
                "name": "Burger King",
                "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                "locality": "Koramangala",
                "areaName": "Koramangala",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "Burgers",
                    "American"
                ],
                "avgRating": 4.2,
                "parentId": "166",
                "avgRatingString": "4.2",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 18,
                    "lastMileTravel": 1.4,
                    "serviceability": "SERVICEABLE",
                    "slaString": "15-20 mins",
                    "lastMileTravelString": "1.4 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-05-19 06:55:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                            "description": "Delivery!"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Delivery!",
                                        "imageId": "Rxawards/_CATEGORY-Burger.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/burger-king-koramangala-bangalore-5934",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "10820",
                "name": "California Burrito",
                "cloudinaryImageId": "b58sysfvskincfwmgoqd",
                "locality": "Koramangala",
                "areaName": "Koramangala",
                "costForTwo": "₹250 for two",
                "cuisines": [
                    "Mexican",
                    "American",
                    "Salads",
                    "Continental",
                    "Keto",
                    "Healthy Food"
                ],
                "avgRating": 4.6,
                "parentId": "1252",
                "avgRatingString": "4.6",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 19,
                    "lastMileTravel": 1.4,
                    "serviceability": "SERVICEABLE",
                    "slaString": "15-20 mins",
                    "lastMileTravelString": "1.4 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-05-19 01:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "Rxawards/_CATEGORY-Guiltfree.png",
                            "description": "Delivery!"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Delivery!",
                                        "imageId": "Rxawards/_CATEGORY-Guiltfree.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/california-burrito-koramangala-bangalore-10820",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "41913",
                "name": "Chinita Real Mexican Food",
                "cloudinaryImageId": "29fc772cc06b07a4b018e4971d96c9a3",
                "locality": "Koramangala",
                "areaName": "Koramangala",
                "costForTwo": "₹750 for two",
                "cuisines": [
                    "Mexican",
                    "Salads",
                    "Desserts",
                    "Beverages"
                ],
                "avgRating": 4.5,
                "parentId": "5064",
                "avgRatingString": "4.5",
                "totalRatingsString": "5K+",
                "sla": {
                    "deliveryTime": 21,
                    "lastMileTravel": 0.4,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-25 mins",
                    "lastMileTravelString": "0.4 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-05-18 23:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Gourmet",
                                        "imageId": "newg.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "30% OFF",
                    "subHeader": "UPTO ₹75"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/chinita-real-mexican-food-koramangala-bangalore-41913",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "158855",
                "name": "Candice's Gourmet Sandwiches & Wraps",
                "cloudinaryImageId": "d1331113564b015c9d55c48ff48a2553",
                "locality": "5th Block",
                "areaName": "Koramangala",
                "costForTwo": "₹600 for two",
                "cuisines": [
                    "Continental",
                    "American",
                    "Salads",
                    "Desserts",
                    "Beverages",
                    "Healthy Food"
                ],
                "avgRating": 4.5,
                "parentId": "465403",
                "avgRatingString": "4.5",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 22,
                    "lastMileTravel": 0.4,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-25 mins",
                    "lastMileTravelString": "0.4 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-05-18 23:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                        }
                    ],
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Gourmet",
                                        "imageId": "newg.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/candices-gourmet-sandwiches-and-wraps-5th-block-koramangala-bangalore-158855",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "18973",
                "name": "Nandhana Palace",
                "cloudinaryImageId": "195876a3181ef63f76e45e3a7b49b585",
                "locality": "Koramangala",
                "areaName": "Koramangala",
                "costForTwo": "₹500 for two",
                "cuisines": [
                    "Biryani",
                    "Andhra",
                    "South Indian",
                    "North Indian"
                ],
                "avgRating": 4.2,
                "parentId": "2120",
                "avgRatingString": "4.2",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 17,
                    "lastMileTravel": 0.6,
                    "serviceability": "SERVICEABLE",
                    "slaString": "15-20 mins",
                    "lastMileTravelString": "0.6 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-05-19 02:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "Rxawards/_CATEGORY-Biryani.png",
                            "description": "Delivery!"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Delivery!",
                                        "imageId": "Rxawards/_CATEGORY-Biryani.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "40% OFF",
                    "subHeader": "UPTO ₹80"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/nandhana-palace-koramangala-bangalore-18973",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "565281",
                "name": "Wendy's Burgers",
                "cloudinaryImageId": "f1aa621021a2826088089b89842d4e7c",
                "locality": "NGK Complex",
                "areaName": "BTM 1st Stage",
                "costForTwo": "₹200 for two",
                "cuisines": [
                    "Burgers",
                    "American",
                    "Fast Food",
                    "Snacks",
                    "Beverages"
                ],
                "avgRating": 4.1,
                "parentId": "972",
                "avgRatingString": "4.1",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 27,
                    "lastMileTravel": 3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "3.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-05-18 23:59:00",
                    "opened": true
                },
                "badges": {
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/wendys-burgers-ngk-complex-btm-1st-stage-bangalore-565281",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "390057",
                "name": "NH1 Bowls - Highway To North",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/11/e9dd2067-6b5b-4408-b146-11d648346455_390057.jpg",
                "locality": "6th Block",
                "areaName": "Koramangala",
                "costForTwo": "₹250 for two",
                "cuisines": [
                    "North Indian",
                    "Punjabi",
                    "Home Food"
                ],
                "avgRating": 4.6,
                "parentId": "22452",
                "avgRatingString": "4.6",
                "totalRatingsString": "500+",
                "sla": {
                    "deliveryTime": 25,
                    "lastMileTravel": 0.6,
                    "serviceability": "SERVICEABLE",
                    "slaString": "15-25 mins",
                    "lastMileTravelString": "0.6 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-05-19 02:00:00",
                    "opened": true
                },
                "badges": {
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "₹100 OFF",
                    "subHeader": "ABOVE ₹299",
                    "discountTag": "FLAT DEAL"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/nh1-bowls-highway-to-north-6th-block-koramangala-bangalore-390057",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "750225",
                "name": "Daily Kitchen - Homely Meals",
                "cloudinaryImageId": "f3712f78feb56ca2f11ba6dcacd54521",
                "locality": "6TH BLOCK",
                "areaName": "Koramangala",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Home Food",
                    "Indian",
                    "North Indian",
                    "Thalis"
                ],
                "avgRating": 4.2,
                "parentId": "444382",
                "avgRatingString": "4.2",
                "totalRatingsString": "100+",
                "sla": {
                    "deliveryTime": 25,
                    "lastMileTravel": 0.6,
                    "serviceability": "SERVICEABLE",
                    "slaString": "15-25 mins",
                    "lastMileTravelString": "0.6 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-05-19 02:00:00",
                    "opened": true
                },
                "badges": {
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "₹100 OFF",
                    "subHeader": "ABOVE ₹299",
                    "discountTag": "FLAT DEAL"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/daily-kitchen-homely-meals-6th-block-koramangala-bangalore-750225",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "108097",
                "name": "Ambur Star Briyani Since 1890",
                "cloudinaryImageId": "yktanq9i7yfjrixaghuj",
                "locality": "2nd Stage",
                "areaName": "BTM Layout",
                "costForTwo": "₹500 for two",
                "cuisines": [
                    "Biryani",
                    "Chettinad",
                    "Andhra",
                    "Beverages",
                    "Seafood"
                ],
                "avgRating": 4.4,
                "parentId": "21400",
                "avgRatingString": "4.4",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 24,
                    "lastMileTravel": 3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-25 mins",
                    "lastMileTravelString": "3.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-05-18 23:56:00",
                    "opened": true
                },
                "badges": {
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                        }
                    ]
                },
                "isOpen": true,
                "aggregatedDiscountInfoV2": {},
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available"
                                    }
                                }
                            ]
                        }
                    }
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/ambur-star-briyani-since-1890-2nd-stage-btm-layout-bangalore-108097",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "613421",
                "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
                "cloudinaryImageId": "vbm7luhgbjxgtuphg8xc",
                "locality": "6th Block",
                "areaName": "Koramangala",
                "costForTwo": "₹200 for two",
                "cuisines": [
                    "Desserts",
                    "Ice Cream",
                    "Ice Cream Cakes"
                ],
                "avgRating": 4.7,
                "veg": true,
                "parentId": "582",
                "avgRatingString": "4.7",
                "totalRatingsString": "100+",
                "sla": {
                    "deliveryTime": 14,
                    "lastMileTravel": 0.6,
                    "serviceability": "SERVICEABLE",
                    "slaString": "10-15 mins",
                    "lastMileTravelString": "0.6 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-05-18 22:45:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "pureveg",
                                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-6th-block-koramangala-bangalore-613421",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "307",
                "name": "A2B - Adyar Ananda Bhavan",
                "cloudinaryImageId": "gxe4mn4ubw70yx3flyar",
                "locality": "1st Stage",
                "areaName": "Btm Layout",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "South Indian",
                    "North Indian",
                    "Sweets",
                    "Chinese"
                ],
                "avgRating": 4.5,
                "veg": true,
                "parentId": "22",
                "avgRatingString": "4.5",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 29,
                    "lastMileTravel": 4,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "4.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-05-18 22:30:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "Rxawards/_CATEGORY-Mithai.png",
                            "description": "Delivery!"
                        },
                        {
                            "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
                            "description": "Delivery!"
                        },
                        {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Delivery!",
                                        "imageId": "Rxawards/_CATEGORY-Mithai.png"
                                    }
                                },
                                {
                                    "attributes": {
                                        "description": "Delivery!",
                                        "imageId": "Rxawards/_CATEGORY-South%20Indian.png"
                                    }
                                },
                                {
                                    "attributes": {
                                        "description": "pureveg",
                                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "₹125 OFF",
                    "subHeader": "ABOVE ₹299",
                    "discountTag": "FLAT DEAL"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/a2b-adyar-ananda-bhavan-1st-stage-btm-layout-bangalore-307",
                "type": "WEBLINK"
            }
        }
    ]);

    useEffect(() => {
        // fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
            const data = await response.json();
            setRestaurantData(data.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
   console.log(restaurantData)
    return (
        <div>
            <Header />
            <div className='max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
                    {restaurantData.map((hotel) => (
                        <Link to={"/restaurants/" + hotel.info.id} key={hotel.info.id}>
                            <RestaurantsHomePage hotelData={hotel} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Body