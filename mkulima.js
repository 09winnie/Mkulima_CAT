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
                    this.farm.push(my_farm)
                    return this.farm;

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

            this.farm.push(updateFarm);
            return this.farm
     }
     
     getFarm(farmId){
       let farmB=this.farm.find(farmB=>farmB.id===farmId)
       return farmB;
     }
     addProduct(productId,name,price){
         var my_product=
{id:productId,
name:name,
price:price}
this.products.push(my_product);
return this.products;
     }
     removeProduct(productId){
        let product2 = this.products.find(product2=>product2.id===productId)
            return delete this.products[productId];

     }
     updateProduct(productId,name,price){
         var update_products=
     {
         id:productId,
         name:name,
         price:price,
     }
     this.products.push(update_products);
     return this.products;
     }
     getProduct(productId){
        let product1=this.products.find(product1=>product1.id===productId)
        return product1;
     }
     printProducts(){
         for(let items of this.products){
console.log([items.name +","+items.price])
         }
         
     }
     calculateOrderCost(productId,quantity){
         let cost=this.products.find(cost=> cost.id===productId)
         return cost.price*quantity;
     }

}
 let mkulima=new Mkulima();
console.log( mkulima.addFarm(1975,"Lavign Ranch","Lavington Mugendi","P.O BOX 142-60401",+254728422795));
console.log( mkulima.addFarm("Lav18","Candy Ranch","Kendi Mugendi","P.O BOX 60-20301",+254713310371));
console.log(mkulima.getFarm(1975))
console.log(mkulima.removeFarm("Lav18"));
console.log(mkulima.updateFarm(1973,"Samba Fields","Jackie Samba",+254706529004,"P.O BOX 40-120250"))
 console.log(mkulima.addProduct(3405,"Coconuts",8900))
 console.log(mkulima.addProduct("Mel19","Pineapples",7500))
 console.log(mkulima.removeProduct("34053635"))
 console.log(mkulima.updateProduct("1997O","Potatoes",1750))
  console.log(mkulima.getProduct("1997O"));
 mkulima.printProducts()
 console.log(mkulima.calculateOrderCost("1997O",2))


