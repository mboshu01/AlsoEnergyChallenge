/*****************************************************************************************
* Part 2
****************************************************************************************/
(function() {

var employees = [
        {first: "Amanda", last: "Byron", group: "Sales"},
        {first: "Ye", last: "Xia", group: "Receiving", nameOrder: "reverse"},
        {first: "Miltiades", last: "Crescens", group: "Sales"},
        {first: "Michael", last: "Boshuyzen", group: "Development"}
        /*...don't foget to account for other entries of the same form, but with different group names.....*/
    ];

// Part 2 Answer Here

function sortEmployees(employees)
{
	var result = [];

	for(var i = 0; i < employees.length; i++)
	{
		var employee = employees[i];
		var name = employee.nameOrder == "reverse" ? employee.last + " " + employee.first : employee.first + " " + employee.last;

		if (result.hasOwnProperty(employee.group))
		{
			result[employee.group].push({"name" : name});
		} 
		else 
		{
			result[employee.group] = [{"name" : name}];
		}
	}

	return result;
}

console.log(sortEmployees(employees));

})();
/*****************************************************************************************
* Bonus
****************************************************************************************/

// Bonus Anwser Here
