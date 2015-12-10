var md5 = require('./md5').md5;

const SECRET_KEY = 'yzbqklnj';

var i = 0;
while (true) {
	if (md5(SECRET_KEY + i).startsWith('000000')) {
		console.log(i);
		break;
	}
	
	i++;
}