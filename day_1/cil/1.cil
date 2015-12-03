.assembly extern mscorlib {}

.assembly day_one_part_one {}

.class Program
{
	.field private static char UP_CHARACTER
	.field private static char DOWN_CHARACTER

	// Class constructor
	.method private hidebysig specialname rtspecialname static void .cctor() cil managed
	{
		.maxstack 1
	
		// Open bracket
		ldc.i4.s 40
		stsfld char Program::UP_CHARACTER
		
		// Close bracket
		ldc.i4.s 41
		stsfld char Program::DOWN_CHARACTER
	}
	
	.method static bool IsUpCharacter(char c) cil managed
	{
		// Load argument 0 (char c)
		ldarg.0
		
		// Load the field UP_CHARACTER
		ldsfld char Program::UP_CHARACTER
		
		// Push 1 if they're equal
		ceq
		
		ret
	}
	
	.method static string LoadInput() cil managed
	{	
		// Load the file path and read all the text from that file into a string
		ldstr ".INPUTDATA"
		call string [mscorlib]System.IO.File::ReadAllText(string)
	
		ret
	}

	.method private hidebysig static void  Main(string[] args) cil managed
	{
		.entrypoint
		
		.maxstack 2
		
		.locals init ([0] string input,
				[1] int32 ptr,
				[2] bool cont)
		
		// Load the input data, store it in 0
		call string Program::LoadInput()
		stloc.0
		
		// Initialise the pointer as value 0 and store it in 1
		ldc.i4.0
		stloc.1
		
		// Load the current floor as value 0 and store it in 2
		ldc.i4.0
		stloc.2
		
		// Start the loop at IL_CHECK
		br.s IL_CHECK
		
		IL_STARTLOOP:  nop
		ldloc.0
		ldloc.1
		callvirt instance char [mscorlib]System.String::get_Chars(int32)
		call bool Program::IsUpCharacter(char)
		
		// Move to IL_MOVE_DOWN if we're moving up
		brtrue.s IL_MOVE_UP
		
		// Otherwise, move to IL_MOVE_DOWN
		br.s IL_MOVE_DOWN
		
		IL_MOVE_UP: nop
		ldloc.2
		ldc.i4.1
		add
		stloc.2
		br.s IL_MOVE_FINISHED
		
		IL_MOVE_DOWN: nop
		ldloc.2
		ldc.i4.1
		sub
		stloc.2
		br.s IL_MOVE_FINISHED
		
		IL_MOVE_FINISHED: nop
			
		// Load the pointer, load the number 1, add them and store it
		ldloc.1
		ldc.i4.1
		add
		stloc.1
			
		// Label for IL_CHECK
		IL_CHECK: nop
			
		// Load the pointer and the string
		ldloc.1
		ldloc.0
			
		// Get the length of the string
		callvirt instance int32 [mscorlib]System.String::get_Length()
			
		// If the pointer (value 1) is less than the length (value 2), go to IL_STARTLOOP
		blt.s IL_STARTLOOP
		
		ldstr "You are currently on floor:"
		call void [mscorlib]System.Console::WriteLine(string)
		
		ldloc.2
		call void [mscorlib]System.Console::WriteLine(int32)
		
		// Call ReadLine so the console doesn't close
		call string [mscorlib]System.Console::ReadLine()
		
		ret
	}

}
