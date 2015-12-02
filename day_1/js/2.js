var input = "((()))))(";

var current_floor = 0;

for (var i = 0; i < input.length; i++)
{
    var current_char = input[i];
    if (current_char === '(')
    {
    	current_floor++;   
    }
    if (current_char === ')')
    {
    	current_floor--;   
    }
    
    if (current_floor === -1)
    {
     	console.log(i + 1);
		
		// We can break here as we only want to know the first floor
		break;
    }
}