
const HomePage = () => {
  return (
    <div className="flex flex-col gap-8 p-6 bg-gradient-to-b from-gray-800 to-black text-white min-h-screen w-full ml-16">
    <section>
        <div className="flex ">
      <h2 className="text-xl font-bold mb-4 mx-2">All</h2>
      <h2 className="text-xl font-bold mb-4 mx-2">Music</h2>
      <h2 className="text-xl font-bold mb-4 mx-2">Podcasts</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
        {[
          "2010s Mix",
          "Diljit Dosanjh All Songs",
          "90s Bollywood",
          "Lofi Vibe Hindi",
          "New in Dance",
          "1AM Feels Hindi",
          "AANKH",
          "Bollywood Dance Music",
        ].map((title, index) => (
          <div
            key={index}
            className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 cursor-pointer"
          >
            <h3 className="font-semibold">{title}</h3>
          </div>
        ))}
      </div>
    </section>
    <section>
      <h2 className="text-xl font-bold mb-4">Made for Ad</h2>
      <div className="flex gap-6 overflow-x-scroll ">
        {[
          {
            image: "https://static.toiimg.com/thumb/msid-50805875,width-800,height-600,resizemode-75,imgsize-61957,pt-32,y_pad-40/50805875.jpg",
            title: "Daily Mix 01",
            artists: "Pritam, Jatin-Lalit, Badshah and more",
          },
          {
            image: "https://lastfm.freetls.fastly.net/i/u/ar0/b4ef66ec873b7ee457c71e8067d0eb0f.jpg",
            title: "Daily Mix 02",
            artists: "Sachin-Jigar, Arijit Singh, Sachet Tandon and more",
          },
          {
            image: "https://th.bing.com/th/id/OIP.xGVoNO3WYviDbffjTwxG0wHaFj?rs=1&pid=ImgDetMain",
            title: "Daily Mix 03",
            artists: "Diljit Dosanjh, Inderjit Nikku, Garry Sandhu...",
          },
          {
            image: "https://th.bing.com/th/id/OIP.f0CcJT3ptatDRb0EOSD-RwHaHa?rs=1&pid=ImgDetMain",
            title: "Daily Mix 04",
            artists: "Kumar Sanu, Uttam Singh, Lata Mangeshkar...",
          },
          {
            image:"https://images.bhaskarassets.com/web2images/521/2021/01/06/diljit-dosanjh_1609923638.jpg",
            title:"Daily Mix 05",
            artists:"Diljit Dosanjh",
          },
          {
            image:"https://i.scdn.co/image/ab6761610000e5eb03e97c049b4dac1d48e20b26",

            title:"Daily Mix 06",
            artists:"Amtee",
          },
          {
            image:"https://thepersonage.com/wp-content/uploads/2020/07/Kumar-Sanu-Image.jpg",
            title:"Daily Mix 07",
            artists:"Kumar Sanu",
          },
          {
            image:"https://th.bing.com/th/id/R.7f0f03c370329d41c531426115b4c0ae?rik=BoYdveuBGco8YA&riu=http%3a%2f%2fwww.baltana.com%2ffiles%2fwallpapers-6%2fNeha-Kakkar-Singer-Wallpaper-18862.jpg&ehk=jpqw81%2b8BqgyyQdE%2fE%2bOmPJiCg9hN6xpVrs4GhgDvGU%3d&risl=&pid=ImgRaw&r=0",
            title:"Daily Mix 08",
            artists:"Neha Kakkar",
          },
          
          

        ].map((playlist, index) => (
          <div
            key={index}
            className="min-w-[200px] bg-gray-700 rounded-lg p-4 hover:bg-gray-600 cursor-pointer"
          >
            <img
              src={playlist.image}
              alt={playlist.title}
              className="w-full h-32 object-cover rounded-md mb-3"
            />
            <h3 className="font-semibold">{playlist.title}</h3>
            <p className="text-sm text-gray-400">{playlist.artists}</p>
          </div>
        ))}
      </div>
 
    
    </section>
    
  </div>
  )
}

export default HomePage
