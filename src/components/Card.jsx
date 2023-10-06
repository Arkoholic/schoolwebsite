import '../components/Card.css';

export default function Card(props) {
    const {path, title, dateTime, info} = props;
return (
    <div className="card">
        <img className='cardImage'src={path} alt=""/>
      <p className='cardTitle'>{title}</p>
      <span className='cardDateTime'>{dateTime}</span>
      <p className='cardInfo'>{info}</p>
      
    </div>
);
};

