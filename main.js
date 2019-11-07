
function upg1() {
	// Uppgift 1
	wholeName = (firstName, lastName) => {
		return 'Hello ' + firstName + ' ' + lastName;
	};
	console.log(wholeName('Edvard', 'Busck-Nielsen'));
}

function upg2() {
	// Uppgift 2

	let numbers = [3, 4, 5, 6, 7];
	const numbers_doubled = numbers.map(double);

	function double(num) {
		return num * 2;
	}

	console.log(numbers_doubled);
}

function upg3() {
	// Uppgift 3
	let numbers = [3, 4, 5, 6, 7];

	numbers.push(8);

	let tmp = '';
	let list = document.createElement('ul');

	for (let i = 0; i < numbers.length; i++) {
		tmp = document.createElement('li');
		tmp.innerHTML = String(numbers[i]);
		list.appendChild(tmp);
	}

	document.body.appendChild(list);
}

function upg4() {
	// Uppgift 4
	const arr1 = ['a', 'b', 'c'];
	const arr2 = [1, 2, 3];

	const arr_combi = arr1.concat(arr2);

	const tmp = document.createElement('ul')
	for (let i = 0; i < arr_combi.length; i++) {
		const tmp_li = document.createElement('li');
		tmp_li.innerHTML = arr_combi[i];
		tmp.appendChild(tmp_li);
	}
	document.body.appendChild(tmp);
}

function upg5() {
	// Uppgift 5
	const table_rows = [
			[
					'Name',
					'Occupation',
					'Age',
			],
			[
					'Paul',
					'Teacher',
					'42',
			],
			[
					'Edvard',
					'Student',
					'16',
			],
	];

	let table = document.createElement('table');
	let table_row = '';
	let tmp_table_data = '';

	for(let i = 0; i < table_rows.length; i++) {
		table_row = document.createElement('tr');
		for(let x = 0; x < table_rows[i].length; x++) {
			tmp_table_data = document.createElement('td');
			tmp_table_data.innerHTML = table_rows[i][x];
			table_row.appendChild(tmp_table_data);
		}
		table.appendChild(table_row);
	}

	document.body.appendChild(table);
}

upg1();
upg2();
upg3();
upg4();
upg5();
