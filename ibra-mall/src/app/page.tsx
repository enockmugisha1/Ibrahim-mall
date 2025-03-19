'use client'
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
    
      <div className="p-5">
        <section>
          <h1 className="text-center font-bold text-[30px] text-pink-500">
            WELCOME TO<span className="text-pink-800"> IbraMall</span>
          </h1>
          <h1 className="text-black text-[20px] mt-[20px]">
            Explore a Wide Range of Premium Products at IbraMall From
            Cutting-Edge Technology to Stylish Fashion and Essential Home
            Appliances, We’ve Got Everything You Need to Live Better, Smarter,
            and More Stylishly
          </h1>
        </section>
        <section className="bg-pink-50">
         <div className=" p-5"> <h2 className="text-black text-center p-5 font-bold text-[20px]">
            Smartphones and Accessories
          </h2> </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-slate-500 gap-5">
            <div className="border-2 border-white p-5">
              <h2 className="font-bold text-white ">Smartphones:</h2>{" "}
              <p>
                Latest models featuring touchscreen technology, designed for
                enhanced performance and user experience.
              </p>
            </div>
            
            <div className="grid border-2 border-white p-5">
              <h2 className="font-bold ">Cellphones:</h2>{" "}
              <p>
                Reliable and durable phones that meet everyday communication
                needs, perfect for all users.
              </p>
            </div>
            <div className="grid border-2 border-white p-5">
              <h2 className="font-bold ">Battery:</h2>{" "}
              <p>
                High-capacity batteries for longer usage and minimal downtime.
              </p>
            </div>
            <div className="grid border-2 border-white p-5">
              <h2 className="font-bold">Charger:</h2>{" "}
              <p>
                Fast-charging solutions to keep you powered up and ready to go.
              </p>
            </div>
            <div className="grid border-2 border-white p-5">
              <h2 className="font-bold ">Antiblock:</h2>{" "}
              <p>
                Screen protectors or anti-glare films to keep your device safe
                from scratches and smudges.
              </p>
            </div>
            <div className="grid border-2 border-white p-5">
              <h2 className="font-bold">Pouchette:</h2>{" "}
              <p>
                Stylish and functional phone pouches for carrying your device
                securely and conveniently.
              </p>
            </div>
            <div className="grid border-2 border-white p-5">
              <h2 className="font-bold">USB:</h2>{" "}
              <p>
                High-speed USB cables and adapters for easy data transfer and
                charging.
              </p>
            </div>
            </div>
        </section>
        
        <section className="bg-pink-50">
          <h2 className="text-black text-center p-5 font-bold text-[20px]">Fashion Apparel</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-slate-500  gap-5">
          <div className="grid border-2 border-white p-5">
            <strong>Trendy Clothes:</strong> A wide range of stylish apparel for both men and
            women, featuring the latest fashion trends for casual and formal
            occasions.
          </div>
          <div className="grid border-2 border-white p-5">
            <strong>Casual Wear:</strong> Comfortable yet fashionable pieces perfect for everyday
            wear, including t-shirts, jeans, and sneakers.
          </div>
          <div className="grid border-2 border-white p-5">
            <strong>Formal Outfits:</strong> Elegant dresses, suits, and blouses for professional
            settings or special events.
          </div>
          <div className="grid border-2 border-white p-5">
            <strong>Accessories:</strong> Complement your look with trendy accessories such as
            hats, scarves, watches, and jewelry to add a touch of
            sophistication.
          </div>
          <div className="grid border-2 border-white p-5">
            <strong>Footwear:</strong> A variety of shoes, from casual sneakers to formal dress
            shoes, designed for both comfort and style.
          </div>
          </div>
        </section>
      </div>
     
    </main>
  );
}
 