class Wagon {
    constructor(capacity) {
       this._capacity = capacity; //quantidade em número
       this._passengers = [];//array inicialmente vazio
    }
    getAvailableSeatCount(){
        let seats = this._capacity - this._passengers.length        
            return seats
    }
    join(passenger){
        if (this._capacity - this._passengers.length > 0){
            this._passengers.push(passenger)            
        }
    }
    shouldQuarantine(){
        let quarentine = new Boolean;
        for ( let i = 0; i < this._passengers.length; i++ ){
            if (this._passengers[i].isHealthy == true){
                quarentine = false;
            } else {
                quarentine = true;
            }
        }
       return quarentine; 
    }
    totalFood(){
        let totalFood = 0; 
        for( let i = 0; i < this._passengers.length; i++ ){
            totalFood += this._passengers[i]._food
        }        
        return totalFood;       
    }    
}