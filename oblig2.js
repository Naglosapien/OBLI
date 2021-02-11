

function Chosen(valgt){
    if(chosenBar==valgt){
        chosenBar='';
        disabledBar='disabled';
        show();
        return
    }
    chosenBar=valgt;
    disabledBar='';
    show();
    }
    
    function adding(){
        if(inputValue<1 || inputValue>10){
            alert('Ugyldig')
            return
        }
        numbers.push(inputValue)
        show();     
    }

    function remove(){
        numbers.splice(chosenBar-1, 1)

    show();   
    }

    function change(){
        if(inputValue<1 || inputValue>10){
            alert('Ugyldig')
            return
        }
        numbers[chosenBar-1]=inputValue;
        show();  
    }

