import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductButtons, ProductImage, ProductTite } from '../.';


export const product = {
  id: "1",
  title: "Coffie Mug - Card",
 // img: "./coffee-mug.png",
}



const App = () => {
  return (
    <ProductCard product={product}
    initialValue={{
      count: 4,
      maxCount: 10,

    }}
  >{
      ({ }) => (
        <>
          <ProductImage />
          <ProductTite />
          <ProductButtons />
        </>

      )
    }

  </ProductCard>
  );
};

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
