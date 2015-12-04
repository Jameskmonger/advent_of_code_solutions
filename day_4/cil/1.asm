.assembly extern mscorlib {}

.assembly day_four_part_one {}

.class Program
{	
	.field private static string SECRET_KEY

	.method static void .cctor()
	{
		.maxstack 1
		
		ldstr "pqrstuv1048970"
		stsfld string Program::SECRET_KEY

		ret
	}

	.method private hidebysig static void Main(string[] args) cil managed
	{
		.entrypoint
		
		ldsfld string Program::SECRET_KEY
		call void [mscorlib]System.Console::WriteLine(string)
		
		ldsfld string Program::SECRET_KEY
		call string Program::Generate(string)
		call void [mscorlib]System.Console::WriteLine(string)
		
		call string [mscorlib]System.Console::ReadLine()
		pop
		ret
	}
	
	.method private hidebysig static string Generate(string input) cil managed
	{
		.locals init ([0] class [mscorlib]System.Security.Cryptography.MD5 md5,
					[1] class [mscorlib]System.Text.Encoding enc,
					[2] uint8[] bytes,
					[3] int32 i,
					[4] class [mscorlib]System.Text.StringBuilder sb)
	
		// Call the Create() method on MD5 and store it in 0
		call class [mscorlib]System.Security.Cryptography.MD5 [mscorlib]System.Security.Cryptography.MD5::Create()
		stloc.0
		
		// Call the ASCII getter on Encoding and store it in 1
		call class [mscorlib]System.Text.Encoding [mscorlib]System.Text.Encoding::get_ASCII()
		stloc.1

		// Get the ASCII and get the input from the args, and then call GetBytes
		ldloc.1
		ldarg.0
		callvirt instance uint8[] [mscorlib]System.Text.Encoding::GetBytes(string)
		
		// Store the bytes of the string in 2, we don't need the encoder anymore
		stloc.2
		
		// Get MD5 and the bytes and call ComputeHash
		ldloc.0
		ldloc.2
		callvirt instance uint8[] [mscorlib]System.Security.Cryptography.HashAlgorithm::ComputeHash(uint8[])
		
		// Store the hash's bytes in 2
		stloc.2
		
		// Instantiate a StringBuilder and store it in 3
		newobj instance void [mscorlib]System.Text.StringBuilder::.ctor()
		stloc.s sb
		
		// Instantiate the pointer as 0, and store in 4
		ldc.i4.0
		stloc.3
		
		br.s CONTINUE_LOOP
		
		// Get the StringBuilder
		START_LOOP: ldloc.s sb
		
		// Get the byte array
		ldloc.2
		
		// Get the pointer
		ldloc.3
		
		// Load the byte at the given index
		ldelema [mscorlib]System.Byte
		
		// Load the format specifier (X2)
		ldstr "X2"
		
		// Call ToString on the byte (with the format specifier passed in), and append it to the StringBuilder
		call instance string [mscorlib]System.Byte::ToString(string)
		callvirt instance class [mscorlib]System.Text.StringBuilder [mscorlib]System.Text.StringBuilder::Append(string)
		
		// We need to pop the StringBuilder returned by Append
		pop
		
		// Load the pointer, the number 1, add them, then store them
		ldloc.3
		ldc.i4.1
		add
		stloc.3
		
		// Load the pointer
		CONTINUE_LOOP: ldloc.3
		
		// Load the byte array
		ldloc.2
		
		// Get the length of the array
		ldlen
		
		// Compare the pointer and the length
		clt
		
		// If they're not the same, then go back to the start
		brtrue.s START_LOOP
		
		// Otherwise, continue!
		
		// Load the stringbuilder
		ldloc.s sb
		
		callvirt instance string [mscorlib]System.Object::ToString()
		
		ret
	}
}