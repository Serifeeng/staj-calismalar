
import React from 'react';
import '../css/Add.css';

class AddContact extends React.Component {// class component 
    constructor(){
      super() 
      this.state={
        name:'',
        text:''
        // name ve textin durumunu belirlemek icin
      }
    }

    handleChange=(event)=>{
      const { name, value } = event.target; //name = "text", value = "merhaba"
      this.setState({ [name]: value });//this.setState({ text: "merhaba" })
    }

    handleSubmit=(event)=>{
      event.preventDefault();// tarayıcının formu otomatik olarak göndermesi engellenir
      this.props.onSubmit(this.state.name, this.state.text);// App componentinden gelen onSubmit fonksiyonu name ve text degerleri ile cagrılır
      this.setState({ name:'', text:'' }); // form gönderildikten sonra degerler sıfırlanır
    }
    handleCancel = () => {
      this.setState({ name: '', text: '' });
      if (this.props.onCancel) {
        this.props.onCancel();
      }
    }

    render(){
      return (
        <div className="add-contact">
          <form className='addContainer' onSubmit={this.handleSubmit}>
            <input className='Addname' name='name' value={this.state.name} onChange={this.handleChange} placeholder='Enter your name' />
            <input className='Addtext' name='text' value={this.state.text} onChange={this.handleChange} placeholder='Enter details'/>
            <button className='Addbtn' type='submit'>Add</button>
            <button  className='Cancelbtn' type='button' onClick={this.handleCancel}>Cancel</button>
          </form>
        </div>
      )
    }
}

export default AddContact;
