function Scooter(year , color , model) {
    this.year = year;
    this.color = color;
    this.model = model;
}
function Driver (name , age , experience ){
    this.name = name ;
    this.age = age ;
    this.experience  = experience ;
}
function PickupLocation(address, city ) {
    this.address = address;
    this.city = city;
}
let scooter = new Scooter ('2020' , 'orange' , 'used');
let driver = new Driver('Firas' , 20 , 'experienced ');
let pickuoLocation = new PickupLocation('Mojahed st.' ,'Sana\'a' );
