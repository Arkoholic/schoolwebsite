function FunctionalComponent(){
   
    const CheckClickHandler = () => {
        console.log('check clicked');
    }
    return(
        <div>
            This will be a functional component!
            <button onClick={CheckClickHandler}>Helloo!</button>
        </div>
    );
}

export default FunctionalComponent;