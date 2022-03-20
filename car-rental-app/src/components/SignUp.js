import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Row } from 'react-bootstrap';


const SignUp = () => {
    return (
    <div className="signUp">
        <h1>Sign Up Page</h1>
        <form className='add-form'>
           <div className='form-control'>
                <label>שם מלא</label>
                <input type='text' placeholder='שם מלא'/>
           </div> 
           <div className='form-control'>
                <label>מספר תז</label>
                <input type='text' placeholder='ת.ז'/>
           </div> 
           <div className='form-control'>
                <label>תאריך לידה</label>
                <input type='datetime-local' placeholder='תאריך לידה'/>
           </div> 
           <div className='form-control'>
                <label>אימייל</label>
                <input type='email' placeholder='אימייל'/>
           </div> 
           <div className='form-control'>
                <label>סיסמא</label>
                <input type='password' placeholder='סיסמא'/>
           </div> 
           <div className='form-control'>
                <FormControl style={{flexDirection:'row'}} component="fieldset">
                <FormLabel component="legend">מין</FormLabel>
                <RadioGroup >
                    <FormControlLabel value="נקבה" control={<Radio />} label="נקבה" />
                    <FormControlLabel value="זכר" control={<Radio />} label="זכר" />
                </RadioGroup>
                </FormControl>
           </div>
           <div style={{flexDirection:'row'}} className='form-control'>
                <label>תמונת פרופיל</label>
                <input type="file"/>
           </div>
           <input type='submit' className='btn btn-block'/>
        </form>
    </div>
    )
  };
  
export default SignUp;