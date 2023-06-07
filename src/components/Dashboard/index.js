import Banner from "./Banner";
import Products from "./Products";
import useGetProductList from "./hooks/useGetProductList";
import Categories from "./Categories";

function Dashboard() {
  const {data} = useGetProductList();

  return (
    <>
      <Banner />
      <Products data={data} />
      <Categories />
     </>
  );
}

export default Dashboard;