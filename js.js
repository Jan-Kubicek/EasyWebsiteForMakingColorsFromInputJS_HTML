let indexOfRows = 0;

        class Color{
            constructor (newJmeno,newRed,newGreen,newBlue)  {
            this.jmeno = newJmeno;
            this.red = newRed;
            this.green = newGreen;
            this.blue = newBlue;
            this.hex = ToHex(newRed, newGreen, newBlue);
            }
            
            getJmeno(){ return this.jmeno; }
            getRed(){ return this.red; }
            getGreen(){ return this.green; }
            getBlue() { return this.blue; }
            getHex() { return this.hex; } 
    
        }
    
        function validace(hodnota){
            let add = true;
            if( hodnota > 255){
                add = false;
                alert("Value of some color is more than 255!!");
            }        
            return add;
        }
    
        function ToHex(red,green,blue){
            var hex = ("0"+(Number(red).toString(16))).slice(-2).toUpperCase()+("0"+(Number(green).toString(16))).slice(-2).toUpperCase()+("0"+(Number(blue).toString(16))).slice(-2).toUpperCase();
            return hex;
        }

        function input(){
            var table =  document.getElementById("Table");
            const jmeno = document.getElementById("jmeno").value;
            const red = document.getElementById("red").value;
            const green = document.getElementById("green").value;
            const blue = document.getElementById("blue").value;
            if(validace(red) && validace(green) && validace(blue)){
                const myColor = new Color(jmeno,red,green,blue);
                var row = table.insertRow(1); // přidání řádku
                var cell0 = row.insertCell(0);  // přidání buňky
                var hex = ToHex(red,green,blue);
                cell0.innerHTML = indexOfRows;      // přidání hodnoty do buňky
                var cell1 = row.insertCell(1); cell1.innerHTML = jmeno;
                var cell2 = row.insertCell(2); cell2.innerHTML = red;
                var cell3 = row.insertCell(3); cell3.innerHTML = green;
                var cell4 = row.insertCell(4); cell4.innerHTML = blue;
                var cell5 = row.insertCell(5); cell5.innerHTML = hex;
                var cell6 = row.insertCell(6); cell6= "###########";
                hex.toUpperCase;
                document.querySelector('tr:first-child').style.backgroundColor = "#"+hex;
                indexOfRows ++;  
            }
        } 
        