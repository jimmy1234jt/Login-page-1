import { useState } from 'react'
import './App.css'

function App() {
  const [isLogin, setIsLogin] = useState(true)

  const toggleForm = () => {
    setIsLogin(!isLogin)
  }

  return (
    <div className='app'>
      <div className='container'>
        <div className='form-container'>
          {isLogin ? (
            <LoginForm toggleForm = {toggleForm} isLogin = {isLogin} />
            ): (
              <SignForm toggleForm = {toggleForm} isLogin = {isLogin} />
            )}
        </div>
      </div>
    </div>
  )
}

function LoginForm ({ toggleForm, isLogin }) {
  
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Login submitted with email address:', email, 'and password:', password);
  //   alert("Logged in")
  // }
  // const [formData, setFormData] = useState({
  //   email: '',
  //   password: '',
  //   // add other form fields as needed
  // });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(''); // Initialize error state

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    const allFieldsFilled = [ email, password].every((value) => value.trim() !== '');

    if (allFieldsFilled) {
      setLoading(true);

      // For demonstration purposes, assume registration is successful
      // You can replace this with your actual registration logic
      console.log('Registration successful:', { email, password });
      setFormSubmitted(true);
      setError(''); // Clear any previous error messages
    } else {
      setFormSubmitted(false);
      setError('Please fill in all required fields.');
    }

    setLoading(false);
  };

  
  
  


  

  return (
    <>
      <form>
        <h2>Login Form</h2>

        <div className='mid-login'>
          <div className='form-group'>
            <label htmlFor='email'> Email </label>
            <input 
              placeholder='Email Address' 
              type='email' 
              name='email'
              id='email'
              // value={formData.email}
              // onChange={handleInputChange}
              value={email}
              onChange={handleEmailChange}
              required
              />
          </div>

          <div className='form-group'>
            <label htmlFor='password'> Password </label>
            <input 
              placeholder='Password' 
              type='password' 
              name='password'
              id='password'
              // value={formData.password}
              // onChange={handleInputChange}
              value={password}
              onChange={handlePasswordChange}
              required
              />
          </div>
        </div>
        
        <div className='btn'>
          <button className='submit' onClick={handleSubmit} >Login</button>
          <div className='form-toggle'>
            <button type='button' onClick={toggleForm}>Sign up ?</button>
          </div>
        </div>
        
        
      </form>
      {formSubmitted && !loading && (
        <div className='form-feedback success'>
          login successful!.
        </div>
      )}

      {error && (
        <div className='form-feedback error'>
          {error}
        </div>
      )}

      {loading && (
        <div className='form-feedback loading'>
          Loading...
        </div>
      )}



    </>
    
  )
}


function SignForm ({ toggleForm, isLogin }) {
  
  const [firstname ,setFirstname] = useState('')
  const [lastname ,setLastname] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [formSubmitted, setFormSubmitted] = useState(false); // Initialize formSubmitted state
  const [loading, setLoading] = useState(false); // Initialize loading state
  const [error, setError] = useState(''); // Initialize error state

  const handleLastnameChange = (e) => {
    setLastname(e.target.value)
  }
  const handleFirstnameChange = (e) => {
    setFirstname(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    const allFieldsFilled = [firstname, lastname, email, password].every((value) => value.trim() !== '');

    if (allFieldsFilled) {
      setLoading(true);

      // For demonstration purposes, assume registration is successful
      // You can replace this with your actual registration logic
      console.log('Registration successful:', { firstname, lastname, email, password });
      setFormSubmitted(true);
      setError(''); // Clear any previous error messages
    } else {
      setFormSubmitted(false);
      setError('Please fill in all required fields.');
    }

    setLoading(false);
  };
  

  return (
    <>
      <form>
        <h2>Sign Up</h2>

        <div className='sign-info'>
          <div className='form-group'>
            <label htmlFor='name'> First Name</label>
            <input 
              placeholder='Your first name' 
              type='text'
              name='firstname'
              id='firstname'
              value={firstname}
              onChange={handleFirstnameChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='name'> Last Name</label>
            <input 
              placeholder='Your full name' 
              type='text'
              name='lastname'
              id='lastname'
              value={lastname}
              onChange={handleLastnameChange}
              required
            />
          </div>
        </div>

        <div className='sign-info'>
          <div className='form-group'>
            <label htmlFor='email'> Email </label>
            <input 
              placeholder='Email Address' 
              type='email' 
              name='email'
              id='email'
              value={email}
              onChange={handleEmailChange}
              required
              />
          </div>

          <div className='form-group'>
            <label htmlFor='password'> Password </label>
            <input 
              placeholder='Password' 
              type='password' 
              name='password'
              id='password'
              value={password}
              onChange={handlePasswordChange}
              required
              />
          </div>
        </div>
        
        <div className='btn'>
          <button className='submit' onClick={handleSubmit} >Sign up</button>
          <div className='form-toggle'>
            <button type='button' onClick={toggleForm}>Login ?</button>
          </div>
        </div>
        
      </form>
      {formSubmitted && !loading && (
        <div className='form-feedback success'>
          Registration successful! Please log in.
        </div>
      )}

      {error && (
        <div className='form-feedback error'>
          {error}
        </div>
      )}

      {loading && (
        <div className='form-feedback loading'>
          Loading...
        </div>
      )}
    </>
    
  )
}

export default App
