import { useAppSelector } from "../../store/hooks/hooks";
import { selectProductsListsIsLoading } from "../../store/products/products.selector";
import Productcard from "../productcard";

type ProductRating = {
  rate: number;
  count: number;
};

export type ProductList = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: ProductRating;
  title: string;
};

type ProductListsProps = {
  productListData: ProductList[];
};

const ProductLists = ({ productListData }: ProductListsProps) => {
  const isLoading = useAppSelector(selectProductsListsIsLoading);
  if (isLoading) {
    return <p>loading...</p>;
  }
  return (
    <>
      <div className="flex">
        <a href="#" className="block max-w-sm p-4 mb-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Festive Season 1</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far.</p>
        </a>
        <a href="#" className="block max-w-sm p-4 mb-2 ml-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Festive Season 2</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far.</p>
        </a>
        <a href="#" className="block max-w-sm p-4 mb-2 ml-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Festive Season 3</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far.</p>
        </a>
      </div>
      <div className='products-wrapper'>
        {productListData?.map((item: ProductList) => (
          <Productcard key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default ProductLists;
