const weFollowData = [
  {
    id: 1,
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_lyF-1PIiFi0XlRSOvvXVU8UbsRP0nCwwAw&s',
    quote:
      '“Strange is our situation here on Earth. Each of us comes for a short visit, not knowing why, yet sometimes seeming to divine a purpose. From the standpoint of daily life, however, there is one thing we do know: that man is here for the sake of other men.”',
    author: 'Albert Einstein',
    description: 'Nobel Prize-winning physicist, scientist and humanitarian.',
  },
  {
    id: 2,
    imgSrc:
      'https://media.licdn.com/dms/image/D4E03AQG6LhkAqXY3vg/profile-displayphoto-shrink_200_200/0/1674835126621?e=2147483647&v=beta&t=r7xspRo1qNsNv9SqglqItO5Zk0km6VQ-fQqbTWtKgtg',
    quote:
      '“In pursuit of my engineering career I had to study Ethics and Technology in college but there is no curriculum in school for learning ethics, principles, moral or religious issues which is coherent to be a good human or good citizen. If we endure ignoring this issue, we may see a diabolical die for our next generation.”',
    author: 'Mustafizur Moosa',
    description: 'Founder, Board Chair & Humanitarian',
  },
];

const WeFollow = () => {
  return (
    <div className="container mx-auto px-5 mt-48 md:mt-7">
      <div className="my-10 container mx-auto">
        <h1 className="font-bold text-2xl xl:text-5xl text-blue-950 mb-7 p-3">
          We Follow
        </h1>

        {weFollowData.map(item => (
          <div
            key={item.id}
            className="grid md:grid-cols-3 shadow my-5 gap-10 bg-yellow-50"
          >
            <div className=" ">
              <img className="w-[450px]" src={item.imgSrc} alt={item.author} />
            </div>
            <div className="col-span-2 flex items-center">
              <div className="text-center p-5">
                <i className="fa-solid fa-quote-left text-2xl xl:text-5xl text-orange"></i>
                <p className="my-3">{item.quote}</p>
                <h2 className="text-blue-950 text-2xl font-bold">
                  {item.author}
                </h2>
                <h6>{item.description}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeFollow;
