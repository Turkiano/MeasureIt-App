class employee {
  baseSalary = 30000;
 overtime = 10;
 rate = 20;

 getWage(baseSalary, overtime, rate) {
  return baseSalary + (overtime * rate);
  
}
}


const worker1 = new employee()
console.log(worker1.baseSalary)
console.log(worker1.getWage(5000, 10, 20))

