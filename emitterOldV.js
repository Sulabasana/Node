function Emitter() {
    this.events = {}
}

Emitter.prototype.on = function(type, listener){
    this.events[type] = this.events[type] || []; //if properties exists if non create new array
    this.events[type].push(listener); //adding function to properties
}


Emitter.prototype.emit = function(type){
    if (this.events[type]){
        this.events[type].forEach(function(listener){
            listener();;
        });
    }
}

module.exports = Emitter;