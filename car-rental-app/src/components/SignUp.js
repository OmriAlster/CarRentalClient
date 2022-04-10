import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Stack } from 'react-bootstrap';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css"


const SignUp = ({onSubmit}) => {
     const [name, setName] = useState('');
     const [id, setId] = useState('');
     const [date, setDate] = useState(Date.now());
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [isMale, setIsMale] = useState(true);
     const navigate = useNavigate();

     const add = () => {
          onSubmit(
               {"name": name, "id": id, "birthDate": date, "email": email, "password" : password,
                "gender": (isMale ? "male" : "female")});
               navigate("/login");
     }

    return (
    <div className="signUp">
        <h1>Sign Up Page</h1>
        <form className='signUp-form' onSubmit={() => add()}>
           <div className='form-control'>
                <label>שם מלא</label>
                <input type='text' placeholder='שם מלא'
                    value={name} onChange={(e) => setName(e.target.value)} required/>
           </div> 
           <div className='form-control'>
                <label>מספר תז</label>
                <input name="id-form" type='text' minLength="9" maxLength="9" size="9"  placeholder='ת.ז'
                value={id} onChange={(e) => setId(e.target.value)} required/>
           </div> 
           <div className='form-control'>
                <label>תאריך לידה</label>
                <input type='date' placeholder='תאריך לידה' defaultValue={Date.now()}
                value={date} onChange={(e) => setDate(e.target.value)} required/>
           </div> 
           <div className='form-control'>
                <label>אימייל</label>
                <input type='email' placeholder='אימייל'
                value={email} onChange={(e) => setEmail(e.target.value)} required/>
           </div> 
           <div className='form-control'>
                <label>סיסמא</label>
                <input type='password' placeholder='סיסמא'
                value={password} onChange={(e) => setPassword(e.target.value)} required/>
           </div> 
           <div className='form-control'>
                <Stack direction="column" spacing={10}>
                <FormControl component="fieldset">
                <FormLabel component="legend">מין</FormLabel>
                <RadioGroup >
                    <FormControlLabel  control={<Radio checked={!isMale} onSelect
                    onChange={(e) => setIsMale(!isMale)}/>} label="נקבה" required/>
                    <FormControlLabel  control={<Radio checked={isMale}
                    onChange={(e) => setIsMale(!isMale)}/>} label="זכר" required/>
                </RadioGroup>
                </FormControl>
                </Stack>
           </div>
           <div className='form-control'>
                <label>תמונת פרופיל</label>
                <input name="profile-pic" type="file"/>
           </div>
           <input type='submit' className='btn btn-block'/>
        </form>
    </div>
    )
  };
  
export default SignUp;