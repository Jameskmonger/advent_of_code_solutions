.assembly extern mscorlib {}

.assembly day_four_part_one {}

.class Program
{	
	.field private static string SECRET_KEY

	.method static void .cctor()
	{
		.maxstack 1
		
		ldstr "input"
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
					[2] uint8[] bytes)
	
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
		
		ldstr "we need to implement converting the hash back to a string"
		
		ret
	}
}