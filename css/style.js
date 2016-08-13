export default new class Style {
  constructor() {

    this.style = {
      'tooltip':{
        position: 'fixed',
        backgroundColor: '#333333',
        color: 'white',
        padding: '15px',
        fontSize: '18px'
      },


    };

  }

  styles() {
    return this.style;
  }
}
