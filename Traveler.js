class Traveler {
    constructor(name) {
        this._name = name;//string fornecidade como parâmetro para o construtor
        this._food = 1;//valor inicial 1
        this._isHealthy = true;//valor booleano que indica se está doente    
    }    
    hunt(){
       this._food += 2
        return this._food 
    }
    eat(){
        
        if(this._food > 0){
            this._food = this._food - 1
        }
        if(this._food == 0){
            this._healthy = false;
        }
    }   
}


