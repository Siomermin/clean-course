(() => {

    interface Product { 
        id:   number;
        name: string;
    }

    class ProductService {


        getProduct( id: number ) {
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }

        saveProduct( product: Product ) {
            console.log('Guardando en base de datos', product );
        }
    }

    class MailerService {

        private masterEMail: string = 'fernando@google.com';

        sendEmail( emailList: string[], template: 'to-clients' | 'admin' ) {
            console.log('Enviando correo a los clientes', template);
        }
    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {

        private productService : ProductService;
        private mailerService : MailerService;

        constructor(productService : ProductService, mailerService : MailerService) {
            this.productService = productService;
            this.mailerService = mailerService;
        }

    
        loadProduct( id: number ) {
           this.productService.getProduct( id );
        }
    
        saveProduct( product: Product ) {
            this.productService.saveProduct( product );
        }
    
        notifyClients() {
            this.mailerService.sendEmail(['fermin@gmail.com'], "to-clients");
        }
    
     
    
    }

    class CartBloc {
        onAddToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    }
    
    const productService = new ProductService()
    const mailerService = new MailerService()

    const productBloc = new ProductBloc(productService, mailerService);
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.onAddToCart(10);








})();