import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  allProducts = [
    {
      id: 1,
      Name: "Dennis Lingo",
      Sname:"Dennis Shirt With Blue colour",
      Details: "Men Slim Fit Solid Spread Collar Casual Shirt",
      Price: "₹399",
      OldPrice:"₹1,849",
      Discount:"78%",
      Delivery: "Free Delivery",
      ExtraDelivery:"0",
      Img: "../../../assets/01.png",
      imga:"../../../assets/0101.png",
      imgb:"../../../assets/0102.png"
    },
    {
      id: 2,
      Name: "CURREN CHRONOGRAPH",
      Sname:"Curren - Watch",
      Details: "Men wrist watch with leather strap",
      Price: "₹4,999",
      OldPrice:"₹7,999",
      Discount:"38%",
      Delivery: "₹120",
      ExtraDelivery:"₹18",
      Img: "../../../assets/02.jpg",
      imga:"../../../assets/0201.jpg",
      imgb:"../../../assets/0202.jpg"
    },
    {
      id: 3,
      Name: "RED CHIEF ",
      Sname:"RC2282 001 Corporate Casuals For Men  (Black)",
      Details: "Special Price₹100 off with cashback coupon on First Order, Special PriceGet extra 15% off (price inclusive of cashback/coupon), Bank Offer10% off on Axis Bank Credit Card and Credit Card EMI Trxns,up to ₹1500. On orders of ₹5000 and above",
      Price: "₹2,488",
      OldPrice:"₹3,045",
      Discount:"18%",
      Delivery: "₹160",
      ExtraDelivery:"₹28",
      Img: "../../../assets/03.png",
      imga:"../../../assets/03.png",
      imgb:"../../../assets/0301.png"
    },
    {
      id: 4,
      Name: "NIKE",
      Sname:"NIKE Sneakers For Girls  (White)",
      Details: "Special Price₹100 off with cashback coupon on First Order, Special PriceGet extra 15% off (price inclusive of cashback/coupon), Bank Offer10% off on Axis Bank Credit Card and Credit Card EMI Trxns,up to ₹1500. On orders of ₹5000 and above",
      Price: "₹3,882",
      OldPrice:"₹5,499",
      Discount:"29% ",
      Delivery: "₹160",
      ExtraDelivery:"₹28",
      Img: "../../../assets/04.png",
      imga:"https://rukminim1.flixcart.com/image/832/832/xif0q/kids-shoe/b/k/t/-original-imagg8gnjqkg5wvw.jpeg?q=70",
      imgb:"https://rukminim1.flixcart.com/image/832/832/xif0q/kids-shoe/i/i/f/-original-imaggfu4efbupz99.jpeg?q=70"
    },
    {
      id: 5,
      Name: "Intex IT-XM BANG SUFB 78 W Bluetooth",
      Sname:"Intex 2.1 Choral TUFB OS 40 W Bluetooth Home Theatre  (Black and Brown, 2.1 Channel)",
      Details: "Special Price₹100 off with cashback coupon on First Order, Special PriceGet extra 15% off (price inclusive of cashback/coupon), Bank Offer10% off on Axis Bank Credit Card and Credit Card EMI Trxns,up to ₹1500. On orders of ₹5000 and above",
      Price: "₹2,499",
      OldPrice:"₹5,499",
      Discount:"29%",
      Delivery: "₹160",
      ExtraDelivery:"₹28",
      Img: "https://rukminim1.flixcart.com/image/416/416/kdhphu80/speaker/home-theatre/j/5/1/mt70-ht21-motorola-original-imafudpyctcuzbz7.jpeg?q=70",
      imga:"https://rukminim1.flixcart.com/image/416/416/k5h2jrk0/speaker/home-theatre/c/w/n/intex-it-2616-tufb-os-original-imafz5g7njyhb2vg.jpeg?q=70",
      imgb:"https://rukminim1.flixcart.com/image/416/416/kjhgzgw0-0/speaker/home-theatre/o/n/4/2-1-choral-tufb-os-intex-original-imafzfgejjhnbhqh.jpeg?q=70"
    },
    {
      id: 6,
      Name: "Daniel Jubile",
      Sname:"Daniel - Watch",
      Details: "Flower H5 Lather Light Pink Flower Lather Girls Watch For Women Analog Watch - For Girls",
      Price: "₹119",
      OldPrice:"₹1,499",
      Discount:"92%",
      Delivery: "₹160",
      ExtraDelivery:"₹28",
      Img: "../../../assets/06.jpg",
      imga:"../../../assets/0601.jpg",
      imgb:"../../../assets/0602.jpg"
    },
    {
      id: 7,
      Name: "iPhone 12",
      Sname:"APPLE iPhone 12 (Green, 128 GB)",
      Details: "Bank Offer10% off on ICICI Bank Credit Cards (incl. EMI Txns), up to ₹1250. On orders of ₹5,000 and above, Bank Offer10% off on ICICI Bank Debit Cards (incl. EMI Txns), up to ₹1,000. On orders of ₹5,000 and above",
      Price: "₹59,900",
      OldPrice:"₹64,900",
      Discount:"9%",
      Delivery: "₹160",
      ExtraDelivery:"₹28",
      Img: "https://rukminim1.flixcart.com/image/416/416/kg8avm80/mobile/r/h/z/apple-iphone-12-dummyapplefsn-original-imafwg8duby8qbn4.jpeg?q=70",
      imga:"https://rukminim1.flixcart.com/image/416/416/kg8avm80/mobile/p/f/w/apple-iphone-12-dummyapplefsn-original-imafwg8dubf3nytw.jpeg?q=70",
      imgb:"https://rukminim1.flixcart.com/image/416/416/ko0d6kw0/mobile/6/h/y/iphone-12-mjnm3hn-a-apple-original-imag2k2v6ehvnzfd.jpeg?q=70"
    },
    {
      id: 8,
      Name: "V-Guard VKS15",
      Sname:"Stainless Steel 1500 W Electric Kettle  (1.5 L, Steel-Black)",
      Details: "Bank Offer10% off on ICICI Bank Credit Cards (incl. EMI Txns), up to ₹1250. On orders of ₹5,000 and above, Bank Offer10% off on ICICI Bank Debit Cards (incl. EMI Txns), up to ₹1,000. On orders of ₹5,000 and above",
      Price: "₹425",
      OldPrice:"₹1,245",
      Discount:"65%",
      Delivery: "₹160",
      ExtraDelivery:"₹28",
      Img: "https://rukminim1.flixcart.com/image/416/416/l572ufk0/electric-kettle/m/9/3/vks15-vks15-stainless-steel-1500-w-v-guard-original-imagfxfxjvwwddvy.jpeg?q=70",
      imga:"https://rukminim1.flixcart.com/image/416/416/l2tcfbk0/electric-kettle/q/7/h/altro-havells-original-image2w4zdxvqm8h.jpeg?q=70",
      imgb:"https://rukminim1.flixcart.com/image/416/416/l3j2cnk0/electric-kettle/q/z/c/-original-imagemy6egjb6zme.jpeg?q=70"
    },
    {
      id: 9,
      Name: "SAMSUNG Refrigerator",
      Sname:"MarQ by Flipkart 560 L Frost Free Side by Side Refrigerator with Water Dispenser",
      Details: "Bank Offer10% off on ICICI Bank Credit Cards (incl. EMI Txns), up to ₹1250. On orders of ₹5,000 and above, Bank Offer10% off on ICICI Bank Debit Cards (incl. EMI Txns), up to ₹1,000. On orders of ₹5,000 and above",
      Price: "₹23,990",
      OldPrice:"₹31,990",
      Discount:"25%",
      Delivery: "₹160",
      ExtraDelivery:"₹28",
      Img: "https://rukminim1.flixcart.com/image/416/416/jwkzwy80/refrigerator-new/u/h/k/sbs-560w-na-marq-by-flipkart-original-imafh8mfjsc9maqv.jpeg?q=70",
      imga:"https://rukminim1.flixcart.com/image/416/416/l3t2fm80/refrigerator-new/r/a/g/-original-imageu9b3uz2hnys.jpeg?q=70",
      imgb:"https://rukminim1.flixcart.com/image/416/416/kapoo7k0/refrigerator-new/r/4/p/gl-d201ascy-4-lg-original-imafs7n5f9hmdrrm.jpeg?q=70"
    },
    {
      id: 10,
      Name: "iPhone 13",
      Sname:"APPLE iPhone 13 (Starlight, 128 GB)",
      Details: "Bank OfferFlat ₹50 Instant Cashback on Paytm Wallet. Min Order Value ₹500. Valid once per Paytm account",
      Price: "₹59,990",
      OldPrice:"₹69,900",
      Discount:"14%",
      Delivery: "₹160",
      ExtraDelivery:"₹28",
      Img: "https://rukminim1.flixcart.com/image/416/416/ktketu80/mobile/a/m/7/iphone-13-mlpj3hn-a-apple-original-imag6vpyk3w4zarg.jpeg?q=70",
      imga:"https://rukminim1.flixcart.com/image/416/416/ktketu80/mobile/2/y/o/iphone-13-mlpk3hn-a-apple-original-imag6vpyur6hjngg.jpeg?q=70",
      imgb:"https://rukminim1.flixcart.com/image/416/416/l0igvww0/mobile/r/q/m/-original-imagca5ajerqpfjy.jpeg?q=70"
    },
    {
      id: 11,
      Name: "Women Printed Crepe Straight Kurta  (Grey)",
      Sname:"1 Stop Fashion",
      Details: "Special Price₹100 off with cashback coupon on First Order",
      Price: "₹319",
      OldPrice:"₹999",
      Discount:"68%",
      Delivery: "₹160",
      ExtraDelivery:"₹28",
      Img: "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/4/n/l/s-b-530373-1-stop-fashion-original-imagg6vkssesnz6p.jpeg?q=70",
      imga:"https://rukminim1.flixcart.com/image/832/832/l4iscy80/kurta/a/o/n/s-b-530374-1-stop-fashion-original-imagfepv9yz4gwhy.jpeg?q=70",
      imgb:"https://rukminim1.flixcart.com/image/832/832/l4iscy80/kurta/p/y/h/l-b-530375-ethnic-basket-original-imagfegemy6b7xbx.jpeg?q=70"
    },
  ]
}
