function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
  
  Color.prototype.rgb = function() {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  };
  
  Color.prototype.hex = function() {
    let hexR = this.r.toString(16).padStart(2, '0');
    let hexG = this.g.toString(16).padStart(2, '0');
    let hexB = this.b.toString(16).padStart(2, '0');
    return `#${hexR}${hexG}${hexB}`;
  };
  
  Color.prototype.rgba = function(a) {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${a})`;
  };
  
  // testet
  let color = new Color(255, 0, 0);
  console.log(color.rgb()); 
  console.log(color.hex()); 
  console.log(color.rgba(0.5)); 
  