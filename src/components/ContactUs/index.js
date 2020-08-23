import React from 'react';
import useForm from '../../hooks/useForm'

const fecha = new Date()

export const ConatactUs = () => {
    
const [resetForm, handleInputChange] = useForm({
        name: '',
        email: '',
        telf: '',
        menssage: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        resetForm();
    }
    return (
        <section id="contact">
            <div className="contact__title">
                    <h2 className="contact__h2"> Contact Us </h2>
                </div>
                <div className="wrap__center">
                <div className="container__form__main">
                <div className="contact__container">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form__label">Name</label><br/>
                            <input type="text"  name="name" placeholder="Name" autoComplete="off"  required onChange={handleInputChange}/>
                        </div>
                        <div className="form-row">
                            <div className="form__col">
                            <label className="form__label">Email</label><br/>
                            <input type="email" name="email"  placeholder="example@example.com" autoComplete="off" required onChange={handleInputChange}/>
                            </div>
                            <div className="form__col">
                            <label className="form__label" >Telf</label><br/>
                            <input type="tel"  name="telf" id="phone" placeholder="Telf: +34674461154" autoComplete="off"  maxLength="12" required onChange={handleInputChange}/>
                            </div>
                        </div>
                        <div className="form-group-center">
                            <label className="form__textarea">Menssage</label>
                            <textarea id="messange" name="menssage" placeholder="Menssage" rows="15" cols="50" required onChange={handleInputChange}></textarea>
                        </div>
                        <div className="form-btn">
                            <button className="btn" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
                </div>
            <div className="footer">
                    <span>{fecha.getFullYear()} by: <a href="mailto:derian.rods@gmail.com">DerianRS</a></span>
            </div>
        </section>
    )
}
