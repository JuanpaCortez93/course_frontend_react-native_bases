interface IPerson {
    age:number;
    firstName:string;
    lastName:string;
    address:IAddress;
}

interface IAddress {
    country:string;
    houseNo:number;
    street?:string;
}

const ObjectLiteral = () => {
  
    const person : IPerson = {
        age: 38,
        firstName: 'Fernando',
        lastName: 'Herrera',
        address: {
            country: "Canada",
            houseNo: 615
        }
    }
  
    return (
    <div>
        <h3>Objetos Literales</h3>
        <pre>
            {JSON.stringify(person, null, 2)}
        </pre>
    </div>
  )
}

export default ObjectLiteral
