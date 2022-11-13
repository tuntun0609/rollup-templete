import './index.scss';

// export { Test } from './test';

console.log('ts');

export const test = async () => {
	const testData = [5, 2, 4, 1];
	testData.sort((a, b) => a - b);
	console.log(testData);
};