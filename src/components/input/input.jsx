const Input = ({ type, action, text, value, img }) => {
    return (
        <div >
            <input   
                img={img}
                className={type} 
                onChange={action}
                value={value}
                placeholder={text} 
            />
        </div>
    )
}
export default Input;