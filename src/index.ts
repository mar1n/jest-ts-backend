import add from '@src/math/add';
import dotenv from 'dotenv-safe';

dotenv.config();

console.log(add(1, 4));
console.log(process.env.MY_NAME);