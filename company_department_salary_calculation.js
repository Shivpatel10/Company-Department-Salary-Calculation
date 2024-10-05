// Task 1: Create a Department Structure
const company = {
     departments: [
      {
        departmentName: 'Operations',
        employees: [
            {
             name: 'Chris',
             salary: 125000,
             subordinates: [
                {
                 name: 'Sarah',
                 salary: 79000,
                 subordinates: [
                    {
                     name: 'Lee',
                     salary: 72000,
                     subordinates: []
                    }
                ]}
            ]},
                {
             name: 'Sal',
             salary: 96000,
             subordinates: []
                }
            ]},
            {
        departmentName: 'Strategy',
        employees: [
                {
                 name: 'Ava',
                 salary: 105000,
                 subordinates: [
                    {
                     name: 'Earl',
                     salary: 86000,
                     subordinates: []
                    }
                ]},
                {
                 name: 'Emily',
                 salary: 105000,
                 subordinates: []
            }
     ]}
]};


// Task 2: Create a Recursive Function to Calculate Total Salary for a Department
function calculateDepartmentSalary(department) {
    let totalDepSalary = 0;

    for (let employee of department.employees) { // Loop through all employees in the department
        totalDepSalary += employee.salary;

        
     for (let subordinate of employee.subordinates) {  // If the employee has subordinates, recursively calculate their salaries
            totalDepSalary += calculateDepartmentSalary({ employees: [subordinate] });
        }}
    return totalDepSalary;
};

console.log(`Total Salary for Chris's Department: $${calculateDepartmentSalary({ employees: [company.departments[0].employees[0]] })}`);
// ^^ This console.log will return Chris's departments total salary.


// Task 3: Create a Function to Calculate the Total Salary for All Departments
function calculateCompanySalary(company) {
    let totalCompanySalary = 0;

    for (let department of company.departments) { // Loop through each department in the company
        totalCompanySalary += calculateDepartmentSalary(department);
    }
return totalCompanySalary;
};

console.log(`Total Salary for the Entire Company: $${calculateCompanySalary(company)}`);
// ^^ This console.log will return the companies total salary.