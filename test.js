const response = pm.response.json();

pm.test('res status 200', () => {
	pm.response.to.have.status(200);
});

pm.test('all phone have 608', () => {
	pm.expect(
		response.length ===
			response.filter((elem) => elem.phone.includes('608')).length
	).to.eql(true);
});
