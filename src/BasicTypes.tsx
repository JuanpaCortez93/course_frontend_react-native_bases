const BasicTypes = () => {
  
  const name : string = "Juanpa";
  const age : number = 33;
  const isActive : boolean = false;

  const powers : string[] = ['React', 'React Native'];
    
  return (
    <div>
        <h3>Tipos básicos</h3>
        {name} - {age} - {isActive ? 'Yes' : 'No'}
        <br />
        {powers.join(',')}
    </div>
  )
}

export default BasicTypes
