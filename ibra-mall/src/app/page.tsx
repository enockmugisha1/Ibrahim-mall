import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      <nav className="bg-gray-800 text-white p-4">
        <div className="container flex justify-between items-center">
          <h1>IbraMall</h1>
          <ul>
            <li className="inline-block mx-2">Home</li>
            <li className="inline-block mx-2">About</li>
            <li className="inline-block mx-2">Contact</li>
          </ul>
        </div>
      </nav>
      <div className="p-5">
        <section>
          <h1 className="text-center font-bold text-[30px] text-pink-500">
            WELCOME TO<span className="text-pink-800"> IbraMall</span>
          </h1>
          <h2 className="text-[20px] mt-[20px]">
            Explore a Wide Range of Premium Products at IbraMall From
            Cutting-Edge Technology to Stylish Fashion and Essential Home
            Appliances, We’ve Got Everything You Need to Live Better, Smarter,
            and More Stylishly
          </h2>
        </section>
        <section className="bg-pink-50">
          <h1 className="text-center p-5 font-bold text-">
            Smartphones and Accessories
          </h1>
          <div className="grid-col-8  justify-between bg-pink-200">
            <span className="col-span-1 border-2 border-pink-500 p-5">
              <h2 className="font-bold ">Smartphones:</h2>{" "}
              <p>
                Latest models featuring touchscreen technology, designed for
                enhanced performance and user experience.
              </p>
            </span>
            <span className="col-span-1 grid border-2 border-pink-500 p-5">
              <h2 className="font-bold ">Cellphones:</h2>{" "}
              <p>
                Reliable and durable phones that meet everyday communication
                needs, perfect for all users.
              </p>
            </span>
            <span className="col-span-1 grid border-2 border-pink-500 p-5">
              <h2 className="font-bold ">Battery:</h2>{" "}
              <p>
                High-capacity batteries for longer usage and minimal downtime.
              </p>
            </span>
            <span className="col-span-1 grid border-2 border-pink-500 p-5">
              <h2 className="font-bold">Charger:</h2>{" "}
              <p>
                Fast-charging solutions to keep you powered up and ready to go.
              </p>
            </span>
            <span className="col-span-1 grid border-2 border-pink-500 p-5">
              <h2 className="font-bold ">Antiblock:</h2>{" "}
              <p>
                Screen protectors or anti-glare films to keep your device safe
                from scratches and smudges.
              </p>
            </span>
            <span className="col-span-1 grid border-2 border-pink-500 p-5">
              <h2 className="font-bold">Pouchette:</h2>{" "}
              <p>
                Stylish and functional phone pouches for carrying your device
                securely and conveniently.
              </p>
            </span>
            <span className="col-span-1 grid border-2 border-pink-500 p-5">
              <h2 className="font-bold">USB:</h2>{" "}
              <p>
                High-speed USB cables and adapters for easy data transfer and
                charging.
              </p>
            </span>
          </div>
        </section>
      </div>
    </main>
  );
}
