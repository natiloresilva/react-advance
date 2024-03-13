function FormTest() {
  const submit = (e) => {
    e.preventDefault();
    const data = Array.from(new FormData(e.target));
    console.log(Object.fromEntries(data));
  };

  return (
    <form onSubmit={submit}>
      <div>
        <span>Name</span>
        <input type="text" name="name" />
      </div>
      <div>
        <span>Age</span>
        <input type="text" name="age" />
      </div>
      <input type="submit" value="Enviar" />
    </form>
  );
}
export default FormTest;
