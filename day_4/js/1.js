var md5 = require('./md5').md5;

const SECRET_KEY = '';

for (var i = 0; i < 1000000; i++) {
	if (md5(SECRET_KEY + i).startsWith('00000')) {
		console.log(i);
		break;
	}
}