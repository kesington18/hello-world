import './App.css';

function HelloWorld({name}) {
  return(
    <main>
      <div className='card'>
        <img className="header-img"
          src="https://tse4.mm.bing.net/th/id/OIP.0ku1AvUo__-ohxH4EqTXOAHaEo?rs=1&pid=ImgDetMain&o=7&rm=3" 
          alt=""/>
        <p className="tag">
          learning
        </p>
        <p>published 21 dec 2013</p>
        <h1>HTML and CSS Foundation</h1>
        <p className='content'>These languages are the backbone of every website, defining content, structure, and presentation</p>

        <div className='profile'>
          <img src="/images/image-avatar.webp" alt='' />
          <p>{name}</p>
        </div>
        
      </div>
      
    </main>
  )
}

export default HelloWorld;
