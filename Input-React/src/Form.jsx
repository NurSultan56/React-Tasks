function Form() {
    return (
        <>
            <form className="form-container" action="">
                <div>
                    <p>Имя:</p>
                    <p>Почта:</p>
                    <p>Пароль:</p>
                    <p>Показать пароль: <input type="checkbox" /></p>
                </div>
                <div className="input-container">
                    <input type="text" />
                    <input type="text" />
                    <input type="password" />
                </div>
            </form>
        </>
    )
}

export default Form