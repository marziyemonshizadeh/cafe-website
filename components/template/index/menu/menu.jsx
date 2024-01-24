import Product from "@/components/modules/product/product";
import SectionTitle from "@/components/modules/sectionTitle/sectionTitle";

export default function Menu() {
  return (
    <>
      <SectionTitle title="MENU & PRICING" />
      <div className="text-center text-orange-950 text-3xl font-bold">
        Competitive Pricing
      </div>
      <div className="flex md:flex-row flex-col md:justify-around justify-center m-16">
        <div>
          <h2 className="text-center text-orange-950 text-3xl font-bold mb-3">
            HOT Drink
          </h2>
          <Product
            name="Chocolete Coffee"
            img="https://gatherforbread.com/wp-content/uploads/2014/10/Dark-Chocolate-Mocha-Square.jpg"
          />
          <Product
            name="Cappuccino"
            img="https://sweetstuffdeli.com/wp-content/uploads/2015/06/capochino-6501.jpg"
          />
          <Product
            name="Mocha"
            img="https://ghasedak-cafe.ir/wp-content/uploads/2022/12/%D9%85%D9%88%DA%A9%D8%A7-%D9%86%D9%88%D8%AA%D9%84%D8%A7-min.jpeg"
          />
          <Product
            name="Masala Chai"
            img="https://static.toiimg.com/thumb/52416165.cms?imgsize=163541&width=800&height=800"
          />
          <Product
            name="Tea"
            img="https://khaneroyaeeshop.ir/wp-content/uploads/2023/02/%D8%A7%D8%B3%D8%AA%DA%A9%D8%A7%D9%86-%DA%A9%D9%85%D8%B1%D8%A8%D8%A7%D8%B1%DB%8C%DA%A9-%D8%A2%D8%B1%D9%88%D8%B1%D8%A7.jpg"
          />
        </div>
        <div>
          <h2 className="text-center text-orange-950 text-3xl font-bold mb-3">
            Cold Drink
          </h2>
          <Product
            name="white chocolate"
            img="https://bakingmischief.com/wp-content/uploads/2018/04/homemade-white-chocolate-mocha-image-square.jpg"
          />
          <Product
            name="Iced coffee"
            img="https://boncafepars.ir/wp-content/uploads/2023/05/iced-coffee2.jpeg"
          />
          <Product
            name="Iced Caramel Macchiato"
            img="https://cafedari.ir/wp-content/uploads/2017/10/2017-10-05_19-29-12.png"
          />
          <Product
            name="Bubble tea"
            img="https://www.anediblemosaic.com/wp-content/uploads//2022/03/boba-milk-tea-featured-image-500x500.jpg"
          />
          <Product
            name="Green Milk Tea"
            img="https://worldlytreat.com/wp-content/uploads/2023/08/Green-Milk-Tea.jpg"
          />
        </div>
      </div>
    </>
  );
}
