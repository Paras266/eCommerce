// A mock function to mimic making an async request for data
export function fetchProductLIst(amount = 1) {
  return new Promise( async(resolve) => {
const response = await fetch('http://localhost:8080') 
const data = await response.json()
resolve({data})}
 );
}
