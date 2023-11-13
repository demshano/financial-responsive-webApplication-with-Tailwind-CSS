import { PriceCard } from './PriceCard';


export const PricePanel = () => {

  const details = [
    {
      "id": 1,
      "image":"/assets/singleUser.png",
      "who": "Single User",
      "price": 149,
      "storage": "500 GB Storage",
      "users": "1 User Allowed",
      "sendGB": "Send up to 2 GB"
    },
    {
      "id": 2,
      "image":"/assets/partnership.png",
      "who": "Partnership",
      "price": 199,
      "storage": "1 TB Storage",
      "users": "3 User Allowed",
      "sendGB": "Send up to 10 GB"
    },
    {
      "id": 3,
      "image":"/assets/group.png",
      "who": "Group Account",
      "price": 299,
      "storage": "5 TB Storage",
      "users": "10 User Allowed",
      "sendGB": "Send up to 20 GB"
    }
  ];

  return (
    <div className='w-full py-[10rem] px-6 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            
        {details.map((info, index) => (
          <PriceCard info={info} isSecondCard={index === 1} key={info.id} />
        ))}

        </div>

    </div>
  )
}

// import singleUser from '../assets/singleUser.png';
// import partnership from '../assets/partnership.png';
// import group from '../assets/group.png';
