/**
 *
 * CREATE EXPENSES AND INVENTORY
 * ADD INVENTORY EXPENSES
 *
 */

/**
 *
 * Function Constructor
 */

/**
 *
 * Models, Validators and Store
 *
 * (insert, data) => validate => model => store (==)
 * (find) <== validate <== model <== store (==)
 * (update) <== validate <== model <== store (==)
 * (delete) <== validate <== model <== store (=)
 *
 */

let expenseStore = [];
let inventories = [];
function ValidatorSchema() {
  //
  this.errorMessage = null;
  this.successMessage = null;
  const rules = {
    alphabet: /^[A-Za-z]+$/,
    number: /^[0-9]+$/,
    alphanumeric: /^[A-Za-z0-9\s]+$/,
    char: /^[@.A-Za-z0-9]+$/,
  };

  const _constructor = () => {
    if (!ValidatorSchema.instance) {
      //
      console.log("caching");
      ValidatorSchema.instance = this;
    } else {
      console.log("using the cache");
      return ValidatorSchema.instance;
    }
  };

  this.validate = function (
    data,
    rule,
    message = "Sorry, your data failes the validation rule"
  ) {
    // get validator rule from local rules
    const validatorRule = rules[rule];

    // check if rule is found
    if (!validatorRule) {
      this.errorMessage = "Please check the rule you passed";
      return false;
    }

    if (!validatorRule.test(data)) {
      this.errorMessage = message;
      return false;
    }

    this.successMessage = "Data is valid";
    this.errorMessage = null;

    return true;
  };

  _constructor();
  if (ValidatorSchema.instance) {
    return ValidatorSchema.instance;
  }
}
// static methods
ValidatorSchema.instance = null;

const validator = new ValidatorSchema(); // instanciation

//
const username = "Stanley";
const age = "435345";
const address = "NO 12 Awka Road";
const email = "stanley@mymail.com";

if (
  validator.validate(
    username,
    "alphabet",
    "Username must contain only alphabets"
  )
) {
  console.log(validator.successMessage);
} else {
  console.log(validator.errorMessage);
}

if (validator.validate(age, "number")) {
  console.log(validator.successMessage);
} else {
  console.log(validator.errorMessage);
}

if (validator.validate(address, "alphanumeric")) {
  console.log(validator.successMessage);
} else {
  console.log(validator.errorMessage);
}

if (validator.validate(email, "char")) {
  console.log(validator.successMessage);
} else {
  console.log(validator.errorMessage);
}

console.log(validator.successMessage);

function Expense(expense) {
  this.expenses = [];

  // constructor
  const _constructor = (_expenses) => {
    /**
     * create a new expense
     */
    const validator = new ValidatorSchema(); // memory leakage; solution = singleton => design pattern
    // validate amount

    if (!validator.validate(_expenses.amount, "number")) {
      console.log(validator.errorMessage);
    } else {
      expenseStore.push(_expenses);
      this.expenses.push(_expenses);
    }
  };
  _constructor(expense);
}
Expense.totalExpenses = () => {
  return expenseStore.reduce(
    (initValue, expense) => initValue + Number(expense.amount),
    0
  );
};

function Inventory() {
  const validator = new ValidatorSchema();

  /**
   *
   * @description - Validates data for inventory
   */
  const validateData = (data) => {
    // validates that data is present
    const keys = ["id", "amount", "name"];

    for (const prop of keys) {
      //
      const currentProp = data[prop];
      if (!currentProp) {
        console.log(`${prop.toUpperCase()} is needed`);
        return false;
      }
    }

    // Validate the data type
    if (!validator.validate(data.id, "number")) {
      console.log("Id must be a number");
      return false;
    }
    if (!validator.validate(data.amount, "number")) {
      console.log("Amount must be a number");
      return false;
    }
    if (!validator.validate(data.name, "alphanumeric")) {
      console.log("Name must be a alphanumeric");
      return false;
    }

    return true;
  };

  const isInventoryExist = (id) => {
    const exist = inventories.some((inventory) => {
      return inventory.id == id;
    });
    return exist;
  };

  /**
   * id,amount, name
   */
  this.add = (data = {}) => {
    // check if all data is valid
    if (!validateData(data)) {
      return false;
    }

    // make sure that inventory with same id does not exist
    const inventoryExist = isInventoryExist(data.id);

    if (inventoryExist) {
      console.log("Inventory with same id already exist");
      return false;
    }

    // Extract expense data
    const expenseData = {
      amount: data.amount,
      purpose: `I bought ${data.name}`,
      inventory_id: data.id,
    };

    // create expense and inventory
    inventories.push(data);
    const expense = new Expense(expenseData);
  };

  this.remove = (id) => {
    // validate date
    if (!validator.validate(id, "number")) {
      console.log("Invalid ID submitted, please enter a valid id");
    }

    // make sure inventory with the submitted ID exists
    const inventoryExist = isInventoryExist(id);
    if (!inventoryExist) {
      console.log(`Inventory with id ${id} does not exist`);
      return false;
    }

    // remove the both the inventory and its expense
    inventories = inventories.filter((inventory) => inventory.id != id);
    expenseStore = expenseStore.filter((expense) => expense.inventory_id != id);
  };
}

const frankShopInventory = new Inventory();

frankShopInventory.add({ id: "4", amount: "400", name: "Indomie" });
frankShopInventory.add({ id: "5", amount: "400", name: "Butter" });
frankShopInventory.add({ id: "6", amount: "800", name: "Indomie" });

console.table(inventories);
console.table(expenseStore);
console.log(Expense.totalExpenses());
frankShopInventory.remove(5);
console.table(inventories);
console.table(expenseStore);
console.log(Expense.totalExpenses());

// RED REFACTOR GREEN
// WRITE REFACTOR CONTINUE
// D R Y

/**
 *
 * halls => id, title, seats, price
 * viewers => id, seats, amount, hall_id
 * purchases => viewer_id, amount, hall_id
 *
 */

const viewer = new Viewer();
viewer.add("1", 10, "1000", "1");
viewer.add("2", 6, "2000", "2"); //

console.log(halls);
console.log(viewers);

// databases
const halls = [];
const viewers = [];
const purchases = [];

function Hall() {
  this.add = (id, movieTitle, price, totalSeats) => {
    // make sure that no hall has this id before
    // update the halls database
  };
}

function Viewer() {
  this.add = (id, hall_id, amount, seats) => {
    // make sure that no viewer has this id before
    // make sure that a hall with the hall_id exists
    // make sure the number of the seat the user wants to purchase is available in the hall
    // make sure the user doesnt pay above the normal cost for his purchased seats
    // reduce the amount of the seats in the hall that has the id of the hall_id
    // create viewers record
    // create purchases record
  };
}

function Purchase() {
  this.add = (viewer_id, hall_id, seats) => {
    // update the purchase record
  };
}
