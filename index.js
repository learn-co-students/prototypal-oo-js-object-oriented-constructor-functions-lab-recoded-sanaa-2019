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
let newScooter = new Scooter ('2018' , 'black' , 'new');
let newDriver = new Driver('Mohammed' , 22 , 'Not that Good ');
let newPickuoLocation = new PickupLocation('60Street' ,"Sana'a" );
