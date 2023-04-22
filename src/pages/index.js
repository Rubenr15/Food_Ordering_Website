import About from "../components/About/About";
import Banner from "../components/Banner/Banner";
import FoodGallery from "../components/FoodGallery/FoodGallery";
import HowItWork from "../components/HowItWork/HowItWork";
import Info from "../components/Info/Info";
import Menu from "../components/Menu/Menu";
import Testimonials from "../components/Testimonials/Testimonials";
import getCategories from "../util/getCategories";
import getDishes from "../util/getDishes";
import clientPromise from "../util/mongodb";

export default function Home(props) {
  const { dishes, error } = getDishes(props?.dishes);
  const { categories, error: err } = getCategories(props?.categories);

  if (err) {
    console.error(err);
  }

  if (error) {
    console.error(error);
  }
  return (
    <>
      <Banner />
      <Info/>
      <About/>
      <FoodGallery />
      <HowItWork/>
      <Menu dishes={dishes} categories={categories} />
      <Testimonials/>
    </>
  );
}

export const getStaticProps = async () => {
  const client = await clientPromise;
  const db = await client.db("sample_data");
  let dishes = await db.collection("dishes").find({}).toArray();
  dishes = JSON.parse(JSON.stringify(dishes));
  let categories = await db.collection("categories").find({}).toArray();
  categories = JSON.parse(JSON.stringify(categories));

  return {
    props: {
      dishes,
      categories,
    },
    revalidate: 1,
  };
};
