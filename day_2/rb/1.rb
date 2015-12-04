def getSize(x)
	val = x.split("x").map{ |x| x.to_i }
	
	return (2 * val[0] * val[1]) + (2 * val[1] * val[2]) + (2 * val[2] * val[0]) + (val.sort[0] * val.sort[1])
end

puts File.readlines(".INPUTFILE").collect{|x| getSize(x)}.inject(:+)
