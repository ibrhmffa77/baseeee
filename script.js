let id=0;
let cars = []
const cardBody = document.getElementById("cardBody")
const AddBtn=document.getElementById("AddBtn")
const input=document.getElementsByClassName("inp")
class Base{
    constructor(){
        this.id = id,
        this.isDeleted = false,
        this.CreatedAt = new Date()
        this.ModifiaAt = new Date(),
        id++

    }
}
class Car extends Base{
    constructor(engine,Gearbox,BAN,Price,image,KM, LitrPerKM,Brand, Model,Year ){
        super()
        this.engine = engine,
        this.Gearbox = Gearbox,
        this.BAN = BAN,
        this.Price = Price,
        this.image = image,
        this.KM = KM,
        this.LitrPerKM = LitrPerKM,
        this.Brand = Brand,
        this.Model = Model,
        this.Year = Year

    }
  
}
function addCars(engine,Gearbox,BAN,Price,image,KM, LitrPerKM,Brand, Model,Year){
    if( image == ''){
        image = "https://cdn.motor1.com/images/mgl/6Wo6X/s1/mercedes-amg-gt-63-s-with-aerodynamic-package.jpg"
    }
     let newCars = new Car(engine,Gearbox,BAN,Price,image,KM, LitrPerKM,Brand, Model,Year);
     cars.push(newCars);
     renderList(cars);
}
function renderList(array){
    let innerHTML ="";
    for (let i = 0; i < array.length; i++) {
       const {engine,Gearbox,BAN,Price,image,KM, LitrPerKM,Brand, Model,Year} = array[i];
       innerHTML = `
       <div class="col-3">
       <div class="card" style="width: 18rem;">
           <img src="${image}" class="card-img-top" alt="...">
           <div class="card-body">
             <h5 class="card-title">${Brand} ${Model} ${Year} ${Price}</h5>
             <p class="card-text">${engine} ${Gearbox} ${BAN} ${KM} ${LitrPerKM}</p>
             <a href="#" class="btn btn-primary">Go somewhere</a>
           </div>
         </div>
   </div>
       `
        
    }
    cardBody.innerHTML = innerHTML
}
AddBtn.onclick = function () {
    let brandname = input.value
    let modelname = input.value
    let carimage = input.value
    let carprice= input.value
    addCars(brandname, carprice, carimage,modelname)

}
