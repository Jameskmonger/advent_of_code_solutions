.assembly extern mscorlib {}

.assembly day_one_part_one {}

.class Program
{	

	.method private hidebysig static void  Main(string[] args) cil managed
	{
		.entrypoint
		
		ldc.i4.0
		ldc.i4.1
		sub
		call void [mscorlib]System.Console::WriteLine(int32)
		
		call string [mscorlib]System.Console::ReadLine()
		pop
		ret
	}
	
}