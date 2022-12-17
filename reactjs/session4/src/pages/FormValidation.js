import React from 'react';

class FormValidation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailAddress: '', 
            password: ''
        }
    }

    render() {
        return(
        <div className="row">
            <div className="col-sm-12 main__content">
                <h3>Form Validation</h3>

                <hr />

                <form>
                    <div className='form-group row'>
                        <label className='col-4 text-sm-end'>Email Address</label>
                        <div className='col-6'>
                            <input type='text' name='emailAddress' value={this.state.emailAddress} placeholder='ex., john@gmail.com' className='form-control' />
                        </div>
                    </div>

                    <div className='form-group row'>
                        <label className='col-4 text-sm-end'>Password</label>
                        <div className='col-6'>
                            <input type='text' name='password' value={this.state.password} placeholder='ex., j0hN123' className='form-control' />
                        </div>
                    </div>

                    <div className='form-group row'>
                        <div className='col-6 offset-4'>
                            <input type='submit' className='btn btn-primary' value='submit' />
                        </div>
                    </div>
                </form>
            </div>
        </div>
        );
    }
}

export default FormValidation;