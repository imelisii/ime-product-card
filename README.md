# ime-product-card
  Este es un paquete de pruebas de desplige en NPM

### Ignacio Martin Elisii
## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "ime-product-card"
```



```
<ProductCart product={product}
          
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

        </ProductCart>

```
