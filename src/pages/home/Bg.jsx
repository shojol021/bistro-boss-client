import chefServiceImage from '../../assets/home/chef-service.jpg';

const Bg = () => {
  return (
    <div
      className="w-11/12 h-[500px] mx-auto my-12 bg-cover bg-no-repeat bg-center bg-white flex items-center justify-center"
      style={{ backgroundImage: `url(${chefServiceImage})` }}
    >
      <div className='text-center bg-slate-200 bg-opacity-70 w-2/3 p-6 rounded'>
        <h3 className='text-4xl uppercase'>Bistro Boss</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
      </div>
    </div>
  );
};

export default Bg;
