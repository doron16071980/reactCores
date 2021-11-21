/**
 * place your code here
 */


 function Header() {
    return (
        <h1 className='header'> 
            <strong>
                <u>This is the header</u>
            </strong>
        </h1>
    )
}

function Login() {
    return (
        <table> 
            <tr>
                <td>
                    <strong>
                    <u>
                    Email
                    </u>
                    </strong>
                </td>
                <td>
                    <input id='txtEmail' type='text'></input>
                </td>
            </tr>
            <tr>
                <td>
                    <strong>
                    <u>
                    Password
                    </u>
                    </strong>
                </td>
                <td>
                    <input id='txtPassword' type='text'></input>
                </td>
            </tr>
        </table>
    )
}

function Footer() {
    return (
        <h1 className='footer'>
            <strong>
                <u>This is the footer</u>
            </strong>
        </h1>
    )
}



 function App() {
    return (
        <div className='Screen'>
            <header>
                <Header />
            </header>
            <div>
                <Login />
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}


ReactDOM.render(
    <App />,
    root
)