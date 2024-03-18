const medicineData = [
  {
    name: "Aspirin",
    expiryDate: "2024-06-30",
    count: 20,
    type: "Tablet",
    category: "Painkiller",
  },
  {
    name: "Amoxicillin",
    expiryDate: "2024-09-15",
    count: 15,
    type: "Capsule",
    category: "Antibiotic",
  },
  {
    name: "Ibuprofen",
    expiryDate: "2025-02-28",
    count: 30,
    type: "Tablet",
    category: "Anti-inflammatory",
  },
  {
    name: "Paracetamol",
    expiryDate: "2024-11-30",
    count: 25,
    type: "Syrup",
    category: "Painkiller",
  },
  {
    name: "Ceftriaxone",
    expiryDate: "2024-10-15",
    count: 10,
    type: "Injection",
    category: "Antibiotic",
  },
  {
    name: "Omeprazole",
    expiryDate: "2025-01-20",
    count: 30,
    type: "Capsule",
    category: "Antacid",
  },
  {
    name: "Diclofenac",
    expiryDate: "2024-08-15",
    count: 20,
    type: "Injection",
    category: "Anti-inflammatory",
  },
  {
    name: "Codeine",
    expiryDate: "2024-03-19",
    count: 15,
    type: "Syrup",
    category: "Painkiller",
  },
  {
    name: "Prednisone",
    expiryDate: "2024-03-15",
    count: 10,
    type: "Tablet",
    category: "Anti-inflammatory",
  },
];
const daysToExpireArray = [];

const daysToExpire = async (medicineData) => {
  medicineData.forEach((medicine) => {
    let days = calculateDaysRemaining(medicine.expiryDate)
    let d;
    if(days>=30){
      d = Math.floor(days/30) + " months"
    }else{
      if(days<=0)
      d= "Expired"
    }
    daysToExpireArray.push(d);
  });
};

function calculateDaysRemaining(expiryDate) {
  const a = new Date();
  const b = new Date(expiryDate);
  return Math.floor((b - a) / (1000 * 60 * 60 * 24));
}

function changeColor(index){
    let color;
    daysToExpireArray[index]=="Expired"?color="rgb(244 63 94)":null
    return color
}


function Home() {
  daysToExpire(medicineData);
  return (
    <div>
      <h1 className="text-4xl text-slate-200 font-bold m-5 mt-10">Welcome</h1>
      <div className="self-center mt-10 mx-5">
        {medicineData.map((medicine, index) => {
          return (
            <div key={index} className="justify-center align-middle">
              <ul style={{backgroundColor:"#535C91"}} className="flex mt-8 shadow-lg w-4/5 shadow-slate-600 justify-between text-white font-medium rounded-lg">
                <li className="text-lg p-4 w-72 ">{medicine.name}</li>
                <li className="text-lg p-4 w-72 ">{medicine.category}</li>
                <li className="text-lg p-4 w-72 ">{medicine.count}</li>
                <li className="text-lg p-4 w-72 ">{medicine.expiryDate}</li>
                <li className="text-lg p-4 w-72 " style={{"color":changeColor(index)}}>
                  {daysToExpireArray[index]}
                </li>
                <li className="text-lg p-4 w-72">{medicine.type}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
