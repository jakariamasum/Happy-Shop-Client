import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import UseProductsBySecondaryCategory from "../../Hooks/UseProductsBySecondaryCategory";
import { AuthContext } from "../../Providers/AuthProvider";
import Loader from "../../Components/Loader/Loader";
import ProductContainer from "../../Components/ProductContainer/ProductContainer";

const SkinCare = () => {
  const { filter } = useContext(AuthContext);
  const [sort, SetSort] = useState(null);
  useEffect(() => {
    SetSort(filter);
  }, [filter]);
  console.log(sort);
  const [products, isProductsLoading] = UseProductsBySecondaryCategory({
    category: "skin-care",
    sort,
  });
  if (isProductsLoading) {
    return (
      <div className="w-full text-4xl text-green-600 h-[500px] flex justify-center items-center">
        <Loader></Loader>
      </div>
    );
  }
  return (
    <div className="w-full py-9 mx-auto">
      <ProductContainer data={products} apiPath={"products"}></ProductContainer>
    </div>
  );
};

export default SkinCare;
