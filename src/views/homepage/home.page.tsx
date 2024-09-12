import React from "react";
import { ProductLists } from "../../components";
import { PageContainer } from "../../layouts/index";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { fetchProductsAsync } from "../../store/products/products.action";
import { selectProductsLists } from "../../store/products/products.selector";
const HomePage = () => {
  const productListData = useAppSelector(selectProductsLists);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);
  return (
    <PageContainer>
      <section className='section'>
        <div className='container'>
          <ProductLists productListData={productListData} />
        </div>
      </section>
    </PageContainer>
  );
};

export default HomePage;
