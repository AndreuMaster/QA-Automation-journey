let tsAge: number = 18;
let tsPersonName: string = "Andreu";
let tsPracticingAutomationQA: boolean = true;
let tsCars: string[] = ["Ford", "Mercedes", "Porsche"];
let ownedCar : null = null;
let tsIsSingle: undefined = undefined;

interface User {
  username: string;
  password: string;
  role?: string; // the ? marks this property optional
  tag?: any //any type does not define the value of variable, flexible but not recomended since avoids type checks
}

const testUser: User = {
  username: "qa_tester",
  password: "secret123",
  role: "Mid",
  tag: 2
};

function introduction(name: string) : string {
  return "Hello my name is " + tsPersonName;
}

function getUserRole (userData : User) : string{
    return userData.role ?? "No role assigned";
}