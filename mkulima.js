class Mkulima{
    constructor(){
        this.farm=[];
        this.orders=[];
        this.products=[];
    }
    addFarm(farmId,farm_name,name,address,phone_number){
   var my_farm={name:name,
                      id:farmId,
                      farm_name:farm_name,
                      address:address,
                      phone:phone_number,

                    }
                    this.farm.push(my_farm);

     }
     removeFarm(farmId){
         let myFarm = this.farm.farmId
         let index = this.farm.indexOf(myFarm)
        return this.farm.splice(index,1)

     }
     updateFarm(farmId,name,farmer,phone_number,address){
         var updateFarm=
                      {id:farmId,
                        name:farmer,
                    farmer:name,
                phone:phone_number,
            address:address}

            this.farm.push(updateFarm)
     }
     
     getFarm(farmId){
       return this.updateFarm(farmId)
     }
     addProduct(productId,name,price){
         var my_product=
{id:productId,
name:name,
price:price}
this.products.push(my_product);
     }
     removeProduct(productId){
        let myProduct = this.products.productId
        let index = this.products.indexOf(myProduct)
       return this.products.splice(index,1)
        

     }
     updateProduct(productId,name,price){
         var update_products=
     {
         id:productId,
         name:name,
         price:price,
     }
     this.products.push(update_products)
     }
     getProduct(productId){
         return this.products

     }
     printProducts(){
         console.log(this.products);
     }
     calculateOrderCost(productId,quantity){
         return this.price * quantity
         
     }

}
 let mkulima=new Mkulima()
 mkulima.addFarm(1975,"Lavign Ranch","Lavington Mugendi","P.O BOX 142-60401",+254728422795);
 console.log(mkulima.farm)


 let mkulima1=new Mkulima();
 console.log(mkulima1.removeFarm(1975));

 let mkulima2=new Mkulima();
mkulima2.updateFarm(1973,"Samba Fields","Jackie Samba",+254713310371,"P.O BOX 40-120250")
console.log(mkulima2.farm)

let mkulima3=new Mkulima();
 console.log(mkulima3.getFarm(2017))

 let mkulima4=new Mkulima();
 mkulima4.addProduct(34053635,"Coconuts",1700)
 console.log(mkulima4.products)

 let mkulima5=new Mkulima();
 console.log(mkulima5.removeProduct(34053635))

 let mkulima6=new Mkulima();
 mkulima6.updateProduct(34053635,"Potatoes",1750)
 console.log(mkulima6.products)

  let mkulima7=new Mkulima();
  console.log(mkulima7.getProduct(1997));

 let mkulima8=new Mkulima();
 console.log(mkulima8.printProducts())
 let mkulima9=new Mkulima();
 console.log(mkulima9.calculateOrderCost(34053635,2))


