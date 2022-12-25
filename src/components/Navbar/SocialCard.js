import './SocialCard.css';

const SocialCard = ({ jsonresponse }) => {
return(
<div className="card">
<div className="card_title"> {jsonresponse.first_name} {jsonresponse.last_name} </div>
<div className="card_body">
<div className="card_image"> <img src={jsonresponse.avatar}></img> </div>
<div className='card_email'> {jsonresponse.email} </div>
<div className='card_id'> {jsonresponse.id} </div>
</div>
</div>
);
};

export default SocialCard;
