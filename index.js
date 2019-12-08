function Scooter (year,color,model){
    this.year=year;
    this.color=color;
    this.model=model;
}
let Blacki=new Scooter(2018,"red","2654S")
console.log(Blacki)
function Driver (name,age,experience){
    this.name=name;
    this.age=age;
    this.experience=experience;
}
function PickupLocation (address ,city){
    this.address =address ;
    this.city=city;
}