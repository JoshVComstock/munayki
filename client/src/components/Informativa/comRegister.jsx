
const ComRegister = ({ irLogin,Evaluando }) => {
   
  return (
    <div className={`Register ${irLogin ? "" : "active"}`}>
    <article>
    <div></div>
      <div></div>
      <div></div>
      <div></div>
      <img src="logo" alt="logo" />
    </article>
    <form>
      <label htmlFor="register"> Registrate</label>
      <button onClick={Evaluando}>Regisstrarse</button>

    </form>
  </div>
  )
}

export default ComRegister
