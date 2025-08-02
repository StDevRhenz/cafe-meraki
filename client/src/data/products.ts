import type { StaticImageData } from "next/image";
import cheesecake from '../assets/img_allOrder/cheesecake (1).png';
import darkChoco from '../assets/img_allOrder/DARK CHOCO MT (1).png';
import hazelnut from '../assets/img_allOrder/HAZELNUT MT (1).png';
import matcha from '../assets/img_allOrder/MATCHA MT.png';
import redVelvet from '../assets/img_allOrder/red velvet (1).png';
import whiteChoco from '../assets/img_allOrder/white choco.png';
import merakiEspresso from '../assets/img_allOrder/Meraki Espresso.png';
import americano from '../assets/img_allOrder/americano.png';
import caramelMacchiatto from '../assets/img_allOrder/Caramel Macchiatto.png';
import spanishLatte from '../assets/img_allOrder/Spanish Latte.png';


//FRAPPE
import merakimadness from '../assets/img_allOrder/merakimadness.png';
import vanillacookies from '../assets/img_allOrder/vanillacookies.png';
import matcha1 from '../assets/img_allOrder/matcha.png';
import chocochips from '../assets/img_allOrder/chocochips.png';
import strawberry from '../assets/img_allOrder/strawberry.png';
import creamberry from '../assets/img_allOrder/creamberry.png';
import tarooreo from '../assets/img_allOrder/tarooreo.png';
import rockyroad from '../assets/img_allOrder/rockyroad.png';
import milofudge from '../assets/img_allOrder/milofudge.png';

//FRAPPUCCINO
import chocohazelnut from '../assets/img_allOrder/chocohazelnut.png';
import javajive from '../assets/img_allOrder/javajive.png';
import arabijelly from '../assets/img_allOrder/arabijelly.png';
import darkchoffee from '../assets/img_allOrder/darkchoffee.png';



export interface Product {
  image: string | StaticImageData;
  name: string;
  price: string;
}

export interface SubCategory {
  subCategory: string;
  products: Product[];
}

export const categoryProducts: Record<string, SubCategory[]> = {
  teaAndcoffee: [
    {
      subCategory: "FRAPPE",
      products: [
        { image: cheesecake, name: "Cheesecake", price: "₱100" },
        { image: darkChoco, name: "Dark Choco MT", price: "₱110" },
        { image: hazelnut, name: "Hazelnut MT", price: "₱110" },
        { image: matcha, name: "Matcha MT", price: "₱120" },
        { image: redVelvet, name: "Red Velvet", price: "₱120" },
      ]
    },
    {
      subCategory: "ESPRESSO",
      products: [
        { image: whiteChoco, name: "White Choco", price: "₱110" },
        { image: merakiEspresso, name: "Meraki Espresso", price: "₱90" },
        { image: americano, name: "Americano", price: "₱90" },
        { image: caramelMacchiatto, name: "Caramel Macchiatto", price: "₱120" },
        { image: spanishLatte, name: "Spanish Latte", price: "₱120" },
      ]
    }
  ],

  FRAPPE: [
    {
      subCategory: "MILKTEA",
      products: [
        { image: cheesecake, name: "Cheesecake", price: "₱100" },
        { image: darkChoco, name: "Dark Choco MT", price: "₱110" },
        { image: hazelnut, name: "Hazelnut MT", price: "₱110" },
        { image: matcha, name: "Matcha MT", price: "₱120" },
        { image: redVelvet, name: "Red Velvet", price: "₱120" },
      ]
    },
    {
      subCategory: "ESPRESSO",
      products: [
        { image: whiteChoco, name: "White Choco", price: "₱110" },
        { image: merakiEspresso, name: "Meraki Espresso", price: "₱90" },
        { image: americano, name: "Americano", price: "₱90" },
        { image: caramelMacchiatto, name: "Caramel Macchiatto", price: "₱120" },
        { image: spanishLatte, name: "Spanish Latte", price: "₱120" },
      ]
    }
  ],

  ColdDrinks: [
    {
      subCategory: "MILKTEA",
      products: [
        { image: cheesecake, name: "Cheesecake", price: "₱100" },
        { image: darkChoco, name: "Dark Choco MT", price: "₱110" },
        { image: hazelnut, name: "Hazelnut MT", price: "₱110" },
        { image: matcha, name: "Matcha MT", price: "₱120" },
        { image: redVelvet, name: "Red Velvet", price: "₱120" },
      ]
    },
    {
      subCategory: "ESPRESSO",
      products: [
        { image: whiteChoco, name: "White Choco", price: "₱110" },
        { image: merakiEspresso, name: "Meraki Espresso", price: "₱90" },
        { image: americano, name: "Americano", price: "₱90" },
        { image: caramelMacchiatto, name: "Caramel Macchiatto", price: "₱120" },
        { image: spanishLatte, name: "Spanish Latte", price: "₱120" },
      ]
    }
  ],




  RiceAndMeal: [
    {
      subCategory: "MILKTEA",
      products: [
        { image: cheesecake, name: "Cheesecake", price: "₱100" },
        { image: darkChoco, name: "Dark Choco MT", price: "₱110" },
        { image: hazelnut, name: "Hazelnut MT", price: "₱110" },
        { image: matcha, name: "Matcha MT", price: "₱120" },
        { image: redVelvet, name: "Red Velvet", price: "₱120" },
      ]
    },
    {
      subCategory: "ESPRESSO",
      products: [
        { image: whiteChoco, name: "White Choco", price: "₱110" },
        { image: merakiEspresso, name: "Meraki Espresso", price: "₱90" },
        { image: americano, name: "Americano", price: "₱90" },
        { image: caramelMacchiatto, name: "Caramel Macchiatto", price: "₱120" },
        { image: spanishLatte, name: "Spanish Latte", price: "₱120" },
      ]
    }
  ],



  Foods: [
    {
      subCategory: "MILKTEA",
      products: [
        { image: cheesecake, name: "Cheesecake", price: "₱100" },
        { image: darkChoco, name: "Dark Choco MT", price: "₱110" },
        { image: hazelnut, name: "Hazelnut MT", price: "₱110" },
        { image: matcha, name: "Matcha MT", price: "₱120" },
        { image: redVelvet, name: "Red Velvet", price: "₱120" },
      ]
    },
    {
      subCategory: "ESPRESSO",
      products: [
        { image: whiteChoco, name: "White Choco", price: "₱110" },
        { image: merakiEspresso, name: "Meraki Espresso", price: "₱90" },
        { image: americano, name: "Americano", price: "₱90" },
        { image: caramelMacchiatto, name: "Caramel Macchiatto", price: "₱120" },
        { image: spanishLatte, name: "Spanish Latte", price: "₱120" },
      ]
    }
  ],


  hotbox: [
    {
      subCategory: "MILKTEA",
      products: [
        { image: cheesecake, name: "Cheesecake", price: "₱100" },
        { image: darkChoco, name: "Dark Choco MT", price: "₱110" },
        { image: hazelnut, name: "Hazelnut MT", price: "₱110" },
        { image: matcha, name: "Matcha MT", price: "₱120" },
        { image: redVelvet, name: "Red Velvet", price: "₱120" },
      ]
    },
    {
      subCategory: "ESPRESSO",
      products: [
        { image: whiteChoco, name: "White Choco", price: "₱110" },
        { image: merakiEspresso, name: "Meraki Espresso", price: "₱90" },
        { image: americano, name: "Americano", price: "₱90" },
        { image: caramelMacchiatto, name: "Caramel Macchiatto", price: "₱120" },
        { image: spanishLatte, name: "Spanish Latte", price: "₱120" },
      ]
    }
  ],
  
};